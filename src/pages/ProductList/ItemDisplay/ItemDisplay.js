import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import './ItemDisplay.scss';

function ItemDisplay({ data }) {
  const [heartChange, setHeartChange] = useState(false);

  function wishListHandle() {
    setHeartChange(heartChange => !heartChange);
  }

  return (
    <div className="itemDisplay">
      {heartChange ? (
        <FaHeart className="heart" onClick={wishListHandle} />
      ) : (
        <FiHeart className="heart" onClick={wishListHandle} />
      )}
      <img className="itemImage" alt="제품 이미지" src={data.imageUrl} />
      <p className="itemName">{data.name}</p>
      <p className="itemPrice">{`${Math.floor(
        data.price
      ).toLocaleString()}원`}</p>
      <div className="line" />
      <div className="specifics">
        <p className="additional">피부타입</p>
        <p className="explain">모든 피부, 메이크컵을 한 피부</p>
      </div>
      <div className="specifics">
        <p className="additional">사용감</p>
        <p className="explain">진정된, 생기있는</p>
      </div>
      <div className="learnMore">장바구니 담기</div>
    </div>
  );
}

export default ItemDisplay;
