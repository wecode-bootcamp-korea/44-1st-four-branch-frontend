import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput/SearchInput.js';
import SearchList from './SearchList/SearchList';
import Logo from '../../assets/fourbsopLogo.png';
import { FiArrowRight } from 'react-icons/fi';
import './Search.scss';

function Search() {
  const [searchList, setSearchList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredItem = searchList.filter(item =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  function itemSearch(e) {
    e.preventDefault();
    setSearchKeyword(e.target.value);
  }

  useEffect(() => {
    fetch('http://10.58.52.90:3000/products', {
      // method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => setSearchList(result));

    // fetch('/data/searchItemList.json')
    //   .then(response => response.json())
    //   .then(result => setSearchList(result));
  }, []);

  return (
    <div className="search">
      <SearchInput
        className="searchInput"
        Logo={Logo}
        searchKeyword={searchKeyword}
        itemSearch={itemSearch}
        FiArrowRight={FiArrowRight}
      />
      <div className="searchResult">
        {searchKeyword.length && <SearchList filteredItem={filteredItem} />}
      </div>
    </div>
  );
}

export default Search;
