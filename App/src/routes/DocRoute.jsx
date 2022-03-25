import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Doc from '../components/Doc';
import { getDocumentFromName, getAllReviewsOfDoc } from '../utils/firebase';

function DocRoute() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [doc, setDoc] = useState(null);
  const [reviews, setReviews] = useState([]);

  const { docName } = useParams();

  useEffect(() => {
    async function getDoc() {
      try {
        const docsRes = await getDocumentFromName(docName);
        setDoc(docsRes);
        const reviewsRes = await getAllReviewsOfDoc(docsRes.reviews);
        setReviews(reviewsRes);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
        setIsLoaded(false);
      }
    }
    getDoc();
  }, [docName]);
  return (
    <div>
      {isLoaded ? (
        <Doc doc={doc} reviews={reviews} setReviews={setReviews} />
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default DocRoute;
