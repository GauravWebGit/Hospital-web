import * as AT from "../ActionType";
const initVal ={
    isLoading:false,
    user:null,
    error:''

}

export const reducerAuth =(state=initVal,action) =>{
     switch (action.type) {
        case AT.SINGEDIN_USER:
            return{
                ...state,
                user:action.payload,
                isLoading:false,
                error:false,
            }
        default:
            return state;
     }
}