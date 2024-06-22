import { combineReducers } from '@reduxjs/toolkit';
import Reducer from '../Redux/Reducer';

const combinedReducer = combineReducers({
   Reducer,
});

export const rootReducer = (state, action) => {
   if (action.type === 'IS_LOGGED') {
      state = undefined;
   }

   return combinedReducer(state, action);
};