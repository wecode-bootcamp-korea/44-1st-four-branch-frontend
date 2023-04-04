import React from 'react';
import { Link } from 'react-router-dom';
import './Recommend.scss';
import Product01 from '../../../assets/ProductDetail/product(01).png';
import Product02 from '../../../assets/ProductDetail/product(02).png';
import Product03 from '../../../assets/ProductDetail/product(03).png';
import Product04 from '../../../assets/ProductDetail/product(04).png';
import Product05 from '../../../assets/ProductDetail/product(05).png';
import Product06 from '../../../assets/ProductDetail/product(06).png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
        <li>
          <Link to="/">
            <img src={Product01} alt="product" />
            <h6>레저럭션 아로마틱 핸드 워시</h6>
            <p>지친 손을 위한 부드러운 클렌징</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Product02} alt="product" />
            <h6>레저럭션 아로마틱 핸드 워시</h6>
            <p>지친 손을 위한 부드러운 클렌징</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Product03} alt="product" />
            <h6>레저럭션 아로마틱 핸드 워시</h6>
            <p>지친 손을 위한 부드러운 클렌징</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Product04} alt="product" />
            <h6>레저럭션 아로마틱 핸드 워시</h6>
            <p>지친 손을 위한 부드러운 클렌징</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Product05} alt="product" />
            <h6>레저럭션 아로마틱 핸드 워시</h6>
            <p>지친 손을 위한 부드러운 클렌징</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Product06} alt="product" />
            <h6>레저럭션 아로마틱 핸드 워시</h6>
            <p>지친 손을 위한 부드러운 클렌징</p>
          </Link>
        </li>
      </ul>
      <div className="indicator">
        <div className="indicatorBar" />
      </div>
    </div>
  );
}

export default Recommend;
