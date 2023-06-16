import { takeEvery, call, put } from "redux-saga/effects";
import {
  fetchCategoriesRequest,
  fetchCategoryByIdRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  fetchCategoryByIdSuccess,
  fetchCategoryByIdFailure,
  createCategoryRequest,
  createCategorySuccess,
  createCategoryFailure,
  updateCategoryRequest,
  updateCategorySuccess,
  updateCategoryFailure,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryFailure
} from '../store/categorySlice';
import { getAllCategories, getCategoryById, createCategory, deleteCategory, updateCategory } from '../api/categoryApi';

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

function* handleCreateCategory(action) {
  try {
    const newCategory = yield call(createCategory, action.payload);
    yield put(createCategorySuccess(newCategory.data));
  } catch (error) {
    yield put(createCategoryFailure(error.message));
  }
}

function* handleUpdateCategory(action) {
  try {
    const updatedCategory = yield call(updateCategory, action.payload);
    yield put(updateCategorySuccess(updatedCategory.data));
  } catch (error) {
    yield put(updateCategoryFailure(error.message));
  }
}

function* handleDeleteCategory(action) {
  try {
    yield call(deleteCategory, action.payload);
    yield put(deleteCategorySuccess(action.payload));
  } catch (error) {
    yield put(deleteCategoryFailure(error.message));
  }
}

function* categorySaga() {
  yield takeEvery(fetchCategoriesRequest.type, handleFetchCategories);
  yield takeEvery(fetchCategoryByIdRequest.type, handleFetchCategoryById);
  yield takeEvery(createCategoryRequest.type, handleCreateCategory);
  yield takeEvery(deleteCategoryRequest.type, handleDeleteCategory);
  yield takeEvery(updateCategoryRequest.type, handleUpdateCategory);
}

export default categorySaga;