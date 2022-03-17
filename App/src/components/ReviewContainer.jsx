import React from 'react';
import ReviewCard from './ReviewCard';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import ArrowButton from './ArrowButton';

const ReviewContainer = () => {
  return (
    <section className="w-full hex-background">
      <div className="container py-10 grid gap-2">
        <div className="flex items-center justify-between my-4">
          <h2 className="text-xl text-white font-semibold">Software</h2>
          <div className="gap-4 hidden sm:flex">
            <button className="bg-accent rounded hover:bg-lightaccent h-8 w-8 flex-center">
              <MdOutlineArrowBackIos size={24} />
            </button>
            <button className="bg-accent rounded hover:bg-lightaccent h-8 w-8 flex-center">
              <MdOutlineArrowForwardIos size={24} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ReviewCard logo={'/images/logos/reactjs-logo.svg'} title={'React js'} />
          <ReviewCard logo={'/images/logos/redux-logo.svg'} title={'Redux'} />
          <ReviewCard
            logo={'/images/logos/tailwind-logo.svg'}
            title={'Tailwind CSS'}
          />
          <ReviewCard logo={'/images/logos/reactjs-logo.svg'} title={'React js'} />
          <ReviewCard logo={'/images/logos/redux-logo.svg'} title={'Redux'} />
          <ReviewCard
            logo={'/images/logos/tailwind-logo.svg'}
            title={'Tailwind CSS'}
          />
        </div>
        <div className="flex-center my-6">
          <ArrowButton text={'See more'}/>
        </div>
      </div>
    </section>
  );
};

export default ReviewContainer;
