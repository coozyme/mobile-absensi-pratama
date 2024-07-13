const SetIsLogged = (data) => {
   return (dispatch) => {
      dispatch({
         type: 'IS_LOGGED',
         payload: data
      });
   }
}
const SetToken = (data) => {
   return (dispatch) => {
      dispatch({
         type: 'SET_AUTH_TOKEN',
         payload: data
      });
   }
}
const SetDataUser = (data) => {
   return (dispatch) => {
      dispatch({
         type: 'SET_DATA_USER',
         payload: data
      });
   }
}

export { SetToken, SetDataUser, SetIsLogged }