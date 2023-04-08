import React from 'react';
import SearchItem from '../SearchItem/SearchItem';
import './SearchList.scss';

function SearchList({ searchList, isClicked, setIsClicked }) {
  return (
    <div className="searchList">
      {searchList.map(item => (
        <SearchItem
          className="searchItem"
          key={item.id}
          item={item}
          searchList={searchList}
          setIsClicked={setIsClicked}
          isClicked={isClicked}
        />
      ))}
    </div>
  );
}

export default SearchList;
