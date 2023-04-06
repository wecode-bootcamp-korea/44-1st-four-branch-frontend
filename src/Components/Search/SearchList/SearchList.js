import React from 'react';
import './SearchList.scss';

function SearchList({ item }) {
  const { name, imageUrl } = item;

  return (
    <div className="searchList">
      <h2>관련 검색어</h2>
      <h2>{name}</h2>
      <img alt={name} src={imageUrl} />
    </div>
  );
}

export default SearchList;
