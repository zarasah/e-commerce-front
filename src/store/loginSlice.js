import { createSlice } from "@reduxjs/toolkit";

const isAuthenticated = !!localStorage.getItem('jwt');

const initialState = {
    isLoading: false,
    isAuthenticated: isAuthenticated,
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
        logout: (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = null;
        },
    }
})

export const { loginRequest, loginSuccess, loginFailure, logout } = loginSlice.actions;
export default loginSlice.reducer;