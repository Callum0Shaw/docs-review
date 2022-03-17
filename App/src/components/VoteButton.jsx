import React from 'react';
import { MdThumbsUpDown } from 'react-icons/md';

const VoteButton = ({size}) => {
  return (
    <button className="text-lightaccent">
      <MdThumbsUpDown size={size} />
    </button>
  );
};

export default VoteButton;
