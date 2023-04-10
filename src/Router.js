import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/productDetail/" element={<ProductDetail />} />
        {/* <Route path="/productList" element={<ProductList />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
