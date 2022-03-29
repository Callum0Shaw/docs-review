import React from 'react';
import { Outlet } from 'react-router-dom';
import ReviewContainer from '../components/ReviewContainer';

function Docs() {
  return (
    <div>
      <Outlet />
      <ReviewContainer />
    </div>
  );
}

export default Docs;
