import React from 'react';
import SearchItem from '../SearchItem/SearchItem';
import './SearchList.scss';

function SearchList({ filteredItem }) {
  return (
    <div className="searchList">
      {!filteredItem.length ? (
        filteredItem.map(item => {
          return (
            <SearchItem
              className="searchItem"
              key={item.id}
              item={item}
              filteredItem={filteredItem}
            />
          );
        })
      ) : (
        <p className="noResult">검색결과가 없습니다.</p>
      )}
    </div>
  );
}

export default SearchList;
