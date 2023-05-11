import React from 'react';
import stylesCategories from '../../styles/Categories.module.scss';

type CategoryProps = {
  value: number;
  onClickCategory: (i: number)=>void;
};
const categories = ['all', 'meat', 'vegetarian', 'gril', 'spicy', 'closed'];
const Categories: React.FC<CategoryProps> = React.memo(({ value, onClickCategory }) => {
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
//memo предотвращает лишние перерисовки
  return (
    <div className={stylesCategories.headerMenu}>
      <nav>{array}</nav>
    </div>
  );
})

export default Categories;
