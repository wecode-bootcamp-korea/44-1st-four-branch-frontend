import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RECOMMEND_PRODUCT_LIST } from './RecommendProductData';
import './Recommend.scss';

function Recommend({
  handleRightScroll,
  handleLeftScroll,
  scrollView,
  appearArrowButton,
  removeArrowButton,
  arrowPrevButton,
  arrowNextButton,
}) {
  return (
    <div className="recommend">
      <div
        className={`arrowPrevBtn ${arrowPrevButton}`}
        onClick={handleLeftScroll}
      >
        <FiChevronLeft className="icon24" color="#fff" />
      </div>
      <div
        className={`arrowNextBtn ${arrowNextButton}`}
        onClick={handleRightScroll}
      >
        <FiChevronRight className="icon24" color="#fff" />
      </div>
      <div
        className="product"
        onMouseOver={appearArrowButton}
        onMouseLeave={removeArrowButton}
      >
        <ul className={`productList ${scrollView}`}>
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
      </div>
      <div className="indicator">
        <div className={`indicatorBar ${scrollView}`} />
      </div>
    </div>
  );
}

export default Recommend;
