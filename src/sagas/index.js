import { all } from "redux-saga/effects";
import registrationSaga from "./registrationSaga";
import productSaga from "./productSaga";

function* rootSaga() {
    yield all([registrationSaga(), productSaga()])
}

export default rootSaga;