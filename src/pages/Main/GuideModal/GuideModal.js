import React from 'react';
import './GuideModal.scss';

function GuideModal({ guideModalClose, slide }) {
  return (
    <div className={`guideModal ${slide}`}>
      <div
        className="close"
        onClick={() => {
          guideModalClose();
        }}
      >
        ✕
      </div>
      <div className="contentBox">
        <div className="freeDelivery">전 구매 무료 배송</div>
        <div className="deliveryInfo">
          <h3 className="subTitle">CJ 대한통운</h3>
          <div className="delivery">
            <p>전 제품</p>
            <p>무료 배송</p>
          </div>
          <div className="delivery">
            <p>전 지역</p>
            <p>영업일 기준, 2~3일</p>
          </div>
        </div>
        {SERVICE_INFO.map((info, i) => {
          return (
            <div className="service" key={i}>
              <h3 className="subTitle">{info.title}</h3>
              <p className="serviceContent">{info.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GuideModal;

const SERVICE_INFO = [
  {
    title: '군부대/사서함 배송 불가 안내',
    content:
      '군부대 및 사서함으로 배송되는 주문의 경우, CJ대한통운을 통한 배송이 불가하여 별도 문자 안내와 함께 자동 주문 취소 처리될 예정입니다.',
  },
  {
    title: '무료 선물 포장 서비스',
    content:
      '주문하신 제품을 기프트 메시지와 함께 선물 포장해 드립니다. 기프트 메시지는 주문 시에 작성하실 수 있습니다.',
  },
  {
    title: '샘플 & 코튼 백 증정',
    content:
      '이솝 공식 온라인 몰의 모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다. 제공되는 코튼 백의 사이즈는 제품의 크기에 따라 다릅니다. 샘플은 재고 상황에 따라 변경될 수 있으며 임의 지정은 불가합니다.',
  },
  {
    title: '교환 및 반품',
    content:
      '이솝 공식 온라인 몰에서 구매하신 미개봉 제품은 구매 후 30일 이내 무료 반품이 가능하며 교환은 반품 후 재주문 또는 전국 이솝 매장에서 가능합니다. 자세한 내용은 자주 묻는 질문을 참고하세요.',
  },
  {
    title: '탄소중립 배송',
    content:
      '이솝 온라인 몰의 모든 주문 배송 건은 탄소중립을 지키기 위해 노력하고 있습니다.',
  },
  {
    title: '온라인 패키징',
    content:
      '이솝은 환경에 미치는 영향을 최소화하기 위한 포장재를 사용하며 내부에는 재활용이 가능한 종이 완충재를 선택해 사용하고 있습니다.',
  },
];
