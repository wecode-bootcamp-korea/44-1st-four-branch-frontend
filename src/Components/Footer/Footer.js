import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="grid">
        <div className="subscription">
          <h1>이솝 커뮤니케이션</h1>
          <p className="subscript">
            제품, 서비스, 스토어, 이벤트, 문화적 관심사 등 다양한 소식을
            받아보실 수 있도록 이솝 이메일을 구독해주세요.
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
            이솝은 이솝의 제품 서비스 및 홍보 행사 관련 정보를 마케팅 목적으로,
            고객님의 동의 해지하시기 전까지, 고객님께 이메일로 보내 드립니다.
            마케팅 목적의 개인정보 수집 및 이용에 동의 하지 않으셔도 되고,
            그러한 경우, 마케팅 정보를 수령하실 수 없습니다.
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
          <h2>지속가능성</h2>
          <p>
            이솝은 비콥 인증을 획득한 브랜드이며, PETA로부터 비건 인증을 받은
            브랜드입니다. <Link className="learnMore">더 알아보기</Link>
          </p>
        </div>
        <div className="footerList">
          <h2>주문 및 지원</h2>
          <ul>
            <li>문의하기</li>
            <li>자주 묻는 질문 ↘︎</li>
            <li>배송 ↘︎</li>
            <li>배송 조회하기 ↘︎</li>
            <li>주문 내역</li>
            <li>이용 약관</li>
          </ul>
        </div>
        <div className="footerList">
          <h2>서비스</h2>
          <ul>
            <li>기업체 구매</li>
            <li>페이셜 어포인트먼트</li>
            <li>1:1 채팅 상담</li>
            <li>린스 앤 리턴 캠페인</li>
          </ul>
        </div>
        <div className="footerList">
          <h2>위치 기본 설정</h2>
          <ul>
            <li>
              배송:
              <br /> 대한민국
            </li>
            <li>
              언어:
              <br /> 한국어
            </li>
          </ul>
        </div>
        <div className="footerList">
          <h2>소개</h2>
          <ul>
            <li>브랜드 스토리</li>
            <li>이솝 재단</li>
            <li>채용</li>
            <li>개인정보처리방침</li>
            <li>영상정보처리기기 운영/관리 방침</li>
            <li>정품 인증</li>
            <li>쿠키 정책</li>
          </ul>
        </div>
        <div className="footerList">
          <h2>소셜</h2>
          <ul>
            <li>Instagram ↘︎</li>
            <li>Twitter ↘︎</li>
            <li>LinkedIn ↘︎</li>
            <li>Kakao Plus Friend ↘︎</li>
          </ul>
        </div>
        <div className="footerList">
          <h2>주문 및 지원</h2>
          <p>
            상호: 이솝코리아 유한회사 | 주소: 서울특별시 강남구 도산대로45길
            10-6 이솝코리아 | 대표자: 프레데리크미셸어완세일러 | 대표전화:
            1800-1987 | 대표 이메일: aesop@aesop.com | 호스팅 사업자: SAP Hybris
            | 사업자 등록 번호: 220-88-56014 사업자정보확인 | 통신판매업
            신고번호: 2014-서울강남-02300
          </p>
        </div>
      </div>
      <div className="logo">
        <p>© Aesop</p>
      </div>
    </footer>
  );
}

export default Footer;
