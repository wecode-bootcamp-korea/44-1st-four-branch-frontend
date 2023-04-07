import React from 'react';
import SearchItem from '../SearchItem/SearchItem';
import './SearchList.scss';

function SearchList({ itemHover, buttonName, item }) {
  return (
    <div className="searchList">
      <div>{item.name}</div>
      <SearchItem item={item} itemHover={itemHover} buttonName={buttonName} />
    </div>
  );
}

export default SearchList;
