import React from 'react';
import './CartBlackWindow.scss';

function CartBlackWindow({ cartClose }) {
  return <div className="blackWindow" onClick={cartClose} />;
}

export default CartBlackWindow;
