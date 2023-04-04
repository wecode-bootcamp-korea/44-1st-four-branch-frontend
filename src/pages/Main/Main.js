import React from 'react';
import Nav from '../../Components/Nav/Nav';
import BandBanner from './BandBanner/BandBanner';
import MainBanner from './MainBanner/MainBanner';
import SlideItemList from './SlideItemList/SlideItemList';
import LeftBanner from './LeftBanner/LeftBanner';
import RightBanner from './RightBanner/RightBanner';
import StoreLocator from './StoreLocator/StoreLocator';
import Selection from './Selection/Selection';
import './Main.scss';
import Footer from '../../Components/Footer/Footer';

function Main() {
  return (
    <div className="main">
      <BandBanner />
      <Nav />
      <MainBanner />
      <SlideItemList />
      <LeftBanner />
      <RightBanner />
      <LeftBanner />
      <SlideItemList />
      <StoreLocator />
      <Selection />
      <LeftBanner />
      <Footer />
    </div>
  );
}

export default Main;
