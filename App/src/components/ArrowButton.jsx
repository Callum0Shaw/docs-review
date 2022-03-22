import React from 'react';
import { MdArrowForward } from 'react-icons/md';

const ArrowButton = ({ text }) => {
  return (
    <button className="button">
      {text}
      <MdArrowForward size={18} />
    </button>
  );
};

export default ArrowButton;
