import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import SlideItem from '../SlideItem/SlideItem';
import './SlideItemList.scss';

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
        {PRODUCT_DATA.map(data => {
          return <SlideItem key={data.id} data={data} />;
        })}
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
      'https://images.ctfassets.net/u1nb1km7t5q7/3SCXvldc9HEEWCzyg44wPK/993a270f9be982665519dfd794f638ef/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Large_684x668px.png',
  },
  {
    id: 3,
    name: '사가지라이징 샴푸',
    description: '우디, 스파이시, 앰버리',
    imageUrl:
      'https://images.ctfassets.net/u1nb1km7t5q7/3SCXvldc9HEEWCzyg44wPK/993a270f9be982665519dfd794f638ef/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Large_684x668px.png',
  },
  {
    id: 4,
    name: '사가지 위코드 라이징 샴푸',
    description: '우디, 스파이시, 앰버리',
    imageUrl:
      'https://images.ctfassets.net/u1nb1km7t5q7/3SCXvldc9HEEWCzyg44wPK/993a270f9be982665519dfd794f638ef/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Large_684x668px.png',
  },
];
