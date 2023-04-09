import React from 'react';
import { useState } from 'react';
import UserModal from '../UserModal/UserModal';

function CheckUser({ userInfoClose, scale }) {
  const [modalChange, setModalChange] = useState(LOGIN_DATA);

  function modalChangehandle() {
    setModalChange(SIGNUP_DATA);
  }

  function backhandle() {
    setModalChange(LOGIN_DATA);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <UserModal
      scale={scale}
      data={modalChange}
      userInfoClose={userInfoClose}
      modalChangehandle={modalChangehandle}
      backhandle={backhandle}
    />
  );
}

export default CheckUser;

const LOGIN_DATA = { title: '로그인', button: '로그인' };
const SIGNUP_DATA = {
  title: '회원가입',
  button: '회원가입',
};
