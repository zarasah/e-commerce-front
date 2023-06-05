import { takeEvery, call, put } from "redux-saga/effects";
import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchProductByIdRequest,
    fetchProductByIdSuccess,
    fetchProductByIdFailure
} from '../store/productSlice';
import { getAllProducts, getProductById } from "../api/productApi";

function* handleFetchProducts() {
    try{
        const response = yield call(getAllProducts);
        yield put(fetchProductsSuccess(response));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* handleFetchProductById(action) {
    try {
        const response = yield call(getProductById, action.payload); 
        yield put(fetchProductByIdSuccess(response.data));
    } catch (error) {
        yield put(fetchProductByIdFailure(error.message));
    }
}

function* productSaga() {
    yield takeEvery(fetchProductsRequest.type, handleFetchProducts);
    yield takeEvery(fetchProductByIdRequest.type, handleFetchProductById);
}

export default productSaga;
