import React from 'react';
import CartList from './CartList/CartList';
import './Basket.scss';

function Basket({
  cartModal,
  cartClose,
  basket,
  setBasket,
  orderMove,
  handleTotalPrice,
  ReceivingInfo,
}) {
  const token = localStorage.getItem('TOKEN');

  function removeItem(targetId) {
    fetch(`http://10.58.52.90:3000/carts?cartid=${targetId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setBasket(result);
      });
  }

  function handleQuantity(type, id, quantity) {
    if (type === 'plus') {
      fetch('http://10.58.52.90:3000/carts', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
        body: JSON.stringify({
          cartId: id,
          quantity: quantity,
        }),
      })
        .then(response => response.json())
        .then(result => {
          setBasket(result);
        });
    } else {
      if (quantity === 0) {
        return;
      } else {
      }
      fetch('http://10.58.52.90:3000/carts', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
        body: JSON.stringify({
          cartId: id,
          quantity: quantity,
        }),
      })
        .then(response => response.json())
        .then(result => {
          setBasket(result);
        });
    }
  }

  let totalPrice = [];
  basket.forEach(item => {
    totalPrice = [...totalPrice, Number(item.totalPriceByP)];
  });
  const sumTotalPrice = totalPrice.reduce((arr, curr) => arr + curr, 0);

  return (
    <div className={`basket ${cartModal}`}>
      <CartList
        cartClose={cartClose}
        basket={basket}
        setBasket={setBasket}
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
              sumTotalPrice
            ).toLocaleString()}`}</div>
          </div>
          <div
            className="payment"
            onClick={() => {
              handleTotalPrice(sumTotalPrice);
              orderMove();
              ReceivingInfo();
            }}
          >
            주문하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
