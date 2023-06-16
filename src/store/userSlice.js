import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    loading: false,
    error: null,
  },
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.firstName = action.payload.firstname;
      state.lastName = action.payload.lastname || '';
      state.email = action.payload.email;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  updateUser,
} = userSlice.actions;

export default userSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     fetchUserRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchUserSuccess: (state, action) => {
//       state.loading = false;
//       state.error = null;
//       state.firstName = action.payload.firstname;
//       state.lastName = action.payload.lastname || '';
//       state.email = action.payload.email;
//     },
//     fetchUserFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     updateUser: (state, action) => {
//       state.firstName = action.payload.firstName;
//       state.lastName = action.payload.lastName;
//       state.email = action.payload.email;
//       state.password = action.payload.password;
//     },
//   },
// });

// export const {
//   fetchUserRequest,
//   fetchUserSuccess,
//   fetchUserFailure,
//   updateUser,
// } = userSlice.actions;

// export default userSlice.reducer;