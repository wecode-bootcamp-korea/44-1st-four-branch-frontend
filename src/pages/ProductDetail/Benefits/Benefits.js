import React from 'react';
import './Benefits.scss';

function Benefits() {
  return (
    <div className="benefits">
      <section>
        <h6>무료 선물 포장 서비스</h6>
        <p>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.</p>
      </section>
      <section className="benefitsLastChild">
        <h6>샘플 & 코튼 백 증정</h6>
        <p>
          모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다.
          <br />
          (샘플 종류는 임의 지정이 불가합니다.)
        </p>
      </section>
    </div>
  );
}

export default Benefits;
