import { takeEvery, call, put } from "redux-saga/effects";
import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchProductByIdRequest,
    fetchProductByIdSuccess,
    fetchProductByIdFailure,
    createProductRequest,
    createProductSuccess,
    createProductFailure,
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductFailure
} from '../store/productSlice';
import { getAllProducts, getProductById, createProduct, deleteProduct } from "../api/productApi";

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

function* handleCreateProduct(action) {
    try{
        const response = yield call(createProduct, action.payload);
        yield put(createProductSuccess(response));
    } catch (error) {
        yield put(createProductFailure(error.message));
    }
}

function* handleDeleteProduct(action) {
    try {
      yield call(deleteProduct, action.payload);
      yield put(deleteProductSuccess(action.payload));
    } catch (error) {
      yield put(deleteProductFailure(error.message));
    }
  }

function* productSaga() {
    yield takeEvery(fetchProductsRequest.type, handleFetchProducts);
    yield takeEvery(fetchProductByIdRequest.type, handleFetchProductById);
    yield takeEvery(createProductRequest.type, handleCreateProduct);
    yield takeEvery(deleteProductRequest.type, handleDeleteProduct);
}

export default productSaga;
