import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger'
import { Tuple, configureStore, combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import Reducer from '../Redux/Reducer';

const persistConfig = {
   key: 'root',
   storage: AsyncStorage,
   whitelist: ['Reducer'],
};

const combinedReducer = combineReducers({
   Reducer,
});
const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };
