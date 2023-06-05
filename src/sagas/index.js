import { all } from "redux-saga/effects";
import registrationSaga from "./registrationSaga";
import loginSaga from "./loginSaga";
import productSaga from "./productSaga";

function* rootSaga() {
    yield all([registrationSaga(), loginSaga(), productSaga()])
}

export default rootSaga;