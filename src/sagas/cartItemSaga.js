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
    fetchcartItemsFailure } from '../store/cartItemSlice';
import { addToCart, updateCartItem, fetchCartItems } from '../api/cartItemApi';

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

function* loginSaga() {
    yield takeEvery(cartItemAddRequest.type, handleCartItemAdd);
    yield takeEvery(cartItemUpdateRequest.type, handleCartItemUpdate);
    yield takeEvery(fetchcartItemsRequest.type, handleFetchCartItems);
}
  
  export default loginSaga;