import React from 'react';
import './CategoryBox.scss';

function CategoryBox() {
  return (
    <div className="categoryBox">
      <nav>
        <ul>
          <div className="flexStart">
            <li className="skinCare">스킨케어</li>
            <li>바디 & 핸드</li>
            <li>헤어</li>
            <li>향수</li>
            <li>스토어</li>
            <li>닫기 ✕</li>
          </div>
          <div className="flexEnd">
            <li>로그인</li>
            <li>위시리스트</li>
            <li>카트</li>
          </div>
        </ul>
      </nav>
      <div className="categoryMain">
        <ul>
          카테고리
          <li>스킨 케어 모두 보기</li>
          <li>클렌저</li>
          <li>각질 제거</li>
        </ul>
        <div className="categoryImg" />
      </div>
    </div>
  );
}

export default CategoryBox;
