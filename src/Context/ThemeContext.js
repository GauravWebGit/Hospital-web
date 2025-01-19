import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./ActionType";
import { ThemeReducer } from "./reducer/ThemeReducer";


const ThemeContext = createContext()

const initval={
    theme:"light"
} 

export const ThemeProvider = ({children}) =>{
    const [state, dispatch] = useReducer(ThemeReducer, initval);

    const toggle_theme =(val) =>{
         let newtheme = val ==="light"? "dark":"light"
         dispatch({type:TOGGLE_THEME , payload:newtheme});     
    }
   
    return(
        <>
         <ThemeContext.Provider
            value={{
                ...state,
                toggle_theme
            }}
         >
            {children}
         </ThemeContext.Provider>
        </>
    )
}

export default ThemeContext;