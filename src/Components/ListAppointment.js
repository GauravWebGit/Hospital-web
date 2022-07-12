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
  <div className="py-5">
    <div className="container">
    <div className="row text-center">
      <div className="col-12">
        <h2 className="text-primary fw-bolder mb-3">APPOINTMENT LIST</h2>
      </div>
    <div>
      <div className="d-inline-block">
        <NavLink to="/Appointment" className="btn btn-warning me-5" >
          Book Appointment
        </NavLink>
      </div>
      {/* <div className="d-inline-block">
        <NavLink  to="/list_apt" className="btn btn-warning">
          List Appointment
        </NavLink>
      </div> */}
    </div>
      <div className="d-flex flex-wrap">
        {data.map((d) => {
          return (
            <div key={d.id} className="play">
              <Card className="Card me-3 p-2">
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
                  <Button className="btn btn-primary me-3" onClick={() => Editfun(d.id)}>Edit</Button>
                  <Button className="btn btn-danger" onClick={() => handledelete(d.id)}>Delete</Button>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  </div>
  );
}

export default ListAppointment;
