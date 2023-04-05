import React from 'react';
import { useState } from 'react';
import UserModal from '../UserModal/UserModal';

function CheckUser({ userInfoClose }) {
  const [modalChange, setModalChange] = useState(LOGIN_DATA);

  function modalChangehandle() {
    setModalChange(SIGNUP_DATA);
  }

  function backhandle() {
    setModalChange(LOGIN_DATA);
  }

  console.log(modalChange);

  return (
    <UserModal
      userInfoClose={userInfoClose}
      data={modalChange}
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
