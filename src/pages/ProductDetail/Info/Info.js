import React from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { INFO_LIST } from './InfoData';
import './Info.scss';

function Info() {
  return (
    <div className="info">
      <ul>
        {INFO_LIST.map(item => (
          <li key={item.id}>
            <div className="title">
              <h2>{item.headline}</h2>
              <FiChevronUp className="icon20 closeButton" />
            </div>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
