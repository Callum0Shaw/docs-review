import React from 'react';
import { MdOutlineReviews, MdOutlineEmojiPeople } from 'react-icons/md';
import ArrowButton from './ArrowButton';

const Hero = () => {
  return (
    <div className="background h-auto block text-black">
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center pt-44 pb-28 md:pb-32">
        <div className="flex flex-col gap-6 md:items-start md:text-left text-center items-center py-4">
          <header className="">
            <h1 className="text-7xl font-normal subpixel-antialiased">
              Welcome to
              <span className="text-second font-semibold"> Doc Review</span>
            </h1>
            <p className="my-4 md:w-9/12 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              dicta nostrum odit saepe? Quibusdam, est.
            </p>
          </header>
          <div className="flex gap-6">
            <div>
              <div className="flex gap-3 items-end">
                <MdOutlineEmojiPeople size={32} />
                <p className="text-2xl font-semibold">834</p>
              </div>
              <p className="text-sm">Users</p>
            </div>
            <div>
              <div className="flex gap-3 items-end font-semibold">
                <MdOutlineReviews size={32} />
                <p className="text-2xl">23,243</p>
              </div>
              <p className="text-sm">Reviews</p>
            </div>
          </div>
          <ArrowButton text={'See more'} />
        </div>
        <img src="/images/test.svg" alt="" />
      </section>
    </div>
  );
};

export default Hero;
