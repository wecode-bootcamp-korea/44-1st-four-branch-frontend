import React, { useState } from 'react';
import HoverItemView from '../HoverItemView/HoverItemView';
import './SearchItem.scss';

function SearchItem({ item }) {
  const [isHover, setIsHover] = useState(false);

  const showProduct = () => {
    setIsHover(true);
  };

  const hideProduct = () => {
    setIsHover(false);
  };

  return (
    <div
      className="searchItem"
      onMouseEnter={showProduct}
      onMouseLeave={hideProduct}
    >
      <div className="searchName" id={item.id}>
        <div className="hoverItem">
          {isHover && <HoverItemView item={item} showProduct={showProduct} />}
        </div>
        {item.name}
      </div>
    </div>
  );
}

export default SearchItem;
