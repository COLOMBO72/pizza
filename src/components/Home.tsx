import React from 'react';
import stylesProducts from '../styles/Home.module.scss';
import ProductCard from './ProductItems/ProductCard';
import Skeleton from './ProductItems/Skeleton';
import Categories from './ProductItems/Categories';
import Sort from './ProductItems/Sort';
import { useSelector }  from 'react-redux';
import Pagination from './ProductItems/Pagination';
import {
  selectFilter,
  selectFilterSort,
  setCategoryId,
  setPage,
} from '../Redux/slices/filterSlice';
import { axiosPizzas, selectPizzas } from '../Redux/slices/pizzasSlice';
import Error from './NotFound/Error';
import CartRight from './Cart/CartRight';
import { useAppDispatch } from '../Redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId, page, ValueOfSearch } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzas);
  const sort = useSelector(selectFilterSort);

  const onChangePage = (i: number) => {
    dispatch(setPage(i));
  };

  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const setPizzas = () => {
    const order = sort.sortProps.includes('-') ? 'desc' : 'asc';
    const sortBy = sort.sortProps.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = ValueOfSearch ? ValueOfSearch : '';

    dispatch(
      axiosPizzas({
        page: String(page),
        category,
        order,
        sortBy,
        search,
      }),
    );
  };
  React.useEffect(() => {
    setPizzas();
  }, [categoryId, sort, page, ValueOfSearch]);

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pizzasArray = items.map((obj, i) => <ProductCard key={i} {...obj} />);
  if (status === 'error') {
    <Error />;
  }
  return (
    <div className={stylesProducts.homeWrapper}>
      <div className={stylesProducts.productsWrapper}>
        <div className={stylesProducts.header}>
          <Categories value={categoryId} onClickCategory={onClickCategory} />
          <Sort />
        </div>
        <div className={stylesProducts.productCards}>
          {status == 'loading' ? skeleton : pizzasArray}
        </div>
        <Pagination onChangePage={onChangePage} />
      </div>
      <div>
        <CartRight />
      </div>
    </div>
  );
};

export default Home;
