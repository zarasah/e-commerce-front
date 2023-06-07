import { all } from "redux-saga/effects";
import registrationSaga from "./registrationSaga";
import loginSaga from "./loginSaga";
import productSaga from "./productSaga";
import categorySaga from "./categorySaga";

function* rootSaga() {
    yield all([registrationSaga(), loginSaga(), productSaga(), categorySaga()]);
}

export default rootSaga;