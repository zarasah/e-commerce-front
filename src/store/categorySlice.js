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
            state.isLoading = true;
            state.error = null;
        },
        fetchCategoriesSuccess: (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
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
        },
        createCategoryRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        createCategorySuccess: (state, action) => {
            state.isLoading = false;
            state.categories.push(action.payload);
        },
        createCategoryFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        updateCategoryRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        updateCategorySuccess: (state, action) => {
            state.isLoading = false;
            state.categories = state.categories.map((item) => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name;
                }
                return item;
            });
        },
        updateCategoryFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        deleteCategoryRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        deleteCategorySuccess: (state, action) => {
            state.isLoading = false;
            state.categories = state.categories.filter((item) => item.id !== action.payload);
        },
        deleteCategoryFailure: (state, action) => {
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
    createCategoryRequest,
    createCategorySuccess,
    createCategoryFailure,
    deleteCategoryRequest,
    deleteCategorySuccess,
    deleteCategoryFailure,
    updateCategoryRequest,
    updateCategorySuccess,
    updateCategoryFailure
  } = categorySlice.actions;
  export default categorySlice.reducer;