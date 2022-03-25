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
} from 'firebase/firestore';
import { db } from './firebase.config';

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
  const newDoc = await addDoc(collection(db, 'docs'), docData);

  // add new review with ref of the new doc
  await storeReview(data.review, newDoc.id);

  return newDoc;
}

/**
 * Creates new review and stores in firestore
 * @param  {string} review - Review in string
 * @param  {string} docID - ID of document review is for
 */

export async function storeReview(review, docID) {
  console.log(review, docID);
  // Get reference for doc
  const docRef = doc(db, 'docs', docID);
  // add new review with ref of the new doc
  const reviewRef = await addDoc(collection(db, 'reviews'), {
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

  return newReview.data();
}
/**
 * Get Document base on name
 * @param  {String} name - Name of Document to be found
 */
export async function getDocumentFromName(name) {
  // Get ref of docs collection
  const docsRef = collection(db, 'docs');
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
    const q = await query(
      collection(db, 'docs'),
      orderBy('rating', 'desc'),
      limit(1)
    );
    const qSnapshot = await getDocs(q);

    const docs = qSnapshot.docs.map((d) => d.data());
    bestDoc = docs[0];
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
