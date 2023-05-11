import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

// type AxiosPizzasType = Record<string,string>
// //если все ключи одинаковые, то есть все string/number то Record<ключ,значения>

// export const axiosPizzas = createAsyncThunk(
//   'pizzas/axiosPizzas',
//   async (params: AxiosPizzasType) => {
//     const {page, category, order, sortBy, search} = params;
//     const url = 'https://644f4cf0b61a9f0c4d1fc869.mockapi.io/Products?';
//     const response = await axios.get(
//       url + `limit=4&page=${page}&${category}&sortBy=${sortBy}&order=${order}&search=${search}`,
//     );
//     return response.data as CartItem[];
//   },
// );

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: string[];
  sizes: number[];
  rating: number;
  count: number;
};

interface IPizzaSlice {
  items: Pizza[],
  status: Status
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
};

const initialState: IPizzaSlice = {
  items: [],
  status: Status.LOADING,
};

export const axiosPizzas = createAsyncThunk<Pizza[], Record<string,string>>(
  'pizzas/axiosPizzas',
  async (params) => {
    const {page, category, order, sortBy, search} = params;
    const url = 'https://644f4cf0b61a9f0c4d1fc869.mockapi.io/Products?';
    const response = await axios.get<Pizza[]>(
      url + `limit=4&page=${page}&${category}&sortBy=${sortBy}&order=${order}&search=${search}`,
    );
    return response.data;
  },
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(axiosPizzas.fulfilled, (state, action:PayloadAction<Pizza[]>) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(axiosPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(axiosPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectPizzas = (state: RootState) => state.pizzas;

export const {} = pizzasSlice.actions;
export default pizzasSlice.reducer;
