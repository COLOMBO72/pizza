import React from 'react';
import stylesProducts from '../styles/Home.module.scss';
import ProductCard from './ProductItems/ProductCard';
import Skeleton from './ProductItems/Skeleton';
import Categories from './ProductItems/Categories';
import Sort from './ProductItems/Sort';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from './ProductItems/Pagination';
import { setCategoryId, setPage } from '../Redux/slices/filterSlice';
import { axiosPizzas } from '../Redux/slices/pizzasSlice';
import Error from './NotFound/Error';
import CartRight from './Cart/CartRight';

const Home = () => {
  const dispatchCategory = useDispatch(setCategoryId());
  const dispatchPage = useDispatch(setPage());
  const dispatchPizzas = useDispatch(axiosPizzas());
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProps);
  const page = useSelector((state) => state.filter.page);
  const pizzas = useSelector((state) => state.pizzas.items);
  const status = useSelector((state) => state.pizzas.status);
  const searchValue = useSelector((state) => state.filter.ValueOfSearch);

  const onChangePage = (i) => {
    dispatchPage(setPage(i));
  };

  const onClickCategory = (id) => {
    dispatchCategory(setCategoryId(id));
  };

  const setPizzas = () => {
    const order = sortType.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? searchValue : '';
    dispatchPizzas(
      axiosPizzas({
        page,
        category,
        order,
        sortBy,
        search,
      }),
    );
  };
  React.useEffect(() => {
    setPizzas();
  }, [categoryId, sortType, page, searchValue]);

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pizzasArray = pizzas.map((a, i) => <ProductCard key={i} {...a} />);
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
