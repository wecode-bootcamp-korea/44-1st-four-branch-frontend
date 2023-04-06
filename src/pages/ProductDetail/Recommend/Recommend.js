import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Recommend.scss';

function Recommend() {
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    // fetch('/data/productDetailList.json')
    //   .then(response => response.json())
    //   .then(result => setRecommendList(result));
    fetch('http://10.58.52.89:3000/products', {
      // method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => setRecommendList(result));
  }, []);

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

          {recommendList.map(({ id, imageUrl, name, summary }) => (
            <li key={id}>
              <Link className="itemLink" to="">
                <img src={imageUrl} alt={name} />
                <h6 className="itemName">{name}</h6>
                <p className="itemDescription">{summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="indicator">
        <div className="indicatorBar " />
      </div>
    </div>
  );
}

export default Recommend;
