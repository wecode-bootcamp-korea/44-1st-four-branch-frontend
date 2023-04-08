import React, { useState } from 'react';
import HoverItemView from '../HoverItemView/HoverItemView';
import './SearchItem.scss';

function SearchItem({ item }) {
  const { name } = item;
  const [isClicked, setIsClicked] = useState(false);

  function viewItem() {
    setIsClicked(true);
  }

  function notViewItem() {
    setIsClicked(false);
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
      <div className="clickedItem">
        {isClicked ? <HoverItemView item={item} /> : null}
      </div>
    </div>
  );
}

export default SearchItem;
