import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RECOMMEND_PRODUCT_LIST } from './RecommendProductData';
import './Recommend.scss';

function Recommend() {
  return (
    <div className="recommend">
      <div className="arrowPrevBtn">
        <FiChevronLeft className="arrowLeft" color="#fff" />
      </div>
      <div className="arrowNextBtn">
        <FiChevronRight className="arrowRight" color="#fff" />
      </div>
      <div className="product">
        <ul className="productList">
          <li>
            <h3 className="title">함께 사용하기 좋은 제품</h3>
          </li>

          {RECOMMEND_PRODUCT_LIST.map(
            ({ id, image, link, name, description }) => (
              <li key={id}>
                <Link className="itemLink" to={link}>
                  <img src={image} alt={name} />
                  <h6 className="itemName">{name}</h6>
                  <p className="itemDescription">{description}</p>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="indicator">
        <div className="indicatorBar " />
      </div>
    </div>
  );
}

export default Recommend;
