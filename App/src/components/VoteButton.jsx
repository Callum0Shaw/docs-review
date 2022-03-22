import React from 'react';
import { MdThumbsUpDown } from 'react-icons/md';

const VoteButton = ({ size, setShowForm, docID }) => {
  

  return (
    <button className="text-lightaccent" onClick={() => setShowForm({state: true, docID: docID})}>
      
      <MdThumbsUpDown size={size} />
    </button>
  );
};

export default VoteButton;
