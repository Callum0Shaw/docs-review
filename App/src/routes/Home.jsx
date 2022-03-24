import React from 'react';
import Hero from '../components/Hero';
import Description from '../components/Description';
import BestRated from '../components/BestRated';
import About from '../components/About'
import ReviewContainer from '../components/ReviewContainer';


const Home = () => {
  return (
    <>
      <Hero />
      <Description />
      <BestRated />
      <ReviewContainer />
    </>
  );
};

export default Home;
