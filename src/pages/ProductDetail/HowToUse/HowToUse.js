import React from 'react';
import './HowToUse.scss';

function HowToUse() {
  return (
    <div className="howToUse">
      <section className="quotation">
        <div className="contents">
          'There is more wisdom
          <br />
          in your body than in your <br />
          deepest philosophy'
          <p className="quotationFrom">Friedrich Nietzsche</p>
        </div>
      </section>
      <section className="useDetail">
        <div className="contents">
          <h6 className="contentsTitle">사용법</h6>
          <h2 className="contentsSubTitle">
            필요할 때마다 깨끗한 손에 바릅니다.
          </h2>
          <ul className="contentsTable">
            <li className="contentsTableList">
              <h6 className="contentsTitle">사용량</h6>
              <p className="contentsText">반 티스푼</p>
            </li>
            <li className="contentsTableList">
              <h6 className="contentsTitle">텍스처</h6>
              <p className="contentsText">크림 타입</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HowToUse;
