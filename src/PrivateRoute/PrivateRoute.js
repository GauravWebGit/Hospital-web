import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utility/Utility';

function Privateroute({component:Component , ...rest}) {
    console.log(isLogin());
    return (
        <Route {...rest} render = {props =>(
            isLogin()?
            <Component {...props} />
            :
            <Redirect to={"/Login"}/>
        )}
        />
    );
}

export default Privateroute;