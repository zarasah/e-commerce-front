import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    category: null,
    isLoading: false,
    error: null,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        fetchCategoriesRequest: (state) => {
            console.log('CATEGORIES REQUEST')
            state.isLoading = true;
            state.error = null;
        },
        fetchCategoriesSuccess: (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
            console.log('fetchCategoriesSuccess', action.payload)
        },
        fetchCategoriesFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchCategoryByIdRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchCategoryByIdSuccess: (state, action) => {
            state.isLoading = false;
            state.category = action.payload;
        },
        fetchCategoryByIdFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    fetchCategoryByIdRequest,
    fetchCategoryByIdSuccess,
    fetchCategoryByIdFailure,
  } = categorySlice.actions;
  export default categorySlice.reducer;