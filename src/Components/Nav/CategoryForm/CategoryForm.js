import React from 'react';
import CategoryBox from '../CategoryBox/CategoryBox';

function CategoryForm({ categoryChange, categoryHandle, categoryBoxClose }) {
  return (
    <CategoryBox
      categoryChange={categoryChange}
      categoryHandle={categoryHandle}
      categoryBoxClose={categoryBoxClose}
    />
  );
}

export default CategoryForm;
