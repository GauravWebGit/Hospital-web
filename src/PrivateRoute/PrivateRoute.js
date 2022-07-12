import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utility/Utility';

function privateroute({component:Component , ...rest}) {
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

export default privateroute;