import React, { useEffect } from 'react';
import './HoverItem.scss';

function HoverItem({ item }) {
  const { name, imageUrl } = item;

  return (
    <div className="hoverItem">
      <p>{name}</p>
      <img className="itemImage" alt={name} src={imageUrl} />
      <button className="primarySolidButton moreViewButton">
        더 알아보기 >
      </button>
    </div>
  );
}

export default HoverItem;
