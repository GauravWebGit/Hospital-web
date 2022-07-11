import React, { useState } from "react";
import * as yup from "yup";
import Forgotpass from "./Forgotpass";
import Login from "./Login";
import SingUp from "./SignUp";

function LoginPage(props) {
    const [userType, setUserType] = useState("login");
    const [Forgotpass, setForgotpass] = useState(false);

    const signUpHandler = () => {
        setUserType("signup");
    };
    const loginHandler = () => {
        setUserType("login");
        setForgotpass(false);
    };
    const ForgotpassHandler = () => {
        setForgotpass(true);
        setUserType('Forgotpass')
    };

    let schemaObj;

    if (userType === 'login') {
        schemaObj = {
            email: yup.string().email("Please enter valid Email.").required("Required!"),
            password: yup.string().min(4, "Password should have minimum 4 characters").max(8, "Password should have maximum 8 characters").required("Required!"),
        };
    } else if (userType === 'signup') {
        schemaObj = {
            name: yup.string().max(15).required("Required!"),
            email: yup
                .string()
                .email("Please enter valid Email.")
                .required("Required!"),
            password: yup
                .string()
                .min(4, "Password should have minimum 4 characters")
                .max(8, "Password should have maximum 8 characters")
                .required("Required!"),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref("password"), null], "password must be match.")
                .required("Required!"),
        };
    } else {
        schemaObj = {
            email: yup
                .string()
                .email("Please enter valid Email.")
                .required("Required!"),
        }
    }

    const schema= yup.object().shape(schemaObj);

    const formContent =
        userType === "login" ? (
            <Login
                onSignUp={signUpHandler}
                onForgotPwd={ForgotpassHandler}
                schema={schema}
            />
        ) : (
            <SingUp signUpHandler={signUpHandler} schema={schema} />
        );
    return (
        <section>
            <div className="container">
                <div className="section-title">
                    {!Forgotpass && (
                        <h2>{userType === "login" ? "Login" : "SignUp"}</h2>
                    )}
                    {Forgotpass && <h2>Forgot Password</h2>}
                </div>
            </div>
            {!Forgotpass && formContent}
            {Forgotpass && <Forgotpass schema={schema} onBack={loginHandler} />}
        </section>
    );
}

export default LoginPage;