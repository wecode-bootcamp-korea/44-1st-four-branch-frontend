import React, { useState } from 'react';
import SearchInput from './SearchInput/SearchInput.js';
import SearchList from './SearchList/SearchList';
import Logo from '../../assets/fourbsopLogo.png';
import { FiArrowRight } from 'react-icons/fi';
import './Search.scss';
import { useEffect } from 'react';

function Search() {
  const [searchList, setSearchList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  function itemSearch(e) {
    console.log(1);
    e.preventDefault();
    setSearchKeyword(e.target.value);
  }
  useEffect(() => {
    fetch(`http://10.58.52.90:3000/products/search?keyword=${searchKeyword}`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => setSearchList(result));
  }, [searchKeyword]);

  console.log(searchList);
  console.log(`-----------${searchKeyword}------------`);

  // function searchItem() {
  //   fetch(`http://10.58.52.90:3000/products/search?keyword=${searchKeyword}`, {
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => setSearchList(result));
  // }

  return (
    <div className="search">
      <SearchInput
        className="searchInput"
        Logo={Logo}
        searchKeyword={searchKeyword}
        itemSearch={itemSearch}
        FiArrowRight={FiArrowRight}
        // searchItem={searchItem}
      />
      <div className="searchResult">
        {searchKeyword.length > 0 && <SearchList searchList={searchList} />}
      </div>
    </div>
  );
}

export default Search;
