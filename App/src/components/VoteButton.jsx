import React from 'react';
import { MdThumbsUpDown } from 'react-icons/md';

function VoteButton({ size, docID }) {
  return (
    <button
      type="button"
      className="button"
      onClick={() => setShowForm({ state: true, docID })}
    >
      Leave a review
      <MdThumbsUpDown size={size} />
    </button>
  );
}

export default VoteButton;
