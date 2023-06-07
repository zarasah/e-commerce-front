import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import registrationReducer from "./registrationSlice";
import loginReducer from './loginSlice';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';

const rootReducer = combineReducers({
    registration: registrationReducer,
    product: productReducer,
    category: categoryReducer,
    login: loginReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;