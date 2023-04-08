import React from 'react';
import './HoverItemView.scss';

function HoverItemView({ item }) {
  const { name, imageUrl } = item;

  return (
    <div className="hoverItemView">
      <img className="hoverItemImage" alt={name} src={imageUrl} />
      <button className="primarySolidButton">더 알아보기</button>
    </div>
  );
}

export default HoverItemView;
