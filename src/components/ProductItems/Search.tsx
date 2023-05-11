import React from 'react';
import stylesSearch from '../../styles/Search.module.scss';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../Redux/store';
import { selectFilter, setSearchValue } from '../../Redux/slices/filterSlice';
import debounce from 'lodash.debounce';

const Search:React.FC = () => {
  const [value,setValue] = React.useState('')
  const dispatch = useAppDispatch();
  const {ValueOfSearch} = useSelector(selectFilter);
  const inputRef = React.useRef<HTMLInputElement>(null);
  //debounce откладывает запрос на сервер на 1с
  const onSearchUpdate = React.useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value))
    },1000), [])
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onSearchUpdate(event.target.value)
  }
  const onClickClose = () => {
    dispatch(setSearchValue(''));
    setValue('')
    inputRef.current?.focus();
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
      {ValueOfSearch != null ? (
        <img className={stylesSearch.iconclose} src="/img/icon-close.png" onClick={onClickClose} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Search;
