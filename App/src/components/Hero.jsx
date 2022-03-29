import React, { useState, useEffect } from 'react';
import { MdOutlineReviews, MdArticle } from 'react-icons/md';
import ArrowButton from './ArrowButton';
import { getCounter } from '../utils/firebase';

function Hero() {
  const [docCount, setDocCount] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);

  useEffect(() => {
    async function getCounts() {
      const docs = await getCounter('docs');
      const reviews = await getCounter('reviews');
      setDocCount(docs);
      setReviewCount(reviews);
    }
    getCounts();
  }, []);

  return (
    <div className="background h-auto block text-black">
      <section className="container con-padding grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
        <div className="flex flex-col gap-6 md:items-start md:text-left text-center items-center py-4">
          <header className="">
            <h1 className="text-7xl font-normal subpixel-antialiased">
              Welcome to
              <span className="text-second font-semibold"> Doc Review</span>
            </h1>
            <p className="my-4 md:w-9/12 text-sm">
              Help improve the community, leave a review for your favourite
              documentation found in your programming life.
            </p>
          </header>
          <div className="flex gap-6">
            <div>
              <div className="flex gap-3 items-end">
                <MdArticle className="fill-second" size={32} />
                <p className="text-2xl font-semibold">{docCount}</p>
              </div>
              <p className="text-sm text-third">Documents</p>
            </div>
            <div>
              <div className="flex gap-3 items-end font-semibold">
                <MdOutlineReviews className="fill-second" size={32} />
                <p className="text-2xl">{reviewCount}</p>
              </div>
              <p className="text-sm">Reviews</p>
            </div>
          </div>
          <ArrowButton text="Go to docs" />
        </div>
        <img src="/images/test.svg" alt="" />
      </section>
    </div>
  );
}

export default Hero;
