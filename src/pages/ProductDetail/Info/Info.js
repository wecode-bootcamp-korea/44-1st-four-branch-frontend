import React from 'react';
import { INFO_LIST } from './InfoData';
import InfoItem from './InfoItem/InfoItem';
import './Info.scss';

function Info() {
  return (
    <div className="info">
      <ul>
        {INFO_LIST.map(item => (
          <InfoItem key={item.id} headline={item.headline} text={item.text} />
        ))}
      </ul>
    </div>
  );
}

export default Info;
