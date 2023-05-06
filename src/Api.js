import React from 'react';
import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react'

const url = 'https://644f4cf0b61a9f0c4d1fc869.mockapi.io/Products?'

// export const getProductsAll = {
//   async getProducts(page,category,sortBy,order,search) {
//     const response = await axios.get(`${url}limit=4&page=${page}&${category}&sortBy=${sortBy}&order=${order}&search=${search}`);
//     return response.data;
//   },
// }
export const getProductsAll = createApi({
  reducerPath: 'getProducts',
  baseQuery: axios({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})
