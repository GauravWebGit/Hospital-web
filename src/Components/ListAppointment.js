import react from "react";
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button,} from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

function ListAppointment(props) {
  const [data, setData] = useState([]);
  const history = useHistory();
 

  const getdata = (values) => {
    let localData = JSON.parse(localStorage.getItem("apt"));

    if (localData !== null) {
      setData(localData);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const handledelete = (id) => {
    let localData=JSON.parse(localStorage.getItem("apt"));
    let Deletedata=localData.filter((l) => l.id !== id);
    localStorage.setItem("apt",JSON.stringify(Deletedata));
    getdata();
  };

  const Editfun =(id)=>{
    history.push("/Appointment",{id:id});
  }


  return (
    <div className="row">
      <div className="col-6">
        <NavLink to="/Appointment" className="appointment-btn" >
          Book Appointment
        </NavLink>
      </div>
      <div className="col-6">
        <NavLink  to="/list_apt" className="appointment-btn">
          List Appointment
        </NavLink>
      </div>
      <div>
        {data.map((d) => {
          return (
            <div key={d.id}>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">{d.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {d.email}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {d.date}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {d.phone}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {d.message}
                  </CardSubtitle>
                  <CardText>{d.department}</CardText>
                  <Button onClick={() => Editfun(d.id)}>Edit</Button>
                  <Button onClick={() => handledelete(d.id)}>Delete</Button>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListAppointment;
