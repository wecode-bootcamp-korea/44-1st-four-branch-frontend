import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput/SearchInput.js';
import SearchList from './SearchList/SearchList';
import Logo from '../../assets/aesop-logo.png';
import { FiArrowRight } from 'react-icons/fi';
import './Search.scss';

function Search() {
  const [searchList, setSearchList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const itemSearch = e => {
    e.preventDefault();
    setSearchKeyword(e.target.value);
  };

  const filteredItem = searchList.filter(item =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  useEffect(() => {
    fetch('/data/searchItemList.json')
      .then(response => response.json())
      .then(result => setSearchList(result));
  }, []);

  return (
    <div className="search">
      <SearchInput
        Logo={Logo}
        searchKeyword={searchKeyword}
        itemSearch={itemSearch}
        FiArrowRight={FiArrowRight}
      />
      <section className="resultWrap">
        <SearchList searchList={filteredItem} setSearchList={setSearchList} />
      </section>
    </div>
  );
}

export default Search;
