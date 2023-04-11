import React from 'react';
import CartList from './CartList/CartList';
import './Basket.scss';

function Basket({ cartModal, cartClose, basket, setBasket, orderMove }) {
  function removeItem(targetId) {
    setBasket(basket.filter(item => item.id !== targetId));
  }

  function handleQuantity(type, id, quantity) {
    const found = basket.filter(item => item.id === id)[0];
    const indexNum = basket.indexOf(found);
    const cartItem = {
      id: found.id,
      name: found.name,
      price: found.price,
      quantity: quantity,
    };

    if (type === 'plus') {
      setBasket([
        ...basket.slice(0, indexNum),
        cartItem,
        ...basket.slice(indexNum + 1),
      ]);
    } else {
      if (quantity === 0) {
        return;
      } else {
        setBasket([
          ...basket.slice(0, indexNum),
          cartItem,
          ...basket.slice(indexNum + 1),
        ]);
      }
    }
  }

  let totalPrice = 0;
  basket.forEach(item => {
    totalPrice = totalPrice + item.price * item.quantity;
  });

  return (
    <div className={`basket ${cartModal}`}>
      <CartList
        cartClose={cartClose}
        basket={basket}
        handleQuantity={handleQuantity}
        removeItem={removeItem}
      />

      <div className="paymentBox">
        <div className="paymentContent">
          <div className="promotion">
            <div>프로모션 코드 적용</div>
            <div className="plus">⊕</div>
          </div>
          <div className="freeDelivery">
            전 제품 무료 배송 혜택을 즐겨보세요.
          </div>
          <div className="price">
            <div>소계 (세금포함)</div>
            <div className="totalPrice">{`₩ ${Math.floor(
              totalPrice
            ).toLocaleString()}`}</div>
          </div>
          <div
            className="payment"
            onClick={() => {
              orderMove();
            }}
          >
            결제하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
