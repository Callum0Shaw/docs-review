import React from 'react';
import Stars from './Stars';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import ArrowButton from './ArrowButton';

const BestRated = () => {
  return (
    <div className="bg-white text-black">
      <div className="container pt-16 pb-32 grid grid-cols-1 gap-4">
        <div className="mb-4">
          <h3 className="text-xl font-semibold flex-center text-second">
            Highest Rated Documentaion
          </h3>
          <p className="flex-center">
            What documentaion do developers like the most
          </p>
        </div>
        <div className="mx-auto bg-white shadow-grey shadow-xl min-w-[320px] max-w-[480px] px-6 pt-6 pb-12 grid gap-6 rounded-xl">
          <img src="/images/logos/tailwind-logo.svg" alt="" className="px-6" />
          <div className="grid gap-2 mx-auto">
            <h4 className="text-lg font-semibold">Tailwind CSS</h4>
            <div className="flex gap-3 justify-start py-1">
              <p className="bg-lightgrey rounded p-1">Detailed</p>
              <p className="bg-lightgrey rounded p-1">Tutorial</p>
              <p className="bg-lightgrey rounded p-1">Easy-reading</p>
            </div>
            <div className="w-9/12 mx-auto my-3">
              <h5 className="text-md">Recent review:</h5>
              <RiDoubleQuotesL className='inline mt-[-1rem] mx-1 text-lightaccent' size={14}/>
              <p className="mb-[-6px] inline">
                Super great for beginners! Very great search tool as well. To
                the point and detailed
              </p>
              <RiDoubleQuotesR className="inline mt-[-1rem] mx-1 text-lightaccent" size={14}/>
              <p className="  text-right">By: Callum Shaw</p>
            </div>
            <div className="flex justify-between mt-2 items-center px-2">
              {/* <VoteButton size={36} /> */}
              <ArrowButton text={'See more'}/>
              <Stars rating={4.7} reviews={231} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestRated;
