import React, { useState } from 'react';
import HoverItemView from '../HoverItemView/HoverItemView';
import './SearchItem.scss';

function SearchItem({ item }) {
  const { name } = item;
  const [isHover, setIsHover] = useState(false);

  function viewItem() {
    setIsHover(true);
  }

  function notViewItem() {
    setIsHover(false);
  }

  return (
    <div className="searchItem">
      <p
        className="searchName"
        onMouseOver={viewItem}
        onMouseLeave={notViewItem}
      >
        {name}
      </p>
      <div className="hoverItem">
        {isHover ? <HoverItemView item={item} /> : null}
      </div>
    </div>
  );
}

export default SearchItem;
