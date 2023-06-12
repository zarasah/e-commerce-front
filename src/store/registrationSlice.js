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
        }
    }
})

export const {
    registrationRequest,
    registrationSuccess,
    registrationFailure
} = registrationSlice.actions;

export default registrationSlice.reducer;