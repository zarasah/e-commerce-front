import { takeEvery, call, put } from "redux-saga/effects";
import {
  fetchCategoriesRequest,
  fetchCategoryByIdRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  fetchCategoryByIdSuccess,
  fetchCategoryByIdFailure,
} from '../store/categorySlice';
import { getAllCategories, getCategoryById } from '../api/categoryApi';

function* handleFetchCategories() {
  try {
    const response = yield call(getAllCategories);
    yield put(fetchCategoriesSuccess(response));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
}

function* handleFetchCategoryById(action) {
  try {
    const response = yield call(getCategoryById, action.payload);
    yield put(fetchCategoryByIdSuccess(response));
  } catch (error) {
    yield put(fetchCategoryByIdFailure(error.message));
  }
}

function* categorySaga() {
  yield takeEvery(fetchCategoriesRequest.type, handleFetchCategories);
  yield takeEvery(fetchCategoryByIdRequest.type, handleFetchCategoryById);
}

export default categorySaga;