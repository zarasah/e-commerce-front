import { takeEvery, put, call } from 'redux-saga/effects';
import { registrationRequest, registrationSuccess, registrationFailure } from '../store/registrationSlice';
import {createCartRequest, createCartSuccess, createCartFailure } from '../store/cartSlice';
import registerUser from '../api/registerUser';
import createCartAPI from '../api/cartApi';

function* handleRegistration(action) {
    try {
        const { newUser } = yield call(registerUser, action.payload);

        if (!newUser) {
            throw new Error('Failed to create cart');
        }
        const userId = newUser.id;

        try {
            yield put(createCartRequest());
            const cartId = yield call(createCartAPI, userId);
            yield put(createCartSuccess(cartId));
            yield put(registrationSuccess());;
        } catch (error) {
            yield put(createCartFailure(error));
        }
        // yield put(registrationSuccess());
    } catch (error) {
        yield put(registrationFailure(error));
    }
}

function* registrationSaga() {
    yield takeEvery(registrationRequest.type, handleRegistration);
}

export default registrationSaga;

// import { takeEvery, put, call } from 'redux-saga/effects';
// import { registrationRequest, registrationSuccess, registrationFailure } from '../store/registrationSlice';
// import registerUser from '../api/registerUser';

// function* handleRegistration(action) {
//     try {
//         yield call(registerUser, action.payload);
//         yield put(registrationSuccess())
//     } catch (error) {
//         yield put(registrationFailure(error));
//     }
// }

// function* registrationSaga() {
//     yield takeEvery(registrationRequest.type, handleRegistration);
// }

// export default registrationSaga;