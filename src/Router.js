import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Login />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
