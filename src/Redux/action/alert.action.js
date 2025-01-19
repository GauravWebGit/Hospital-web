import * as AT from '../ActionType'

export const setAlert = (values)  => (dispatch) =>  {
    dispatch({type:AT.SET_ALERT ,payload:values});
}

export const resetAlert = () => (dispatch) =>{
    dispatch({type:AT.RESET_ALERT}); 
}
