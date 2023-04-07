import React from 'react';
import { useState } from 'react';
import UserModal from '../UserModal/UserModal';

function CheckUser({ userInfoClose }) {
  const [modalChange, setModalChange] = useState(LOGIN_DATA);

  function modalChangeHandle() {
    setModalChange(SIGNUP_DATA);
  }

  function backHandle() {
    setModalChange(LOGIN_DATA);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <UserModal
      data={modalChange}
      userInfoClose={userInfoClose}
      modalChangeHandle={modalChangeHandle}
      backHandle={backHandle}
    />
  );
}

export default CheckUser;

const LOGIN_DATA = { title: '로그인', button: '로그인' };
const SIGNUP_DATA = {
  title: '회원가입',
  button: '회원가입',
};
