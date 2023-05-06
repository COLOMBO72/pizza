import React from 'react';
import stylesCategories from '../../styles/Categories.module.scss';

const Categories = ({value, onClickCategory}) => {
  const categories = ['all', 'meat', 'vegetarian', 'gril', 'spicy', 'closed'];
  const array = categories.map((c, i) => {
    return (
      <a
        key={c}
        onClick={() => onClickCategory(i)}
        className={value === i ? `${stylesCategories.active}` : null}
        to={`/${c}`}
      >
        {c}
      </a>
    );
  });

  return (
    <div className={stylesCategories.headerMenu}>
      <nav>{array}</nav>
    </div>
  );
};

export default Categories;
