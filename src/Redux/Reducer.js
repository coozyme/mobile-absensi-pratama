
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
   User: {},
   TokenAuth: '',
   IsLogged: false,
   DataAbsen: [],
   DataCutiEmployee: [],
};
const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'IS_LOGGED':
         return {
            ...state,
            IsLogged: action.payload,
         };
      case 'SET_AUTH_TOKEN':
         return {
            ...state,
            TokenAuth: action.payload,
         };
      case 'SET_DATA_USER':
         return {
            ...state,
            User: action.payload,
         };
      default:
         return state;
   }
};

// export default Reducer;



const reducerSlice = createSlice({
   name: 'reducer',
   initialState: initialState,
   reducers: Reducer,
});
// })

export const { setUser } = reducerSlice.actions;
export default reducerSlice.reducer;
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
