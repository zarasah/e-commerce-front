import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartId: null,
    loading: false,
    error: null,
  },
  reducers: {
    createCartRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createCartSuccess: (state, action) => {
      state.cartId = action.payload;
      state.loading = false;
      state.error = null;
    },
    createCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createCartRequest,
  createCartSuccess,
  createCartFailure,
} = cartSlice.actions;

export default cartSlice.reducer;