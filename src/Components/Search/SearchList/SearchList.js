import React from 'react';
import HoverItem from '../SearchList/hoverItem/HoverItem';
import './SearchList.scss';

function SearchList({ searchList }) {
  return (
    <div className="searchList">
      {searchList.map(item => (
        <HoverItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default SearchList;
