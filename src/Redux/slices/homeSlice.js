import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  pizzas: [],
};

const homeSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getState(state,page,category,order,sortBy,search) {
       axios.get(`https://644f4cf0b61a9f0c4d1fc869.mockapi.io/Products?limit=4&page=${page}&${category}&sortBy=${sortBy}&order=${order}&search=${search}`).then((resp) => {
        state.pizzas(resp.data)
       })
    },
  },
});

export const { getState } = homeSlice.actions;
export default homeSlice.reducer;
