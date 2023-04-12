import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import './StoreLocator.scss';

function StoreLocator() {
  const [carousel, setCarousel] = useState(0);
  const storeCarousel = useRef();
  const scrollCarousel = useRef();
  const storeLocator = useRef();

  useEffect(() => {
    let observer = new IntersectionObserver(e => {
      if (e[0].isIntersecting) {
        e[0].target.style.opacity = 1;
      } else {
        e[0].target.style.opacity = 0;
      }
    });
    observer.observe(storeLocator.current);
  });

  function prevStoreSlide() {
    setCarousel(prev => prev + 1);
  }

  function nextStoreSlide() {
    setCarousel(prev => prev - 1);
  }

  useEffect(() => {
    if (carousel === -4) {
      setCarousel(0);
    } else if (carousel === 1) {
      setCarousel(-3);
    } else {
      storeCarousel.current.style.transform = `translateX(${carousel}00%)`;
      scrollCarousel.current.style.transform = `translateX(${-carousel}00%)`;
    }
  }, [carousel]);

  useEffect(() => {
    let slide = 0;
    const automaticSlide = setInterval(() => {
      slide++;
      if (slide === 4) {
        slide = 0;
      }
      storeCarousel.current.style.transform = `translateX(${-slide}00%)`;
      scrollCarousel.current.style.transform = `translateX(100%)`;
    }, 3000);

    return clearInterval(automaticSlide);
  });

  return (
    <article className="storeLocator">
      <div className="content">
        <h2 className="storeTitle">스토어 로케이터</h2>
        <p className="storeContent">
          매장에서는 이솝 컨설턴트가 고객 여러분을 따뜻하게 맞이하고 기프트
          구매를 위한 맞춤형 컨성팅을 제공해드립니다.
        </p>
        <div className="squareBox">
          <div className="text">가까운 스토어 찾기</div>
          <div className="arrow">→</div>
        </div>
      </div>
      <div className="storeCarousel" ref={storeLocator}>
        <div className="leftArrow" onClick={prevStoreSlide}>
          <HiOutlineChevronLeft />
        </div>
        <div className="rightArrow" onClick={nextStoreSlide}>
          <HiOutlineChevronRight />
        </div>
        <div ref={storeCarousel} className="carousel">
          <img
            className="storeImage"
            alt="스토어 이미지"
            src="  https://images.unsplash.com/photo-1564355793479-47b17de0e154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
          <img
            className="storeImage"
            alt="스토어 이미지"
            src="https://images.unsplash.com/photo-1612870962366-d644a1eabf3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWMlMjBzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          />
          <img
            className="storeImage"
            alt="스토어 이미지"
            src="https://media.istockphoto.com/id/606019324/ko/%EC%82%AC%EC%A7%84/%EC%8A%A4%EB%AA%B0-%ED%83%80%EC%9A%B4%EC%9D%98-%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC-%EB%B0%8F-%EC%8B%9D%EB%A3%8C%ED%92%88-%EC%99%B8%EA%B4%80.jpg?s=612x612&w=0&k=20&c=XY5DQIWmgXHJhFjumhdOw9CHlYZVKCygLD2F5ru8C60="
          />
          <img
            className="storeImage"
            alt="스토어 이미지"
            src="https://media.istockphoto.com/id/1329046817/ko/%EC%82%AC%EC%A7%84/%ED%95%98%EC%9D%B4%EA%B2%8C%EC%9D%B4%ED%8A%B8%EC%9D%98-%EC%8A%A4%EC%9B%A8%EC%9D%B8%EC%9D%98-%EC%B0%A8%EC%84%A0-%EA%B1%B0%EB%A6%AC-%EC%A0%84%EB%A7%9D.jpg?s=612x612&w=0&k=20&c=usMHZZKXqsZmDIGuKM_7yAaEBH-vwc80rnNeS0kApec="
          />
        </div>
        <div className="slideScroll">
          <div ref={scrollCarousel} className="scrollSection" />
        </div>
      </div>
    </article>
  );
}

export default StoreLocator;
