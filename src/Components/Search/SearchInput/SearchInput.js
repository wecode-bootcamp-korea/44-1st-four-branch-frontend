import React from 'react';
import './SearchInput.scss';

function SearchInput({ Logo, searchKeyword, itemSearch, FiArrowRight }) {
  return (
    <div className="searchInput">
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
    </div>
  );
}

export default SearchInput;
