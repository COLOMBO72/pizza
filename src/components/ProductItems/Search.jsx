import React from 'react';
import stylesSearch from '../../styles/Search.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../Redux/slices/filterSlice';
import debounce from 'lodash.debounce';

const Search = () => {
  const [value,setValue] = React.useState('')
  const dispatch = useDispatch(setSearchValue());
  const search = useSelector((state) => state.filter.ValueOfSearch);
  const inputRef = React.useRef();
  //debounce откладывает запрос на сервер на 1с
  const onSearchUpdate = React.useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value))
    },1000), [])
  const onSearch = (event) => {
    setValue(event.target.value)
    onSearchUpdate(event.target.value)
  }
  const onClickClose = (i) => {
    dispatch(setSearchValue(''));
    setValue('')
    inputRef.current.focus();
  };

  return (
    <div className={stylesSearch.inputWrapper}>
      <input
        ref={inputRef}
        placeholder="search"
        value={value}
        onChange={onSearch}
      />
      <img className={stylesSearch.iconsearch} src="/img/icon-search.png" />
      {search != 0 ? (
        <img className={stylesSearch.iconclose} src="/img/icon-close.png" onClick={onClickClose} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Search;
