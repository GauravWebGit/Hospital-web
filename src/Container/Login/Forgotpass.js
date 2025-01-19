import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useFormik } from "formik";

function ForgotPass(props) {
    const { handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: props.schema,
        onSubmit: (values, action) => {
            alert(JSON.stringify(values))
            action.resetForm()
        }
    })

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-6">
                    <div className="login-form rounded p-5 border border-1">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="abc@abc.com"
                                    type="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                {errors.email && touched.email && <p className="text-danger">{errors.email}</p>}
                            </FormGroup>
                            <Button className="me-3 btn-warning" type="submit">Submit</Button>
                            <Button className="btn-dark" onClick={props.onBack}>
                                Go Back
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPass;