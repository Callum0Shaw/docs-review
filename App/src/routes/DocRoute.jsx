import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Doc from '../components/Doc';
import AddDocForm from '../components/AddDocForm';
import { getDocumentFromName, getAllReviewsOfDoc } from '../utils/firebase';

function DocRoute() {
  const [loadingStatus, setLoadingStatus] = useState('loading');
  const [doc, setDoc] = useState(null);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const { docName } = useParams();

  useEffect(() => {
    async function getDoc() {
      try {
        const docsRes = await getDocumentFromName(docName);
        setDoc(docsRes);
        const reviewsRes = await getAllReviewsOfDoc(docsRes.reviews);
        setReviews(reviewsRes);
        setLoadingStatus('loaded');
      } catch (error) {
        setLoadingStatus('failed');
      }
    }
    getDoc();
  }, [docName, navigate]);
  return (
    <div>
      {loadingStatus === 'loaded' && (
        <Doc doc={doc} reviews={reviews} setReviews={setReviews} />
      )}
      {loadingStatus === 'loading' && <h1 className="text-black">Loading</h1>}
      {loadingStatus === 'failed' && (
        <div className="text-black">
          <h2>Not found!</h2>
          <p>It seems your query is not yet in our system. </p>
          <AddDocForm />
        </div>
      )}
    </div>
  );
}

export default DocRoute;
