import React from 'react';
import SlideItem from '../SlideItem/SlideItem';
import './SlideItemList.scss';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function SlideItemList() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carousel = useRef();

  function prevSlide() {
    setCurrentSlide(currentSlide - 2);
  }

  function nextSlide() {
    setCurrentSlide(currentSlide + 2);
  }

  useEffect(() => {
    carousel.current.style.transform = `translateX(-${currentSlide}0%)`;
  }, [currentSlide]);

  return (
    <div className="slideItemList">
      <div className="leftarrow" onClick={prevSlide}>
        <HiOutlineChevronLeft />
      </div>
      <div className="rightarrow" onClick={nextSlide}>
        <HiOutlineChevronRight />
      </div>
      <div ref={carousel} className="translate">
        <div className="itemInfo">
          <div>향수</div>
          <h2>이솝의 퍼스널 향</h2>
          <p>
            전통에서 벗어난 매혹적이고 세련된 이솝 향수는 추억과 우리를 <br />
            이어주는 감각적인 다리이자 주변 사람들과의 연결점입니다.
          </p>
          <div className="squareBox">
            <div className="text">향수 모두 보기</div>
            <div className="arrow">→</div>
          </div>
        </div>
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
      </div>
    </div>
  );
}

export default SlideItemList;
