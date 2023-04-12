import React from 'react';
import './SearchInput.scss';

function SearchInput({ Logo, searchKeyword, itemSearch, FiArrowRight }) {
  function preventReset(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  return (
    <div className="searchInput">
      <img src={Logo} alt="logo" />
      <form className="searchBox">
        <input
          className="input"
          value={searchKeyword}
          onChange={itemSearch}
          onKeyDown={preventReset}
        />
        <FiArrowRight className="icon20 enterButton" />
      </form>
    </div>
  );
}

export default SearchInput;
