import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import BandBanner from './pages/Main/BandBanner/BandBanner';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';

const Router = () => {
  const [basket, setBasket] = useState([]);

  return (
    <BrowserRouter>
      <BandBanner />
      <Nav basket={basket} setBasket={setBasket} />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route
          path="/productdetail/:id"
          element={<ProductDetail basket={basket} setBasket={setBasket} />}
        />
        <Route path="/productlist/:id" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
