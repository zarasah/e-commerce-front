import { takeEvery, call, put } from "redux-saga/effects";
import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchProductsByCategoryRequest,
    fetchProductsByCategorySuccess,
    fetchProductsByCategoryFailure,
    fetchProductByIdRequest,
    fetchProductByIdSuccess,
    fetchProductByIdFailure,
    createProductRequest,
    createProductSuccess,
    createProductFailure,
    updateProductRequest,
    updateProductSuccess,
    updateProductFailure,
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductFailure
} from '../store/productSlice';
import { getAllProducts, getProductById, getProductByCategory, createProduct, updateProduct, deleteProduct } from "../api/productApi";

function* handleFetchProducts() {
    try{
        const response = yield call(getAllProducts);
        yield put(fetchProductsSuccess(response));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* handleFetchProductByCategory(action) {
    try {
        const response = yield call(getProductByCategory, action.payload); 
        yield put(fetchProductsByCategorySuccess(response));
    } catch (error) {
        yield put(fetchProductsByCategoryFailure(error.message));
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
        const { createdAt, updatedAt, ...data } = response;
        console.log('response', data)
        yield put(createProductSuccess(data));
        yield put(fetchProductsRequest());
    } catch (error) {
        yield put(createProductFailure(error.message));
    }
}

function* handleUpdateProduct(action) {
    try{
        const response = yield call(updateProduct, action.payload);
        // const { createdAt, updatedAt, ...data } = response;
        yield put(updateProductSuccess(response));
        yield put(fetchProductsRequest());
    } catch (error) {
        yield put(updateProductFailure(error.message));
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
    yield takeEvery(fetchProductsByCategoryRequest.type, handleFetchProductByCategory);
    yield takeEvery(fetchProductByIdRequest.type, handleFetchProductById);
    yield takeEvery(createProductRequest.type, handleCreateProduct);
    yield takeEvery(updateProductRequest.type, handleUpdateProduct);
    yield takeEvery(deleteProductRequest.type, handleDeleteProduct);
}

export default productSaga;
