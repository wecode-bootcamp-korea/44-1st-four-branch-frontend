import React from 'react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import './ProductWishList.scss';

function ProductWishList({ wishList, handleWishList }) {
  return (
    <div className="productWishList">
      {wishList ? (
        <IoHeartSharp className="wishListOn" onClick={handleWishList} />
      ) : (
        <IoHeartOutline className="wishListOff" onClick={handleWishList} />
      )}
      <p className="wishListText">위시리스트에 담기</p>
    </div>
  );
}

export default ProductWishList;
