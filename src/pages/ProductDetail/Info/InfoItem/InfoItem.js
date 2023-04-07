import React, { useState } from 'react';

import './InfoItem.scss';
import ArrowButton from '../ArrowButton/ArrowButton';

function InfoItem({ id, headline, text }) {
  const [textView, setTextView] = useState(false);
  const [slide, setSlide] = useState('');

  function handleTextView() {
    setTextView(textView => !textView);
    setSlide('slide');
  }

  return (
    <li className="infoItem">
      <div className="title">
        <h2 className="titleText">{headline}</h2>
        <ArrowButton
          key={id}
          handleTextView={handleTextView}
          textView={textView}
        />
      </div>
      {textView && <p className={`text ${slide}`}>{text}</p>}
    </li>
  );
}

export default InfoItem;
