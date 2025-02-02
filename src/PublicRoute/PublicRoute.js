import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utility/Utility';

function Publicroute({component:Component,restricted =false, ...rest}) {
    console.log(isLogin());

    return (
        <Route {...rest} render={props =>(
            isLogin() && restricted ?
            <Redirect to={"/"} />
            :
            <Component {...props}/>

        )}
         />
    );
}

export default Publicroute;