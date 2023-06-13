import { call, put, takeEvery} from 'redux-saga/effects';
import { 
    cartItemAddRequest, 
    cartItemAddSuccess, 
    cartItemAddFailure,
    cartItemUpdateRequest,
    cartItemUpdateSuccess,
    cartItemUpdateFailure,
    fetchcartItemsRequest,
    fetchcartItemsSuccess,
    fetchcartItemsFailure,
    deleteCheckedCartItemsRequest,
    deleteCheckedCartItemsSuccess,
    deleteCheckedCartItemsFailure,
    deleteAllCartItemsRequest,
    deleteAllCartItemsSuccess,
    deleteAllCartItemsFailure } from '../store/cartItemSlice';
import { addToCart, updateCartItem, fetchCartItems, deleteAllCartItems, deleteCheckedCartItems } from '../api/cartItemApi';

function* handleCartItemAdd(action) {
    try {
        const data = yield call(addToCart, action.payload);
        yield put(cartItemAddSuccess(data.cartProduct));
    } catch (error) {
        yield put(cartItemAddFailure(error.message));
    }
}

function* handleCartItemUpdate(action) {
    try {
        const data = yield call(updateCartItem, action.payload);
        const payload = {
            productId: action.payload.id,
            count: data.count
        }
        yield put(cartItemUpdateSuccess(payload));
    } catch (error) {
        yield put(cartItemUpdateFailure(error.message));
    }
}

function* handleFetchCartItems(action) {
    try {
        const data = yield call(fetchCartItems, action.payload);
        yield put(fetchcartItemsSuccess(data.products));
    } catch (error) {
        yield put(fetchcartItemsFailure(error.message));
    }
}

function* handleDeleteAllCartItems(action) {
    try {
        yield call(deleteAllCartItems, action.payload);
        yield put(deleteAllCartItemsSuccess());
    } catch (error) {
        yield put(deleteAllCartItemsFailure(error.message));
    }
}

function* handledeleteCheckedCartItems(action) {
    try {
        yield call(deleteCheckedCartItems, action.payload);
        yield put(deleteCheckedCartItemsSuccess());
    } catch (error) {
        yield put(deleteCheckedCartItemsFailure(error.message));
    }
}

function* watchCartItem() {
    yield takeEvery(cartItemAddRequest.type, handleCartItemAdd);
    yield takeEvery(cartItemUpdateRequest.type, handleCartItemUpdate);
    yield takeEvery(fetchcartItemsRequest.type, handleFetchCartItems);
    yield takeEvery(deleteAllCartItemsRequest.type, handleDeleteAllCartItems);
    yield takeEvery(deleteCheckedCartItemsRequest.type, handledeleteCheckedCartItems);
}
  
  export default watchCartItem;