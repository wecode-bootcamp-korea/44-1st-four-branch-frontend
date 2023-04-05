import React from 'react';
import './UserModal.scss';

function UserModal({ userInfoClose, data, modalChangehandle, backhandle }) {
  const { title, button } = data;

  return (
    <div className="userModal">
      <div className="userInfo">
        <div className="closeBtn" onClick={userInfoClose}>
          ✕
        </div>
        <div className="title">{title}</div>
        {title === '회원가입' && (
          <div className="subTitle">
            회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을 재구매하실 수
            있습니다.
          </div>
        )}
        <form>
          {title === '회원가입' && (
            <>
              <input className="firstName" placeholder="성" />
              <input className="lastName" placeholder="이름" />
            </>
          )}
          <input className="email" type="email" placeholder="이메일 주소" />
          <input className="password" type="password" placeholder="비밀번호" />
          {title === '로그인' && (
            <div className="passwordReset">비밀번호 재설정하기</div>
          )}
          {title === '회원가입' && (
            <div className="agreeInfo">
              <div className="ageConfirm">
                <input type="checkbox" />
                <label>본인은 만 14세 이상입니다 (필수)</label>
              </div>
              <input type="checkbox" />
              <label>이용 약관에 동의합니다 (필수)</label>
              <div className="squareBox">
                이솝 온라인 몰 서비스 이용약관 <br />
                이솝 온라인(이하'본 사이트')에 방문해주신 고객님께 감사드립니다.
                이 약관은 이솝 코리아 유한회사가 운영하는 사이트에서 제공하는
                인터넷 관련 서비스를 이용함에 있어 온라인 쇼핑몰과 이용자의
                권리, 의무 및 책임사항을 규정함을 목적으로 합니다. 이솝 코리아
                유한회사 (이하 '회사')는 아래의 약관, 개인정보처리방침 및 고객
                서비스와 특정 기능, 게시물 또는 홍보와 관련하여 본 사이트
                전체에서 제시하는 여타 조건과 정책에 따라, 이용자에게 본
                사이트상 컨텐츠와 서비스를 제공합니다.
              </div>
              <input type="checkbox" />
              <label>개인정보 수집 및 이용 조건에 동의합니다 (필수)</label>
              <div className="squareBox">
                개인정보수집항목: <br /> a) 성명, 이메일 주소, 전화번호, 주소,
                기타 귀하가 당사 웹사이트에서 구매 시 알려주신 개인정보; b) 결제
                정보 및 구매 정보; c) 구매 내역, 서비스 이용 기록 및 웹사이트
                활동 내역 (예: 홈페이지에서 최근 본 내용 추적), 고객 클레임 및
                분쟁 해결에 관한 정보.이용목적: a) 회원제 서비스 제공에 따른
                본인 확인 및 개인식별, 가입의사 확인 및 부정가입 방지, 회원가입
                여부 및 미성년자 확인 여부 확인, 불량회원의 부정이용 방지와
                비인가 사용 방지
              </div>
              <input type="checkbox" />
              <label>마케팅 정보 수신에 동의합니다 (선택)</label>
              <div className="squareBox">
                마케팅 정보 수신 동의 (선택) <br /> 이솝은 고객님의 개인정보를
                사용하여 이솝의 제품, 서비스 및 홍보 행사 관련 정보를 마케팅
                목적으로, 고객님이 동의 해지하시기 전까지, 고객님께 보내
                드립니다. 개인정보 수집 및 이용 그리고 마케팅 정보 수령에
                동의하지 않으셔도 됩니다. 그러한 경우, 고객님께서는 마케팅
                정보를 수령하실 수 없습니다.
              </div>
            </div>
          )}
          <button
            className="submitBtn"
            onClick={e => {
              e.preventDefault();
            }}
          >
            {button}
          </button>
        </form>
        {title === '로그인' && (
          <div className="userConfirm">회원이 아니신가요?</div>
        )}
        {title === '로그인' && (
          <button
            className="signUpBtn"
            onClick={() => {
              modalChangehandle();
            }}
          >
            회원가입
          </button>
        )}
        {title === '회원가입' && (
          <button
            className="signUpBtn"
            onClick={() => {
              backhandle();
            }}
          >
            ← &nbsp; 뒤로가기
          </button>
        )}
        {title === '회원가입' && (
          <div className="accountConfirm">
            이미 이솝 계정을 가지고 계십니까?
          </div>
        )}
      </div>
    </div>
  );
}

export default UserModal;
