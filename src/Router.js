import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Order from './pages/Order/Order';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
