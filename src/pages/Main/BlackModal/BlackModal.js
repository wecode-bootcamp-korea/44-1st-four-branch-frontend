import React from 'react';
import './Blackmodal.scss';

function BlackModal({ guideModalClose }) {
  return (
    <div
      className="blackModal"
      onClick={() => {
        guideModalClose();
      }}
    />
  );
}

export default BlackModal;
