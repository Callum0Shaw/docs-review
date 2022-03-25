import React, { useState, useEffect } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { orderBy, limit, query, collection, getDocs } from 'firebase/firestore';
import ReviewCard from './ReviewCard';
import ArrowButton from './ArrowButton';
import { db } from '../utils/firebase.config';

function ReviewContainer({ setShowForm }) {
  const [docArr, setDocArr] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'docs'), orderBy('dateAdded'), limit(3));
    async function getFirstSixDocs() {
      const docSnapshots = await getDocs(q);

      const docs = docSnapshots.docs.map((d) => ({ ...d.data(), id: d.id }));
      setDocArr(docs);
    }
    getFirstSixDocs();
  }, []);

  return (
    <section className="w-full hex-background">
      <div className="container py-10 grid gap-2">
        <div className="flex items-center justify-between my-4">
          <h2 className="text-xl text-white font-semibold">More software</h2>
          <div className="gap-4 hidden sm:flex">
            <button
              type="button"
              className="bg-accent rounded hover:bg-lightaccent h-8 w-8 flex-center"
            >
              <MdOutlineArrowBackIos size={24} />
            </button>
            <button
              type="button"
              className="bg-accent rounded hover:bg-lightaccent h-8 w-8 flex-center"
            >
              <MdOutlineArrowForwardIos size={24} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {docArr.map((doc) => (
            <ReviewCard
              key={doc.id}
              logo="/logos/tailwind-logo.svg"
              doc={doc}
              setShowForm={setShowForm}
            />
          ))}
        </div>
        <div className="flex-center my-6">
          <ArrowButton text="See more" />
        </div>
      </div>
    </section>
  );
}

export default ReviewContainer;
