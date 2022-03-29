import {
  collection,
  addDoc,
  doc,
  query,
  orderBy,
  limit,
  getDocs,
  updateDoc,
  arrayUnion,
  getDoc,
  where,
  increment,
  startAfter,
  endBefore,
} from 'firebase/firestore';
import { db } from './firebase.config';

const docsRef = collection(db, 'docs');
const reviewsRef = collection(db, 'reviews');
const countersRef = collection(db, 'counters');

export async function incrementCounter(col) {
  const ref = doc(db, 'counters', col);
  try {
    await updateDoc(ref, {
      count: increment(1),
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * Creates new review and stores in firestore
 * @param  {string} review - Review in string
 * @param  {string} docID - ID of document review is for
 */

export async function storeReview(review, docID) {
  // Get reference for doc
  const docRef = doc(db, 'docs', docID);
  // add new review with ref of the new doc
  const reviewRef = await addDoc(reviewsRef, {
    review,
    docRef,
    dateAdded: new Date(),
  });
  // Add reviewRef to the relevent document
  // Get reviewRef
  const newReviewRef = doc(db, 'reviews', reviewRef.id);
  // update doc with new reviewRef
  await updateDoc(docRef, {
    reviews: arrayUnion(newReviewRef),
  });
  // get new review to return
  const newReview = await getDoc(reviewRef);
  // add review counter
  await incrementCounter('reviews');

  return newReview.data();
}

/**
 * Adds new doc from form input to firestore
 * @param  {object} data - Unformated data from addDocForm
 */

export async function storeDoc(data) {
  // Create keywords arr based from users selection (those which are true)
  const keywords = [];
  for (const key in data.keywords) {
    if (data.keywords[key]) {
      keywords.push(key);
    }
  }
  // data for new documentation doc
  // rating is / 100 due to range input being out of 500 for smoothness
  const docData = {
    name: data.name,
    description: data.description,
    rating: data.rating / 100,
    keywords,
    dateAdded: new Date(),
    reviews: 1,
  };
  // add new doc to db
  let newDoc;
  try {
    newDoc = await addDoc(docsRef, docData);
    console.log(newDoc);
  } catch (error) {
    console.log(error);
  }

  // add new review with ref of the new doc
  await storeReview(data.review, newDoc.id);

  // increase doc counter
  await incrementCounter('docs');
  return newDoc;
}
/**
 * Get Document base on name
 * @param  {String} name - Name of Document to be found
 */
export async function getDocumentFromName(name) {
  // Query, returning a queryShot
  const q = await query(docsRef, where('name', '==', name));

  // Get doc snapshots from query snapshot
  const docSnapshots = await getDocs(q);

  const document = {
    ...docSnapshots.docs[0].data(),
    docID: docSnapshots.docs[0].id,
  };
  return document;
}

/**
 * Get the current highest rated doc in 'docs'
 * @return {object} Returns the doc including ID
 */
export async function getHighestRatedDoc() {
  let bestDoc;
  try {
    const q = await query(docsRef, orderBy('rating', 'desc'), limit(1));
    const qSnapshot = await getDocs(q);

    const docs = qSnapshot.docs.map((d) => d.data());
    [bestDoc] = docs;
  } catch (error) {
    console.error(error);
  }
  return bestDoc;
}
/**
 * Gets content of all reviews passed into it
 * @param  {array} reviewRefs - Array of review refs from corrosponding doc
 * @return {object} - Array of review objects
 */
export async function getAllReviewsOfDoc(reviewRefs) {
  const promises = reviewRefs.map(async (review) => getDoc(review));
  const reviewSnapshots = await Promise.all(promises);

  const reviews = reviewSnapshots.map((r) => ({ ...r.data(), id: r.id }));
  return reviews;
}

/**
 * Takes in array of review refs and orders by date added and retrieves lastest review
 * @param  {array} reviews - Array of review refs
 */
export async function getLatestReview(reviewRefs) {
  const reviews = await getAllReviewsOfDoc(reviewRefs);

  const sortedReviews = reviews.sort((a, b) =>
    a.dateAdded.seconds < b.dateAdded.seconds ? 1 : -1
  );
  return sortedReviews[0];
}
/**
 * Gets list of matching or part matching docs
 * from: https://dev.to/sameercharles/firestore-simple-string-search-2dab
 * @param  {String} searchTerm - user inputted search
 */
export async function getSearchResults(searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  const strlength = searchTerm.length;
  const strFrontCode = searchTerm.slice(0, strlength - 1);
  const strEndCode = searchTerm.slice(strlength - 1, searchTerm.length);
  // This is an important bit..
  const endCode =
    strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);
  //  get query

  const q = await query(
    docsRef,
    where('name', '>=', searchTerm),
    where('name', '<', endCode),
    limit(10)
  );
  const docSnapshots = await getDocs(q);
  const docs = docSnapshots.docs.map((d) => ({ ...d.data(), docID: d.id }));
  return docs;
}

export async function getFirstList(count) {
  const q = query(docsRef, orderBy('name'), limit(count));
  const docSnapshots = await getDocs(q);
  const docs = docSnapshots.docs.map((d) => ({ ...d.data(), docID: d.id }));
  return {
    docs,
    first: docSnapshots.docs[0],
    last: docSnapshots.docs[count - 1],
  };
}
export async function getNextList(count, lastVisible) {
  const q = query(
    docsRef,
    orderBy('name'),
    startAfter(lastVisible),
    limit(count)
  );
  const docSnapshots = await getDocs(q);
  const docs = docSnapshots.docs.map((d) => ({ ...d.data(), docID: d.id }));
  return {
    docs,
    first: docSnapshots.docs[0],
    last: docSnapshots.docs[count - 1],
  };
}

export async function getPreviousList(count, firstVisible) {
  const q = query(
    docsRef,
    orderBy('name'),
    endBefore(firstVisible),
    limit(count)
  );
  const docSnapshots = await getDocs(q);
  const docs = docSnapshots.docs.map((d) => ({ ...d.data(), docID: d.id }));
  return {
    docs,
    first: docSnapshots.docs[0],
    last: docSnapshots.docs[count - 1],
  };
}

export async function getCounter(col) {
  // get ref
  const ref = doc(db, 'counters', col);
  // get count
  const res = await getDoc(ref);

  const data = res.data();
  return data.count;
}
