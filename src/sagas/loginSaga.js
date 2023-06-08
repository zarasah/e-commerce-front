import { call, put, takeEvery} from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure, logout } from '../store/loginSlice';
import { login } from '../api/loginUser';

function* handleLogin(action) {
    
    try {
        // yield put(loginRequest());
        const response = yield call(login, action.payload);
        const { jwt, role, name, id } = response;
        localStorage.setItem('jwt', jwt);
        localStorage.setItem('role', role);
        localStorage.setItem('username', name);
        localStorage.setItem('id', id);
        yield put(loginSuccess());
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
  }

function* loginSaga() {
    yield takeEvery(loginRequest.type, handleLogin);
    yield takeEvery(logout.type, handleLogout);
  }
  
  export default loginSaga;