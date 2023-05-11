import React from 'react';
import stylesCategories from '../../styles/Categories.module.scss';

type CategoryProps = {
  value: number;
  onClickCategory: (i: number)=>void;
};

const Categories: React.FC<CategoryProps> = ({ value, onClickCategory }) => {
  const categories = ['all', 'meat', 'vegetarian', 'gril', 'spicy', 'closed'];
  const array = categories.map((c, i) => {
    return (
      <a
        key={i}
        onClick={() => onClickCategory(i)}
        className={value === i ? `${stylesCategories.active}` : null}
        //@ts-ignore
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
