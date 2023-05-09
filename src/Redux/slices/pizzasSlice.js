import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const axiosPizzas = createAsyncThunk(
  'pizzas/axiosPizzas',
  async ({ page, category, order, sortBy, search }, thunkAPI) => {
    const url = 'https://644f4cf0b61a9f0c4d1fc869.mockapi.io/Products?';
    const response = await axios.get(
      url + `limit=4&page=${page}&${category}&sortBy=${sortBy}&order=${order}&search=${search}`,
    );
    console.log(thunkAPI.getState())
    return response.data;
  },
);

const initialState = {
  items: [],
  status: '',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    getState(state, action) {
      state.items = action.payload.items;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(axiosPizzas.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload;
    })
    builder.addCase(axiosPizzas.pending, (state) => {
      state.status = 'loading';
    })
    builder.addCase(axiosPizzas.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    })
  },
});


export const {} = pizzasSlice.actions;
export default pizzasSlice.reducer;
