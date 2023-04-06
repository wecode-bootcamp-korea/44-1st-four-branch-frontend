import React from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import './ArrowButton.scss';

function ArrowButton({ handleTextView, textView }) {
  return (
    <div className="arrowButton" onClick={handleTextView}>
      {textView ? (
        <FiChevronUp className="icon20 closeButton" />
      ) : (
        <FiChevronDown className="icon20 openButton" />
      )}
    </div>
  );
}

export default ArrowButton;
