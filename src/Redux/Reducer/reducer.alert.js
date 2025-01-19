import * as AT from "../ActionType";

const initVal ={
    text:"",
    color:""
}

export const alertReducer=(state=initVal,action) =>{
     switch (action.type) {
        case AT.SET_ALERT:
            return {
                ...state,
                text:action.payload.text,
                color:action.payload.color
            }
        case AT.RESET_ALERT:
            return{
                ...state,
                text:"",
                color:""
            }
     
        default:
            return state;
     }
}