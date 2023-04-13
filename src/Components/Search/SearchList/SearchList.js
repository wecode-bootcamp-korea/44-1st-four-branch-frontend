import React from 'react';
import SearchItem from '../SearchItem/SearchItem';
import './SearchList.scss';

function SearchList({ searchList }) {
  return (
    <div className="searchList">
      {searchList.length ? (
        searchList.map(item => {
          console.log(item);
          return (
            <SearchItem className="searchItem" key={item.id} item={item} />
          );
        })
      ) : (
        <p className="noResult">검색결과가 없습니다.</p>
      )}
    </div>
  );
}

export default SearchList;
