import React from 'react';
import './SearchItem.scss';

function SearchItem({ item, itemHover, buttonName }) {
  const { name, imageUrl } = item;
  return (
    <div className="searchItem">
      <img className={`itemImage ${itemHover}`} alt={name} src={imageUrl} />
      <div className={`primarySolidButton ${itemHover}`}>{buttonName}</div>
    </div>
  );
}

export default SearchItem;
