import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { Formik, Form, useFormik } from "formik";
import { NavLink, useHistory } from "react-router-dom";
import  {useEffect}  from "react";

function Appointment(props) {
    const[update,setUpdate] = useState(false);
    const history = useHistory();

  const handleinsert = (values) => {
    let localdata = JSON.parse(localStorage.getItem("apt"));
    let id = Math.floor(Math.random() * 1000);
    const did = {
      id,
      ...values,
    };
    if (localdata === null) {
      localStorage.setItem("apt", JSON.stringify([did]));
    } else {
      localdata.push(did);
      localStorage.setItem("apt", JSON.stringify(localdata));
    }
     history.push("/list_apt");
  };

  useEffect(() => {
    let localdata = JSON.parse(localStorage.getItem("apt"));
    
    console.log(localdata, props.location);

    if(props.location.state !== null &&  props.location.state !== undefined && localdata !== null){
      let fdata=localdata.filter((l) => l.id == props.location.state.id);
      console.log(fdata);
     
      formik.setValues(fdata[0]);
      setUpdate(true);
    }
  },[])

  const updateData =(values) =>{
    let localdata=JSON.parse(localStorage.getItem('apt'))
    
     let data =localdata.map((l) => {
        if(l.id== values.id){
            return values;
        }else{
            return l;
        }
      })
    localStorage.setItem("apt",JSON.stringify(data));
    formik.resetForm();
    setUpdate(false);
    history.replace("\list_apt");
  }

  const schema = yup.object().shape({
    name: yup.string().required("Please enter a name"),
    email: yup
      .string()
      .required("Please enter an Email")
      .email("Please enter a valid Email address"),
    phone: yup
      .number()
      .required("Please enter a number")
      .min(1, "Please enter valid number")
      .integer("A phone number can't include a decimal point"),
    date: yup.date(new Date()).required("Please enter a date"),
    department: yup.string().required("Please select Department"),
    // message: yup.string().min(10, "type message"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",  
      phone: "",
      date: "",
      department: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if(update){
        updateData(values);
      }else{
        handleinsert(values);
      }
      
    },
  });

 
  const { errors, handleBlur, handleChange, handleSubmit, touched ,values } = formik;
  return (
    <main>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec
              lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus
              placerat mi et suscipit pulvinar.
            </p>
          </div>
          <div className="row">
            {/* <div className="col-2">
              <NavLink to="/Appointment" className="appointment-btn">Book Appointment</NavLink>
            </div> */}
            <div className="text-center">
              <NavLink to="/list_apt" className="btn btn-warning mb-3">List Appointment</NavLink>
            </div>
          </div>

          <Formik values={formik}>
            <Form
              action
              method="post"
              role="form"
              className="php-email-form"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-md-4 form-group">
                  <input
                    value={values.name}
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="error">{errors.name}</span>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    value={values.email}
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="error">{errors.email}</span>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    value={values.phone}
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="error">{errors.phone}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input
                    value={values.date}
                    type="date"
                    name="date"
                    className="form-control datepicker"
                    id="date"
                    placeholder="Appointment Date"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="error">{errors.date}</span>
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    value={values.department}
                    name="department"
                    id="department"
                    className="form-select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  <span className="error">{errors.department}</span>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  value={values.message}
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message (Optional)"
                  defaultValue={""}
                />
                <span className="error">{errors.message}</span>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your appointment request has been sent successfully. Thank
                  you!
                </div>
              </div>
              <div className="text-center">
                {
                  (update)?
                  <button type="submit">Update an Appointment</button>
                  :
                  <button type="submit">Make an Appointment</button>
                }
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
}

export default Appointment;
