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
    dispatch({type:AT.SIGNOUT_USER});
}

export const logedOutAction = () => (dispatch) => {
    dispatch({type:AT.SIGNEDOUT_USER})
}
export const googleSignInAction = () =>(dispatch) => {
    dispatch({type:AT.GOOGLE_SIGN_USER})
}