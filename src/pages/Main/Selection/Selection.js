import React from 'react';
import SlideItem from '../SlideItem/SlideItem';
import './Selection.scss';

function Selection() {
  return (
    <div className="selection">
      <h2>탁월한 셀렉터</h2>
      <div className="selectionItemList">
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
      </div>
    </div>
  );
}

export default Selection;
