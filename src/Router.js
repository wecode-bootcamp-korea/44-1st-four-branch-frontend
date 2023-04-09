import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';

const Router = () => {
  const [basket, setBasket] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/main"
          element={<Main basket={basket} setBasket={setBasket} />}
        />
        <Route
          path="/productdetail/:id"
          element={<ProductDetail basket={basket} setBasket={setBasket} />}
        />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
