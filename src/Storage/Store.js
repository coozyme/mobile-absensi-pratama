import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger'
import { Tuple, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import { rootReducer } from './combineReducers';
import Reducer from '../Redux/Reducer';

const persistConfig = {
   key: 'root',
   storage: AsyncStorage,
   whitelist: ['Reducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);



// export default () => {
const store = configureStore({
   reducer: rootReducer,
});

// const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export default { store, persistor };
// }
