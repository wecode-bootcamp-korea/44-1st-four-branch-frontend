import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import BandBanner from './pages/Main/BandBanner/BandBanner';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Order from './pages/Order/Order';

const Router = () => {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleTotalPrice(price) {
    setTotalPrice(price);
  }

  return (
    <BrowserRouter>
      <BandBanner />
      <Nav
        basket={basket}
        setBasket={setBasket}
        handleTotalPrice={handleTotalPrice}
      />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route
          path="/productdetail/:id"
          element={<ProductDetail basket={basket} setBasket={setBasket} />}
        />
        <Route path="/productlist/:id" element={<ProductList />} />
        <Route path="/order" element={<Order totalPrice={totalPrice} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
