import * as AT from '../ActionType'

export const signUpAction = (values) => (dispatch) => {
    dispatch({type: AT.SINGUP_USER , payload: values})

    // console.log(values);
}

export const signInAction = (values) => (dispatch) => {
    dispatch({type:AT.SINGIN_USER,payload:values})
}

export const SignedInAction = (values) =>(dispatch) => {
    dispatch({type:AT.SINGEDIN_USER, payload:values})
}
export const forgotPasswd = (values) =>(dispatch) =>{
   dispatch({type:AT.FORGOT_PASSWORD,payload:values})
} 

export const logOutAction = () => (dispatch) =>{
    console.log("Done runing");
    dispatch({type:AT.SIGNOUT_USER});
}