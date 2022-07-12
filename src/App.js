import { react } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Container/Home';
import Footer from './Components/Footer';
import  Departments from "./Container/Departments";
import Appointment from "./Container/Appointment";
import  Contact from "./Container/Contact";
import Medicine from "./Container/Medicine"
import  About  from "./Container/About";
import {Switch,Route} from "react-router-dom";
import Doctor from './Container/Doctor';
import Login from './Container/Login/Login';
import Loginpage from './Container/Login/Loginpage';
import SignUp from './Container/Login/SignUp';
import Forgotpass from './Container/Login/Forgotpass';
import ListAppointment from "./Components/ListAppointment";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";


function App() {
  return (
    <>
      <Header />
      <Switch>
          <PublicRoute exact path="/" component={Home}/>
          <PublicRoute exact path="/Departments" component={Departments}/>
          <PublicRoute exact path="/Doctor" component={Doctor}/>
          <PrivateRoute exact path="/Appointment" component={Appointment} />
          <PublicRoute exact path="/About" component={About}/>
          <PublicRoute exact path="/Medicine" component={Medicine}/>
          <PublicRoute exact path="/Contact" component={Contact}/>  
          <PublicRoute exact path="/Login" restriced={true} component={Login}/> 
          <PublicRoute exact path="/Forgotpass" component={Forgotpass}/> 
          <PrivateRoute exact path="/list_apt" component={ListAppointment}/>
      </Switch>
      <Footer /> 
    </>
  );
}

export default App;
