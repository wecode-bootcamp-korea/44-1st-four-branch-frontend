import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fi';
import './ItemDisplay.scss';

function ItemDisplay() {
  return (
    <div className="itemDisplay">
      <FiHeart className="heart" />
      <img
        className="itemImage"
        alt="제품 이미지"
        src="https://www.aesop.com/medias/Aesop-Skin-Remove-60mL-large.png?context=bWFzdGVyfGltYWdlc3wzNTg0NDJ8aW1hZ2UvcG5nfGltYWdlcy9oMTIvaDQxLzg4MDUwNzIxNDIzNjYucG5nfDM2ODViMzA0ZWU1NGU0MzBkOGZjMGZlNjlhMTU2YjE2ZTQ0ZTY2NjY5MjBhZDRiN2NhNDU4NzgyYmE2NGNkMGE"
      />
      <p className="itemName">리무브</p>
      <p className="itemprice">₩29,000</p>
      <div className="line" />
      <div className="specifics">
        <p>피부타입</p> <p className="explain">모든 피부, 메이크컵을 한 피부</p>
      </div>
      <div className="specifics">
        <p>사용감</p> <p className="explain">진정된, 생기있는</p>
      </div>
      <div className="learnMore">더 알아보기 ></div>
    </div>
  );
}

export default ItemDisplay;
