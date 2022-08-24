import * as AT from '../ActionType'

export const signUpAction = (values) => (dispatch) => {
    dispatch({type: AT.SINGUP_USER , payload: values})

    // console.log(values);
}