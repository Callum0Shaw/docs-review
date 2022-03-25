import React, { useEffect, useState } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { getHighestRatedDoc, getLatestReview } from '../utils/firebase';
import Stars from './Stars';
import ArrowButton from './ArrowButton';

function BestRated() {
  const [highestDoc, setHighestDoc] = useState(null);
  const [latestReview, setLatestReview] = useState('');

  useEffect(() => {
    // get highest rated doc
    async function getDoc() {
      const doc = await getHighestRatedDoc();
      const review = await getLatestReview(doc.reviews);
      setHighestDoc(doc);
      setLatestReview(review);
    }
    getDoc();
  }, []);

  return (
    <div className="container con-padding">
      <article className="text-black">
        <header className="">
          <h3 className="text-xl font-semibold flex-center text-second">
            Highest Rated Documentaion
          </h3>
          <p className="flex-center">
            What documentaion do developers like the most
          </p>
        </header>
        <div className="mx-auto bg-white shadow-grey shadow-xl min-w-[320px] max-w-[480px] grid gap-6 rounded-xl px-6 pt-6 pb-16">
          <img src="/logos/tailwind-logo.svg" alt="" className="px-6" />
          <div className="grid gap-2 mx-auto">
            <h4 className="text-lg font-semibold">
              {highestDoc && highestDoc.name}
            </h4>
            <div className="flex gap-3 justify-start py-1">
              {highestDoc &&
                highestDoc.keywords.map((keyword) => (
                  <p className="keyword" key={keyword}>
                    {keyword}
                  </p>
                ))}
            </div>
            <div className="w-9/12 mx-auto my-3">
              <h5 className="text-md">Recent review:</h5>
              <RiDoubleQuotesL
                className="inline mt-[-1rem] mx-1 text-lightaccent"
                size={14}
              />
              <p className="mb-[-6px] inline">{latestReview.review}</p>
              <RiDoubleQuotesR
                className="inline mt-[-1rem] mx-1 text-lightaccent"
                size={14}
              />
              <p className="  text-right">By: Callum Shaw</p>
            </div>
            <div className="flex justify-between mt-2 items-center px-2">
              {/* <VoteButton size={36} /> */}
              <ArrowButton text="See more" />
              <Stars
                rating={highestDoc && highestDoc.rating}
                reviews={highestDoc && highestDoc.reviews.length}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BestRated;
