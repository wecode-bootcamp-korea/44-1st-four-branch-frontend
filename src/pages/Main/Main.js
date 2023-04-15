import React from 'react';
import MainBanner from './MainBanner/MainBanner';
import SlideItemList from './SlideItemList/SlideItemList';
import LeftBanner from './LeftBanner/LeftBanner';
import RightBanner from './RightBanner/RightBanner';
import StoreLocator from './StoreLocator/StoreLocator';
import Footer from '../../Components/Footer/Footer';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <MainBanner />
      <SlideItemList />
      <RightBanner />
      <LeftBanner />
      <SlideItemList />
      <StoreLocator />
      <Footer />
      <div
        className="topButton"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        ⌃
      </div>
    </div>
  );
}

export default Main;
