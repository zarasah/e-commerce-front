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
        fetchProductsByCategoryRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchProductsByCategorySuccess: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        fetchProductsByCategoryFailure: (state, action) => {
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
        updateProductRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        updateProductSuccess: (state, action) => {
            state.isLoading = false;
            // state.products.push(action.payload);
        },
        updateProductFailure: (state, action) => {
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
    fetchProductsByCategoryRequest,
    fetchProductsByCategorySuccess,
    fetchProductsByCategoryFailure,
    fetchProductByIdRequest,
    fetchProductByIdSuccess,
    fetchProductByIdFailure,
    createProductRequest,
    createProductSuccess,
    createProductFailure,
    updateProductRequest,
    updateProductSuccess,
    updateProductFailure,
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductFailure
  } = productSlice.actions;
  export default productSlice.reducer;