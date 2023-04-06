import React from 'react';
import CategoryBox from '../CategoryBox/CategoryBox';
import './CategoryForm.scss';

function CategoryForm({ categoryChange, categoryHandle }) {
  return (
    <div>
      <CategoryBox
        categoryChange={categoryChange}
        categoryHandle={categoryHandle}
      />
    </div>
  );
}

export default CategoryForm;
