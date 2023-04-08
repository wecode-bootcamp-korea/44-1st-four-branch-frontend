import React from 'react';
import './CartItem.scss';

function CartItem() {
  return (
    <li className="cartItem">
      <div className="itemName">브랜즈 인센스 홀더</div>
      <div className="quantityBox">
        <select className="quantity">
          <option value={1} selected>
            1
          </option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </div>
      <div className="removeBtn">삭제</div>
      <div className="itemPrice">₩ 94,000</div>
    </li>
  );
}

export default CartItem;
