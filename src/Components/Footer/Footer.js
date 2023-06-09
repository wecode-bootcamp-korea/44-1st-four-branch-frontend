import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="grid">
        <div className="subscription">
          <h2 className="communication">4bsop 커뮤니케이션</h2>
          <p className="subscript">
            제품, 서비스, 스토어, 이벤트, 문화적 관심사 등 다양한 소식을
            받아보실 수 있도록 4bsop 이메일을 구독해주세요.
          </p>
          <div>
            <input type="checkbox" />
            <label className="age">본인은 만 14세 이상입니다(필수)</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>개인정보수집 및 이용에 동의합니다(필수)</label>
          </div>
          <p className="squareBox">
            4bsop은 4bsop의 제품 서비스 및 홍보 행사 관련 정보를 마케팅
            목적으로, 고객님의 동의 해지하시기 전까지, 고객님께 이메일로 보내
            드립니다. 마케팅 목적의 개인정보 수집 및 이용에 동의 하지 않으셔도
            되고, 그러한 경우, 마케팅 정보를 수령하실 수 없습니다.
          </p>
          <input type="checkbox" />
          <label>마케팅 정보 수신에 동의합니다(필수)</label>
          <p className="squareBox">
            뉴스레터 이메일을 통한 광고성 정보 수신에 동의합니다.
          </p>
          <form className="email">
            <input
              className="emailAddress"
              type="email"
              placeholder="이메일 주소"
            />
            <button className="emailSubmit">→</button>
          </form>
          <h2 className="sustainability">지속가능성</h2>
          <p>
            4bsop은 비콥 인증을 획득한 브랜드이며, PETA로부터 비건 인증을 받은
            브랜드입니다. <Link className="learnMore">더 알아보기</Link>
          </p>
        </div>
        {FOOTER_TITLE.map((title, i) => {
          return (
            <div className="footerList" key={i}>
              <h2 className="subTitle">{title.title}</h2>
              <ul>
                {FOOTER_DATA[title.eng].map((data, i) => {
                  return <li key={i}>{data}</li>;
                })}
              </ul>
            </div>
          );
        })}
        <div className="footerList">
          <h2 className="subTitle">주문 및 지원</h2>
          <p className="companyInfo">
            상호: 4bsop코리아 유한회사 | 주소: 서울특별시 강남구 테헤란로 427
            10층 4bsop코리아 | 대표자: 박지연 | 대표전화: 1800-1987 | 대표
            이메일: 4bsop@4bsop.com | 호스팅 사업자: Wecode Hybris | 사업자 등록
            번호: 010-5064-7514 사업자정보확인 | 통신판매업 신고번호:
            2014-경기동탄-02300
          </p>
        </div>
      </div>
      <div className="logo">
        <p className="logoName">© 4bsop</p>
      </div>
    </footer>
  );
}

export default Footer;

const FOOTER_TITLE = [
  { title: '주문 및 지원', eng: 'order' },
  { title: '서비스', eng: 'service' },
  { title: '위치 기본 설정', eng: 'location' },
  { title: '소개', eng: 'introduction' },
  { title: '소셜', eng: 'social' },
];

const FOOTER_DATA = {
  order: [
    '자주 묻는 질문 ↘︎',
    '배송 ↘︎',
    '배송 조회하기 ↘︎',
    '주문 내역',
    '이용 약관',
  ],
  service: [
    '기업체 구매',
    '페이셜 어포인트먼트',
    '1:1 채팅 상담',
    '린스 앤 리턴 캠페인',
  ],
  location: ['배송:', '대한민국', '언어:', '한국어'],
  introduction: [
    '브랜드 스토리',
    '4bsop 재단',
    '채용',
    '개인정보처리방침',
    '영상정보처리기기 운영/관리 방침',
    '정품 인증',
    '쿠키 정책',
  ],
  social: ['Instagram ↘︎', 'Twitter ↘︎', 'LinkedIn ↘︎', 'Kakao Plus Friend ↘︎'],
};
