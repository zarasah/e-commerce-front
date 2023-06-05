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
            console.log('you are in Request')
            state.isLoading = true;
            state.error = null;
            state.inSuccess = false;
        },
        registrationSuccess: (state) => {
            console.log('you are in Success')
            state.isLoading = false;
            state.isSuccess = true;
        },
        registrationFailure: (state, action) => {
            console.log('you are in Failure')
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