import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Recommend.scss';

function Recommend() {
  const [recommendList, setRecommendList] = useState([]);
  const [itemSlide, setItemSlide] = useState(0);
  const [scrollSlide, setScrollSlide] = useState(0);
  const [rightButton, setRightButton] = useState(true);
  const [leftButton, setLeftButton] = useState(false);

  const itemCarousel = useRef();
  const scrollCarousel = useRef();

  function goRightButton() {
    if (scrollSlide === 2) {
      setRightButton(false);
    } else if (scrollSlide === 1) {
      setRightButton(true);
    } else {
      setLeftButton(true);
    }
    setItemSlide(itemSlide - 2);
    setScrollSlide(scrollSlide + 1);
  }

  function goLeftButton() {
    if (scrollSlide === 0) {
      setLeftButton(true);
      setRightButton(false);
    } else if (scrollSlide === 1) {
      setLeftButton(false);
    } else {
      setRightButton(true);
    }
    setItemSlide(itemSlide + 2);
    setScrollSlide(scrollSlide - 1);
  }

  useEffect(() => {
    itemCarousel.current.style.transform = `translateX(${itemSlide}0%)`;
    scrollCarousel.current.style.transform = `translateX(${scrollSlide}00%)`;
  }, [itemSlide, scrollSlide]);

  useEffect(() => {
    // fetch('/data/productDetailList.json')
    //   .then(response => response.json())
    //   .then(result => setRecommendList(result));
    fetch('http://10.58.52.90:3000/products', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => setRecommendList(result));
  }, []);

  return (
    <div className="recommend">
      {leftButton && (
        <div className="arrowPrevBtn" onClick={goLeftButton}>
          <FiChevronLeft className="arrowLeft" color="#fff" />
        </div>
      )}
      {rightButton && (
        <div className="arrowNextBtn" onClick={goRightButton}>
          <FiChevronRight className="arrowRight" color="#fff" />
        </div>
      )}
      <div className="product">
        <ul className="productList" ref={itemCarousel}>
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
        <div className="indicatorBar" ref={scrollCarousel} />
      </div>
    </div>
  );
}

export default Recommend;
