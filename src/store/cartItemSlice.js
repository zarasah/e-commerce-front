import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem: [],
    isLoading: false,
    error: null,
    inSuccess: false,
};

const cartItemSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        cartItemAddRequest: (state) => {
            state.isLoading = true;
            state.error = null;
            state.inSuccess = false;
        },
        cartItemAddSuccess: (state, action) => {
            state.isLoading = false;
            state.inSuccess = true;
            state.cartItem = state.cartItem.map(item => {
                if (item.id === action.payload.productId) {
                    item.count = action.payload.count
                }
                return item
            });
        },
        cartItemAddFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        cartItemUpdateRequest: (state) => {
            state.isLoading = true;
            state.error = null;
            state.inSuccess = false;
        },
        cartItemUpdateSuccess: (state, action) => {
            state.isLoading = false;
            state.inSuccess = true;
            state.cartItem = state.cartItem.map(item => {
                if (item.id === action.payload.productId) {
                    item.count = action.payload.count
                }
                return item
            });
            state.cartItem = state.cartItem.filter(item => item.count !== 0);
        },
        cartItemUpdateFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchcartItemsRequest: (state) => {
            state.isLoading = true;
            state.error = null;
            state.inSuccess = false;
        },
        fetchcartItemsSuccess: (state, action) => {
            state.isLoading = false;
            state.inSuccess = true;
            state.cartItem = action.payload;
        },
        fetchcartItemsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        toggleCheck: (state, action) => {
            const itemId = action.payload;
            state.cartItem.forEach(item => {
              if (item.id === itemId) {
                item.checked = !item.checked;
              }
            });
        },
        deleteCheckedCartItemsRequest: (state) => {
            state.inSuccess = false;
            state.error = null;
            state.inSuccess = false;
        },
        deleteCheckedCartItemsSuccess: (state, action) => {
            state.isLoading = false;
            state.inSuccess = true;
            state.cartItem = state.cartItem.filter(item => !item.checked);;
        },
        deleteCheckedCartItemsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        deleteAllCartItemsRequest: (state) => {
            state.inSuccess = false;
            state.error = null;
            state.inSuccess = false;
        },
        deleteAllCartItemsSuccess: (state, action) => {
            state.isLoading = false;
            state.inSuccess = true;
            state.cartItem = [];
        },
        deleteAllCartItemsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const {
    cartItemAddRequest,
    cartItemAddSuccess,
    cartItemAddFailure,
    cartItemUpdateRequest,
    cartItemUpdateSuccess,
    cartItemUpdateFailure,
    fetchcartItemsRequest,
    fetchcartItemsSuccess,
    fetchcartItemsFailure,
    toggleCheck,
    deleteCheckedCartItemsRequest,
    deleteCheckedCartItemsSuccess,
    deleteCheckedCartItemsFailure,
    deleteAllCartItemsRequest,
    deleteAllCartItemsSuccess,
    deleteAllCartItemsFailure
} = cartItemSlice.actions;

export default cartItemSlice.reducer;