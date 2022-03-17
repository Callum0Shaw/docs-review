import React from 'react';
import Stars from './Stars';
import VoteButton from './VoteButton';

const ReviewCard = ({ logo, title }) => {
  return (
    <div className="relative bg-white rounded-md shadow-lg hover:shadow-xl shadow-slate-200 hover:scale-105 px-3 py-4 md:px-4">
      <div className="flex gap-4">
        <img src={logo} alt="photo of react js" className="h-20 w-20" />
        <div className="grid gap-1 text-black w-full">
          <div className="grid w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-md font-medium">{title}</h2>
              <div className="text-black flex gap-1">
                <Stars rating={3.5} reviews={231} />
              </div>
            </div>
            <p className="font-extralight text-[.7rem]">Frontend</p>
          </div>
          <p className="font-extralight w-3/4">
            Frontend libary for building user interfaces
          </p>
        </div>
      </div>
      <div className="absolute right-4 bottom-4 ">
        <VoteButton size={30}/>
      </div>
    </div>
  );
};

export default ReviewCard;
