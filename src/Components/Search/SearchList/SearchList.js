import React from 'react';
import SearchItem from './SearchItem/SearchItem';
import './SearchList.scss';

function SearchList({ searchList }) {
  return (
    <div className="searchList">
      {searchList.map(item => (
        <SearchItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default SearchList;
