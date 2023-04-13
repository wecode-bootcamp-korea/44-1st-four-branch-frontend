import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import SlideItem from '../SlideItem/SlideItem';
import './SlideItemList.scss';

function SlideItemList() {
  const [itemSlide, setItemSlide] = useState(0);
  const [scrollSlide, setScrollSlide] = useState(0);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const [mainSlideItem, setMainSlideItem] = useState([]);
  const itemCarousel = useRef();
  const scrollCarousel = useRef();

  function prevSlide() {
    if (scrollSlide === 1) {
      setLeftArrow(false);
    } else if (scrollSlide < 4) {
      setRightArrow(true);
    }
    setItemSlide(itemSlide - 2);
    setScrollSlide(scrollSlide - 1);
  }

  function nextSlide() {
    if (scrollSlide === 2) {
      setRightArrow(false);
    } else if (scrollSlide === 0) {
      setLeftArrow(true);
    }
    setItemSlide(itemSlide + 2);
    setScrollSlide(scrollSlide + 1);
  }

  useEffect(() => {
    itemCarousel.current.style.transform = `translateX(-${itemSlide}0%)`;
    scrollCarousel.current.style.transform = `translateX(${scrollSlide}00%)`;
  }, [itemSlide, scrollSlide]);

  useEffect(() => {
    fetch('http://10.58.52.90:3000/products?ismain=1')
      .then(response => response.json())
      .then(result => {
        setMainSlideItem(result);
      });
  }, []);

  return (
    <div className="slideItemList">
      {leftArrow && (
        <div className="leftarrow" onClick={prevSlide}>
          <HiOutlineChevronLeft />
        </div>
      )}
      {rightArrow && (
        <div className="rightarrow" onClick={nextSlide}>
          <HiOutlineChevronRight />
        </div>
      )}
      <div ref={itemCarousel} className="translate">
        <div className="itemInfo">
          <div>에디션</div>
          <h2 className="categoryTitle">사솝의 퍼스널 컬러</h2>
          <p className="explanation">
            따뜻하고 세련된 사솝의 퍼스널 컬러는 추억과 우리를 <br />
            이어주는 감각적인 다리이자 주변 사람들과의 연결점입니다.
          </p>
          <div className="squareBox">
            <div className="text">컬러 모두 보기</div>
            <div className="arrow">→</div>
          </div>
        </div>
        {mainSlideItem.map(item => {
          return <SlideItem key={item.id} item={item} />;
        })}
      </div>
      <div className="slideScroll">
        <div ref={scrollCarousel} className="scrollSection" />
      </div>
    </div>
  );
}

export default SlideItemList;
