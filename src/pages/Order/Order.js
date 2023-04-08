import React from 'react';
import OrderInfo from './OrderInfo/OrderInfo';
import OrderItem from './OrderItem/OrderItem';
import './Order.scss';

function Order() {
  return (
    <div className="order">
      <OrderInfo />
      <OrderItem />
    </div>
  );
}

export default Order;
