import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import BandBanner from './pages/Main/BandBanner/BandBanner';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Order from './pages/Order/Order';
import Search from './Components/Search/Search';
import OrderConfirm from './pages/OrderConfirm/OrderConfirm';

const Router = () => {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [categoryName, setCategoryName] = useState('');
  const [receiveInfo, setReceiveInfo] = useState({});
  const [orderConfirm, setOrderConfirm] = useState({});
  const [cartPutIn, setCartPutIn] = useState(false);
  const token = localStorage.getItem('TOKEN');

  function handleTotalPrice(price) {
    setTotalPrice(price);
  }

  function handleCategoryName(name) {
    setCategoryName(name);
  }

  function ReceivingInfo() {
    fetch('http://10.58.52.90:3000/users', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setReceiveInfo(result);
      });
  }

  function emptyingBasket() {
    setBasket([]);
  }

  function addBasket() {
    setCartPutIn(true);
  }

  function addBasketClose() {
    setCartPutIn(false);
  }

  return (
    <BrowserRouter>
      <BandBanner />
      <Nav
        basket={basket}
        setBasket={setBasket}
        handleTotalPrice={handleTotalPrice}
        handleCategoryName={handleCategoryName}
        ReceivingInfo={ReceivingInfo}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/productdetail/:id"
          element={
            <ProductDetail
              basket={basket}
              setBasket={setBasket}
              cartPutIn={cartPutIn}
              setCartPutIn={setCartPutIn}
              addBasket={addBasket}
              addBasketClose={addBasketClose}
            />
          }
        />
        <Route
          path="/productlist/:id"
          element={<ProductList categoryName={categoryName} />}
        />
        <Route
          path="/order"
          element={
            <Order
              totalPrice={totalPrice}
              receiveInfo={receiveInfo}
              setOrderConfirm={setOrderConfirm}
              emptyingBasket={emptyingBasket}
            />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route
          path="/ordercomplete"
          element={<OrderConfirm orderConfirm={orderConfirm} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
