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
    fetch('/data/mock.json')
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
          <div>향수</div>
          <h2 className="categoryTitle">이솝의 퍼스널 향</h2>
          <p className="explanation">
            전통에서 벗어난 매혹적이고 세련된 이솝 향수는 추억과 우리를 <br />
            이어주는 감각적인 다리이자 주변 사람들과의 연결점입니다.
          </p>
          <div className="squareBox">
            <div className="text">향수 모두 보기</div>
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

const PRODUCT_DATA = [
  {
    id: 1,
    name: '위코드런스 아로마틱 핸드 워시',
    description: '우디, 스파이시, 앰버리',
    imageUrl:
      'https://images.ctfassets.net/u1nb1km7t5q7/3SCXvldc9HEEWCzyg44wPK/993a270f9be982665519dfd794f638ef/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Large_684x668px.png',
  },
  {
    id: 2,
    name: '사가지 페이셜 엑설런트 페이스트',
    description: '우디, 스파이시, 앰버리',
    imageUrl:
      'https://www.aesop.com/u1nb1km7t5q7/4fQwfatAQoq2zajw67WrEU/82a34fa52baa55583c71de77690589eb/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Large_1102x962px.png',
  },
  {
    id: 3,
    name: '사가지라이징 샴푸',
    description: '우디, 스파이시, 앰버리',
    imageUrl:
      'https://www.aesop.com/u1nb1km7t5q7/1zDIiLTUC0I7jmcASwNH8O/d53f402f876953434d4de3a1c56172de/Aesop_Home_Room_Spray_Olous_100mL_large.png',
  },
  {
    id: 4,
    name: '사가지 위코드 라이징 샴푸',
    description: '우디, 스파이시, 앰버리',
    imageUrl:
      'https://images.ctfassets.net/u1nb1km7t5q7/3SCXvldc9HEEWCzyg44wPK/993a270f9be982665519dfd794f638ef/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Large_684x668px.png',
  },
];
