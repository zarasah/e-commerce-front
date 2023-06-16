import { put, call, takeEvery } from 'redux-saga/effects';
import { 
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserRequest, 
  fetchUserSuccess, 
  fetchUserFailure } from '../store/userSlice';
import {fetchUserApi, fetchUsersApi} from '../api/userApi';

function* fetchUsers(action) {
  try {
    const user = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(user));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* fetchUser(action) {
  const userId = action.payload;
  try {
    const user = yield call(fetchUserApi, userId);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export default function* watchFetchUser() {
  yield takeEvery(fetchUserRequest.type, fetchUser);
  yield takeEvery(fetchUsersRequest.type, fetchUsers);
}
