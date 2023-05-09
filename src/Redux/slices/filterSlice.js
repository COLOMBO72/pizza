import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: {
    name: 'не выбрано',
    sortProps: 'rating',
  },
  page: 1,
  ValueOfSearch: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setSearchValue(state, action) {
      state.ValueOfSearch = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setPage, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
