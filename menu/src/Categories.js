import React from 'react';

const Categories = ({ filterItems, allCategories }) => {
  const categories = new Set()
  return <div className="btn-container">
    {allCategories.map((category) => {
      return <button className="filter-btn" onClick={() => filterItems(category)}>
      {category}
    </button>
    })}
  </div>
};

export default Categories;
