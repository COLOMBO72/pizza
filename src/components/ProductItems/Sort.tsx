import React from 'react';
import stylesSort from '../../styles/Sort.module.scss';
import { useDispatch } from 'react-redux';
import { Sort, SortEnum, setSort } from '../../Redux/slices/filterSlice';

type SortProperties = {
  value: Sort;
};

const SortPopup: React.FC<SortProperties> = React.memo(({ value }) => {
  const refSort = React.useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = React.useState(false);
  console.log('rerenderer popup')
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
      <span onClick={() => setActiveModal(!activeModal)}>Sort by: {value.name}</span>
      {activeModal ? (
        <Modal value={value} setActiveModal={setActiveModal} setSort={setSort} />
      ) : null}
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

const Modal = ({ value, setActiveModal, setSort }) => {
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
              className={value.sortProps === l.sortProps ? `${stylesSort.listActive}` : null}
            >
              {l.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortPopup;
