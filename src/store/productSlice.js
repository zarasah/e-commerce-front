import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    product: null,
    isLoading: false,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProductsRequest: (state) => {
            console.log('fetchProductsRequest')
            state.isLoading = true;
            state.error = null;
        },
        fetchProductsSuccess: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            console.log(state.products)
        },
        fetchProductsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchProductByIdRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchProductByIdSuccess: (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        },
        fetchProductByIdFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        createProductRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        createProductSuccess: (state, action) => {
            state.isLoading = false;
            state.products.push(action.payload);
        },
        createProductFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        deleteProductRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        deleteProductSuccess: (state, action) => {
            state.isLoading = false;
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
        deleteProductFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchProductByIdRequest,
    fetchProductByIdSuccess,
    fetchProductByIdFailure,
    createProductRequest,
    createProductSuccess,
    createProductFailure,
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductFailure
  } = productSlice.actions;
  export default productSlice.reducer;