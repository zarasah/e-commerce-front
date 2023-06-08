import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../store/userSlice';
import fetchUserApi from '../api/userApi';

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
}
