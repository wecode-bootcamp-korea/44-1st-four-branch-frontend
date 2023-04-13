import React from 'react';
import ModalDim from './ModalDim/ModalDim';
import { FiX } from 'react-icons/fi';
import './ModalDetailView.scss';

function ModalDetailView({
  modalView,
  productDetailList,
  isCloseModal,
  ingredientsArray,
}) {
  return (
    <div className="modalDetailView" onClick={isCloseModal}>
      <ModalDim modalView={modalView} />
      <div className={`modalDetailContents ${modalView}`}>
        <div className="iconHandlePage">
          <FiX className="closeButton" />
        </div>
        <div className="ingredients">
          {ingredientsArray.map((el, i) => {
            return <span key={i}>{`${el}, `}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ModalDetailView;
