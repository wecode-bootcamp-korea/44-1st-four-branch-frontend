import React, { useState, useEffect } from 'react';
import './SearchItem.scss';

function SearchItem({ item }) {
  const { name, imageUrl } = item;
  const [itemHover, setItemHover] = useState('');
  const [buttonName, setButtonName] = useState('');

  function imageView() {
    setItemHover('itemHover');
    setButtonName('더 알아보기 >');
  }

  function imageNotView() {
    setItemHover('');
    setButtonName('');
  }

  return (
    <div className="searchItem">
      <p
        className="ItemName"
        onMouseOver={imageView}
        onMouseLeave={imageNotView}
      >
        {name}
      </p>
      <div className="hoverResult">
        <div className="imageWrap">
          <img className={`itemImage ${itemHover}`} alt={name} src={imageUrl} />
        </div>
        <div className={`primarySolidButton ${itemHover}`}>{buttonName}</div>
      </div>
    </div>
  );
}

export default SearchItem;
