import React from 'react';
import './BlackWindow.scss';

function BlackWindow({ guideModalClose }) {
  return (
    <div
      className="blackWindow"
      onClick={() => {
        guideModalClose();
      }}
    />
  );
}

export default BlackWindow;
