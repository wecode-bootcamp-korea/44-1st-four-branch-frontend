import React, { useState, useEffect } from 'react';
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

  const filteredItem = [
    searchList.filter(item =>
      item.name.toLowerCase().includes(searchKeyword.toLowerCase())
    ),
  ];

  useEffect(() => {
    fetch('/data/searchItemList.json')
      .then(response => response.json())
      .then(result => setSearchList(result));
  });

  return (
    <div className="search">
      <section className="searchWrap">
        <img src={Logo} alt="logo" />
        <form className="searchBox">
          <input
            className="searchInput"
            value={searchKeyword}
            onChange={itemSearch}
          />
          <FiArrowRight className="icon20 enterButton" />
        </form>
        <div className="hotKeyword">
          <h5>인기검색어</h5>
          <p className="keyword">클렌저</p>
          <p className="keyword">퍼퓸</p>
        </div>
      </section>
      <section className="resultWrap">
        <SearchList searchList={filteredItem} setSearchList={setSearchList} />

        {/* <div className="searchList">
          <ul>
            <li>
              <Link to="/">구매하기</Link>
            </li>
            <li>
              <Link to="/">에센셜 바디 앤 핸드 케어 듀오</Link>
            </li>
            <li>
              <Link to="/">콤팩트 바디 앤 핸드 케어 듀오</Link>
            </li>
            <li>
              <Link to="/">어드벤처러 페이스 & 핸드 듀오</Link>
            </li>
            <li>
              <Link to="/">레저렉션 아로마틱 핸드 밤</Link>
            </li>
            <li>
              <Link to="/">레버런스 아로마틱 핸드 밤</Link>
            </li>
          </ul>
        </div> */}
      </section>
    </div>
  );
}

export default Search;
