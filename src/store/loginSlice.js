import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    error: null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
            state.isAuthenticated = false;
            state.error = null;        
        },
        loginSuccess: (state) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
    }
})

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;