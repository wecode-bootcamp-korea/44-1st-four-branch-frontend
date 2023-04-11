import React from 'react';
import OrderInfo from './OrderInfo/OrderInfo';
import OrderItem from './OrderItem/OrderItem';
import './Order.scss';
import { useState } from 'react';
import { useRef } from 'react';

function Order() {
  const enterBox = useRef();
  const [orderModal, setOrderModal] = useState('배송');

  function movePayment() {
    setOrderModal('결제');
    enterBox.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="order">
      <OrderInfo
        orderModal={orderModal}
        setOrderModal={setOrderModal}
        movePayment={movePayment}
        enterBox={enterBox}
      />
      <OrderItem />
    </div>
  );
}

export default Order;
