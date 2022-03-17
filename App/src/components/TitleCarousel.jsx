import React from 'react';

const TitleCarousel = () => {
  return (
    <div className="flex h-full relative">
      <div className="absolute h-max-20 z-20 skew-y-1 rotate-1 shadow-white shadow">
        <img
          className="max-h-96"
          src="/images/tailwind.png"
          alt="Tailwind docs"
        />
      </div>
      <div className="absolute h-max-20  left-2 top-4 z-10 opacity-50 skew-y-1 rotate-1 shadow-white shadow">
        <img className="max-h-96" src="/images/reactjs.png" alt="React docs" />
      </div>
      <div className="absolute h-max-20 left-4 top-8 z-0 opacity-40 skew-y-1 rotate-1 shadow-white shadow-sm">
        <img className="max-h-96" src="/images/redux.png" alt="Redux docs" />
      </div>
    </div>
  );
};

export default TitleCarousel;
