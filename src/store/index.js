import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import registrationReducer from "./registrationSlice";
import loginReducer from './loginSlice';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import cartItemReducer from './cartItemSlice';

const rootReducer = combineReducers({
    registration: registrationReducer,
    product: productReducer,
    category: categoryReducer,
    login: loginReducer,
    user: userReducer,
    cart: cartReducer,
    cartItem: cartItemReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;