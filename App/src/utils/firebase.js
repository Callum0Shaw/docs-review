import { db } from './firebase.config';
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
} from 'firebase/firestore';



/**
 * Adds new doc from form input to firestore
 * @param  {object} data - Unformated data from addDocForm
 */

export async function storeDoc(data) {
  // Create keywords arr based from users selection (those which are true)
  let keywords = [];
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
    keywords: keywords,
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
  // Get reference for doc
  const docRef = doc(db, 'docs', docID);
  // add new review with ref of the new doc
  const newReview = await addDoc(collection(db, 'reviews'), {
    review: review,
    docRef: docRef,
    dateAdded: new Date(),
  });
  // Add reviewRef to the relevent document
  // Get reviewRef
  const newReviewRef = doc(db, 'reviews', newReview.id);
  // update doc with new reviewRef
  await updateDoc(docRef, {
    reviews: arrayUnion(newReviewRef),
  });

  return newReview;
}

export async function getDocument() {

}

/**
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
 * Takes in array of refs and orders by date added and retrieves lastest review
 * @param  {array} reviews - Array of review refs
 */
export async function getLatestReview(reviews) {
  const promises = reviews.map(async (review) => getDoc(review));
  const reviewSnapshots = await Promise.all(promises);

  const sortedReviews = reviewSnapshots
    .map((r) => r.data())
    .sort((a, b) => a.dateAdded.seconds < b.dateAdded.seconds ? 1 : -1);
  return sortedReviews[0];
}


