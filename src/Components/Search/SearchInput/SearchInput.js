import React from 'react';
import './SearchInput.scss';

function SearchInput({ Logo, searchKeyword, itemSearch, FiArrowRight }) {
  return (
    <div className="searchInput">
      <img src={Logo} alt="logo" />
      <form className="searchBox">
        <input className="input" value={searchKeyword} onChange={itemSearch} />
        <FiArrowRight className="icon20 enterButton" />
      </form>
    </div>
  );
}

export default SearchInput;
