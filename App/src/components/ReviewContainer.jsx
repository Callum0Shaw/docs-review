import React, { useState, useEffect } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { getFirstList, getNextList, getPreviousList } from '../utils/firebase';
import ReviewCard from './ReviewCard';
import ArrowButton from './ArrowButton';

function ReviewContainer({ setShowForm, count = 6 }) {
  const [docArr, setDocArr] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [firstVisible, setFirstVisible] = useState(null);
  const [listStatus, setListStatus] = useState('loading');

  // On load get first docs and set cursors.
  useEffect(() => {
    async function getDocs() {
      const { docs, first, last } = await getFirstList(count);
      // Status to indicate whcihc buttons to hide
      setListStatus('first');
      // cursors
      setFirstVisible(first);
      setLastVisible(last);
      setDocArr(docs);
    }
    getDocs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // Only to be run on load
  }, []);

  async function getNextDocs() {
    async function getDocs() {
      const { docs, first, last } = await getNextList(count, lastVisible);
      // If there is no last object then this is the last carosel
      if (!last) {
        // Status to indicate whcihc buttons to hide
        setListStatus('last');
        setFirstVisible(first);

        setDocArr(docs);
      } else {
        // Status to indicate whcihc buttons to hide
        setListStatus('show');
        setFirstVisible(first);
        setLastVisible(last);
        setDocArr(docs);
      }
    }
    getDocs();
  }

  async function getPreviousDocs() {
    async function getDocs() {
      const { docs, first, last } = await getPreviousList(count, firstVisible);
      setListStatus('show');
      setFirstVisible(first);
      setLastVisible(last);
      setDocArr(docs);
    }
    getDocs();
  }
  return (
    <section className="w-full hex-background">
      <div className="container py-10 grid gap-2">
        <div className="flex items-center justify-between my-4">
          <h2 className="text-xl text-white font-semibold">More software</h2>
          <div className="gap-4 hidden sm:flex">
            <button
              type="button"
              className={`p-2 bg-accent ${listStatus === 'first' && 'hidden'}`}
              onClick={getPreviousDocs}
              // disabled={listStatus === 'first'}
            >
              <MdOutlineArrowBackIos size={24} />
            </button>
            <button
              type="button"
              className={`p-2 bg-accent ${listStatus === 'last' && 'hidden'}`}
              onClick={getNextDocs}
            >
              <MdOutlineArrowForwardIos size={24} />
            </button>
          </div>
        </div>
        {listStatus !== 'loading' && (
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
        )}
        <div className="flex-center my-6">
          <ArrowButton text="See more" />
        </div>
      </div>
    </section>
  );
}

export default ReviewContainer;
