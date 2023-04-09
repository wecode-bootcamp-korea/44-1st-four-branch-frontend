import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

function ProductDetail({ basket, setBasket }) {
  const params = useParams();
  const [itemDetail, setItemDetail] = useState({});
  const { id } = params;

  useEffect(() => {
    fetch('/data/mock.json')
      .then(response => response.json())
      .then(result => {
        const findItem = result.find(item => {
          return item.id === Number(id);
        });
        setItemDetail(findItem);
      });
  }, [id]);

  function addDuplicate(id, quantity) {
    const found = basket.filter(item => item.id === id)[0];
    const indexNum = basket.indexOf(found);
    const cartItem = {
      id: itemDetail.id,
      name: itemDetail.name,
      price: itemDetail.price,
      quantity: quantity,
    };
    setBasket([
      ...basket.slice(0, indexNum),
      cartItem,
      ...basket.slice(indexNum + 1),
    ]);
  }

  function shoppingBasket() {
    const cartItem = {
      id: itemDetail.id,
      name: itemDetail.name,
      price: itemDetail.price,
      quantity: 1,
    };
    const found = basket.find(item => item.id === cartItem.id);

    if (found) {
      addDuplicate(cartItem.id, found.quantity + 1);
    } else {
      setBasket([...basket, cartItem]);
    }
  }

  return (
    <div className="productDetail">
      <img alt="제품이미지" src={itemDetail.imageUrl} />
      <div>{itemDetail.name}</div>
      <div>{itemDetail.description}</div>
      <div>{itemDetail.price}</div>
      <div
        className="cart"
        onClick={() => {
          shoppingBasket();
        }}
      >
        장바구니 담기
      </div>
    </div>
  );
}

export default ProductDetail;
