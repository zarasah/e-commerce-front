import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: null,
    inSuccess: false,
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        registrationRequest: (state) => {
            state.isLoading = true;
            state.error = null;
            state.inSuccess = false;
        },
        registrationSuccess: (state) => {
            state.isLoading = false;
            state.inSuccess = true;
        },
        registrationFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        updateinSuccess: (state) => {
            state.error = null;
            state.inSuccess = false;
        }
    }
})

export const {
    registrationRequest,
    registrationSuccess,
    registrationFailure,
    updateinSuccess
} = registrationSlice.actions;

export default registrationSlice.reducer;