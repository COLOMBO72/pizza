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
    setUrlFilters(state,action){
      state.page = Number(action.payload.page);
      state.categoryId = Number(action.payload.categoryId);
    }
  },
});

export const { setCategoryId, setSort, setPage, setSearchValue, setUrlFilters} = filterSlice.actions;
export default filterSlice.reducer;
