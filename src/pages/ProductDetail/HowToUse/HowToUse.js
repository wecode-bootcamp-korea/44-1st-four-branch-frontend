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
          <h6 className="title">사용법</h6>
          <h2>필요할 때마다 깨끗한 손에 바릅니다.</h2>
          <ul>
            <li>
              <h6 className="title">사용량</h6>
              <p className="text">반 티스푼</p>
            </li>
            <li>
              <h6 className="title">텍스처</h6>
              <p className="text">크림 타입</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HowToUse;
