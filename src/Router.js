import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/productDetail';
import ProductList from './pages/ProductList/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
