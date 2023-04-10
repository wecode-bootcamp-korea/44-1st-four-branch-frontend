import React from 'react';
import SearchItem from '../SearchItem/SearchItem';
import './SearchList.scss';

function SearchList({ searchList }) {
  return (
    <div className="searchList">
      {searchList.length > 0 ? (
        searchList.map(item => (
          <SearchItem
            className="searchItem"
            key={item.id}
            item={item}
            searchList={searchList}
          />
        ))
      ) : (
        <p>검색결과가 없습니다.</p>
      )}
    </div>
  );
}

export default SearchList;
