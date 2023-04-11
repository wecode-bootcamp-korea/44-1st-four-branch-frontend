import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import OrderConfirm from './pages/OrderConfirm/OrderConfirm';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/orderConfirm" element={<OrderConfirm />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
