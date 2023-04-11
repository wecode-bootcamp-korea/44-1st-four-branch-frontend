import React from 'react';
import { useState } from 'react';
import UserModal from '../UserModal/UserModal';

function CheckUser({ userInfoClose, scale, userNameCheck, setUserNameCheck }) {
  const [modalMode, setModalMode] = useState('로그인');

  function modalChangeHandle() {
    setModalMode('회원가입');
  }

  function goToLogin() {
    setModalMode('로그인');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <UserModal
      scale={scale}
      userInfoClose={userInfoClose}
      modalChangeHandle={modalChangeHandle}
      goToLogin={goToLogin}
      modalMode={modalMode}
      userNameCheck={userNameCheck}
      setUserNameCheck={setUserNameCheck}
    />
  );
}

export default CheckUser;
