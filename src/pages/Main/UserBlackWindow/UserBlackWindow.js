import React from 'react';
import './UserBlackWindow.scss';

function UserBlackWindow({ userInfoClose }) {
  return <div className="userBlackWindow" onClick={userInfoClose} />;
}

export default UserBlackWindow;
