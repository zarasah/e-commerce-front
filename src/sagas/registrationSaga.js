import { takeEvery, put, call } from 'redux-saga/effects';
import { registrationRequest, registrationSuccess, registrationFailure } from '../store/registrationSlice';
import registerUser from '../api/registerUser';

function* handleRegistration(action) {
    try {
        yield call(registerUser, action.payload);
        yield put(registrationSuccess())
    } catch (error) {
        yield put(registrationFailure(error));
    }
}

function* registrationSaga() {
    yield takeEvery(registrationRequest.type, handleRegistration);
}

export default registrationSaga;