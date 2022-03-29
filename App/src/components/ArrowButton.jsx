import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import PropTypes from 'prop-types';

function ArrowButton({ text }) {
  return (
    <button type="button" className="button">
      {text}
      <MdArrowForward size={18} />
    </button>
  );
}

ArrowButton.protoTypes = {
  text: PropTypes.string.isRequired,
};

export default ArrowButton;
