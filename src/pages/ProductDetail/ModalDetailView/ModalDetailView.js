import React from 'react';
import ModalDim from './ModalDim/ModalDim';
import { FiX } from 'react-icons/fi';
import './ModalDetailView.scss';

function ModalDetailView({ modalView, productDetailList }) {
  return (
    <div className="modalDetailView">
      <ModalDim modalView={modalView} />
      <div className={`modalDetailContents ${modalView}`}>
        <div className="iconHandlePage">
          <FiX className="icon20 closeButton" />
        </div>
        {productDetailList.map(({ ingredients }) => {
          const ingredientList = JSON.parse(ingredients).join(', ');
          return <p>{ingredientList}</p>;
        })}
      </div>
    </div>
  );
}

export default ModalDetailView;
