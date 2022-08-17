import * as AT from '../ActionType'

export const sighUpAction = (values) => (dispatch) => {
    dispatch({type: AT.SINGUP_USER , payload: values})

    console.log(values);
}