import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Product01 from '../../../assets/ProductDetail/product(01).png';
import Product02 from '../../../assets/ProductDetail/product(02).png';
import Product03 from '../../../assets/ProductDetail/product(03).png';
import Product04 from '../../../assets/ProductDetail/product(04).png';
import Product05 from '../../../assets/ProductDetail/product(05).png';
import Product06 from '../../../assets/ProductDetail/product(06).png';
import './Recommend.scss';
import { RECOMMEND_PRODUCT_LIST } from './RecommendProductData';

function Recommend() {
  return (
    <div className="recommend">
      <div className="arrowPrevBtn">
        <FiChevronLeft className="icon24" color="#fff" />
      </div>
      <div className="arrowNextBtn">
        <FiChevronRight className="icon24" color="#fff" />
      </div>
      <ul className="product">
        <li>
          <h3 className="title">함께 사용하기 좋은 제품</h3>
        </li>
        {RECOMMEND_PRODUCT_LIST.map(item => (
          <li key={item.id}>
            <Link to={item.link}>
              <img src={item.image} alt={item.name} />
              <h6>{item.name}</h6>
              <p>{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="indicator">
        <div className="indicatorBar" />
      </div>
    </div>
  );
}

export default Recommend;
