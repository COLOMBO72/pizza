import React from 'react';
import stylesSort from '../../styles/Sort.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../Redux/slices/filterSlice';

const Sort = React.memo(() => {
  const refSort = React.useRef();
  const sort = useSelector((state) => state.filter.sort);
  const [activeModal, setActiveModal] = React.useState(false);
  React.useEffect(() => {
    //логика закрытия попапа при клике на любой другой объект
    const handleClickOutside = (e) => {
      if (!e.composedPath().includes(refSort.current)) {
        setActiveModal(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);
  return (
    <div ref={refSort} className={stylesSort.wrapper}>
      <span onClick={() => setActiveModal(!activeModal)}>Sort by: {sort.name}</span>
      {activeModal ? <Modal sort={sort} setActiveModal={setActiveModal} setSort={setSort} /> : null}
    </div>
  );
});

export const arrayList = [
  { name: 'Я-А', sortProps: '-title' },
  { name: 'А-Я', sortProps: 'title' },
  { name: 'Цена по убыванию', sortProps: '-price' },
  { name: 'Цена по возрастанию', sortProps: 'price' },
  { name: 'Популярные', sortProps: '-rating' },
  { name: 'Непопулярные', sortProps: 'rating' },
];

const Modal = ({ sort, setActiveModal, setSort }) => {
  const dispatch = useDispatch(setSort());
  const ClickedSort = (sortobj) => {
    dispatch(setSort(sortobj));
    setActiveModal(false);
  };
  return (
    <div className={stylesSort.modalWrapper}>
      <ul>
        {arrayList.map((l, i) => {
          return (
            <li
              key={i}
              onClick={() => ClickedSort(l)}
              className={sort.sortProps === l.sortProps ? `${stylesSort.listActive}` : null}
            >
              {l.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sort;
