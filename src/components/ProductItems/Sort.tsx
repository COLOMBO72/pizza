import React from 'react';
import stylesSort from '../../styles/Sort.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { SortEnum, selectFilterSort, setSort } from '../../Redux/slices/filterSlice';


const Sort: React.FC = React.memo(() => {
  const refSort = React.useRef<HTMLDivElement>(null);
  const sort = useSelector(selectFilterSort);
  const [activeModal, setActiveModal] = React.useState(false);
  React.useEffect(() => {
    //логика закрытия попапа при клике на любой другой объект
    const handleClickOutside = (e: MouseEvent) => {
      if (refSort.current && !e.composedPath().includes(refSort.current)) {
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

type ArrayList = {
  name: string;
  sortProps: SortEnum;
};

export const arrayList: ArrayList[] = [
  { name: 'Я-А', sortProps: SortEnum.TITLE_DESC },
  { name: 'А-Я', sortProps: SortEnum.TITLE_ASC },
  { name: 'Цена по убыванию', sortProps: SortEnum.PRICE_DESC },
  { name: 'Цена по возрастанию', sortProps: SortEnum.PRICE_ASC },
  { name: 'Популярные', sortProps: SortEnum.RATING_ASC },
  { name: 'Непопулярные', sortProps: SortEnum.RATING_DESC },
];

const Modal = ({ sort, setActiveModal, setSort }) => {
  const dispatch = useDispatch();
  const ClickedSort = (sortobj: ArrayList) => {
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
