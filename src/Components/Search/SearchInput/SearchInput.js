import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchInput.scss';

function SearchInput({
  Logo,
  searchKeyword,
  itemSearch,
  FiArrowRight,
  searchItem,
}) {
  const navigate = useNavigate();

  function mainMove() {
    navigate('/');
  }

  function preventReset(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  return (
    <div className="searchInput">
      <img src={Logo} alt="logo" onClick={mainMove} />
      <form className="searchBox" onSubmit={searchItem}>
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
