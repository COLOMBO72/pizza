import React from 'react';
import stylesProducts from '../styles/Home.module.scss';
import ProductCard from './ProductItems/ProductCard';
import Skeleton from './ProductItems/Skeleton';
import axios from 'axios';
import Categories from './ProductItems/Categories';
import { useNavigate } from 'react-router-dom';
import Sort from './ProductItems/Sort';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from './ProductItems/Pagination';
import { setCategoryId, setPage, setUrlFilters } from '../Redux/slices/filterSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatchCategory = useDispatch(setCategoryId());
  const dispatchPage = useDispatch(setPage());
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProps);
  const page = useSelector((state) => state.filter.page);
  const searchValue = useSelector((state) => state.filter.ValueOfSearch);
  const [state, setState] = React.useState({ pizzas: [] });
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangePage = (i) => {
    dispatchPage(setPage(i));
  };

  const onClickCategory = (id) => {
    dispatchCategory(setCategoryId(id));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      dispatchCategory(setUrlFilters({
        ...params,

      }))
    }
  },[])

  React.useEffect(() => {
    setIsLoading(true);
    const order = sortType.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? searchValue : '';

    axios
      .get(
        `https://644f4cf0b61a9f0c4d1fc869.mockapi.io/Products?limit=4&page=${page}&${category}&sortBy=${sortBy}&order=${order}&search=${search}`,
      )
      .then((response) => {
        const pizzas = response.data;
        setState({ pizzas });
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, page]);
  // querystring возвращает объект и вписывает его в строку с помощью navigate
  React.useEffect(() => {
    const queryString = qs.stringify({
      sortType,
      categoryId,
      page,
      searchValue,
    });
    navigate(`?${queryString}`);
  }, [categoryId, sortType, page, searchValue]);

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pizzasArray = state.pizzas.map((a, i) => <ProductCard key={i} {...a} />);

  return (
    <div className={stylesProducts.productsWrapper}>
      <div className={stylesProducts.header}>
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <div className={stylesProducts.productCards}>{isLoading ? skeleton : pizzasArray}</div>
      <Pagination onChangePage={onChangePage} />
    </div>
  );
};

export default Home;