import React from 'react';
import OrderInfo from './OrderInfo/OrderInfo';
import OrderItem from './OrderItem/OrderItem';
import './Order.scss';
import { useState } from 'react';

function Order() {
  const [orderModal, setOrderModal] = useState('배송');

  function movePayment() {
    setOrderModal('결제');
  }

  return (
    <div className="order">
      <OrderInfo
        orderModal={orderModal}
        setOrderModal={setOrderModal}
        movePayment={movePayment}
      />
      <OrderItem />
    </div>
  );
}

export default Order;
