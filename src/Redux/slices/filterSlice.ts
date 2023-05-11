import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortEnum {
  RATING_ASC = '-rating',
  RATING_DESC = 'rating',
  PRICE_ASC = '-price',
  PRICE_DESC = 'price',
  TITLE_ASC = '-title',
  TITLE_DESC = 'title',
}

export type Sort = {
  name: string,
  sortProps: SortEnum;
};

interface IFilterSlice {
  categoryId: number,
  sort: Sort,
  page: number,
  ValueOfSearch: string,
}

const initialState: IFilterSlice = {
  categoryId: 0,
  sort: {
    name: 'не выбрано',
    sortProps: SortEnum.RATING_ASC,
  },
  page: 1,
  ValueOfSearch: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action:PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.ValueOfSearch = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectFilterSort = (state: RootState) => state.filter.sort;

export const { setCategoryId, setSort, setPage, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
