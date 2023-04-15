import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import BandBanner from './pages/Main/BandBanner/BandBanner';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Order from './pages/Order/Order';
import OrderConfirm from './pages/OrderConfirm/OrderConfirm';

const Router = () => {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [categoryName, setCategoryName] = useState('');

  function handleTotalPrice(price) {
    setTotalPrice(price);
  }

  function handleCategoryName(name) {
    setCategoryName(name);
  }

  return (
    <BrowserRouter>
      <BandBanner />
      <Nav
        basket={basket}
        setBasket={setBasket}
        handleTotalPrice={handleTotalPrice}
        handleCategoryName={handleCategoryName}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/productdetail/:id"
          element={<ProductDetail basket={basket} setBasket={setBasket} />}
        />
        <Route
          path="/productlist/:id"
          element={<ProductList categoryName={categoryName} />}
        />
        <Route path="/order" element={<Order totalPrice={totalPrice} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
