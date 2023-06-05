import { call, put, takeEvery} from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from '../store/loginSlice';
import { login } from '../api/loginUser';

function* handleLogin(action) {
    try {
        // yield put(loginRequest());
        const response = yield call(login, action.payload);
        const { token, role, username } = response;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('username', username);
        yield put(loginSuccess());
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

function* loginSaga() {
    yield takeEvery(loginRequest.type, handleLogin);
  }
  
  export default loginSaga;