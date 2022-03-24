import React, { useState, useEffect } from 'react';
import Doc from '../components/Doc';
import { useParams } from 'react-router-dom';
import { getDocumentFromName, getAllReviewsOfDoc } from '../utils/firebase';

const doc = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [doc, setDoc] = useState(null);
  const [reviews, setReviews] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function getDoc() {
      try {
        const docsRes = await getDocumentFromName(params.docName);
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
  }, []);
  return (
    <>{isLoaded ? <Doc doc={doc} reviews={reviews} /> : <h1>loading</h1>}</>
  );
};

export default doc;
