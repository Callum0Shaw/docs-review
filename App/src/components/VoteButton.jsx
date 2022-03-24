import React from 'react';
import { MdThumbsUpDown } from 'react-icons/md';

const VoteButton = ({ size, docID }) => {
  

  return (
    <button className="bg-accent py-1 px-2 rounded hover:bg-lightaccent flex flex-row text-xs justify-center items-center gap-3 font-medium" onClick={() => setShowForm({state: true, docID: docID})}>
      Leave a review
      <MdThumbsUpDown size={size} />
    </button>
  );
};

export default VoteButton;
