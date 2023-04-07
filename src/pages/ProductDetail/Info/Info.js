import React from 'react';
import { INFO_LIST } from './InfoData';
import InfoItem from './InfoItem/InfoItem';
import './Info.scss';

function Info() {
  return (
    <div className="info">
      <ul>
        {INFO_LIST.map(({ id, headline, text }) => (
          <InfoItem key={id} headline={headline} text={text} />
        ))}
      </ul>
    </div>
  );
}

export default Info;
