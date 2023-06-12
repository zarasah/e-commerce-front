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
        }
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
    fetchcartItemsFailure

} = cartItemSlice.actions;

export default cartItemSlice.reducer;