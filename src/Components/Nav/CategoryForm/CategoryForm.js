import React from 'react';
import CategoryBox from '../CategoryBox/CategoryBox';

function CategoryForm({
  categoryChange,
  categoryHandle,
  categoryBoxClose,
  handleCategoryName,
}) {
  return (
    <CategoryBox
      categoryChange={categoryChange}
      categoryHandle={categoryHandle}
      categoryBoxClose={categoryBoxClose}
      handleCategoryName={handleCategoryName}
    />
  );
}

export default CategoryForm;
