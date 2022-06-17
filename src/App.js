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
import Singup from './Container/Singup';
function App() {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Departments" component={Departments}></Route>
          <Route exact path="/Doctor" component={Doctor}></Route>
          <Route exact path="/Appointment" component={Appointment}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Medicine" component={Medicine}></Route>
          <Route exact path="/Contact" component={Contact}></Route> 
          <Route exact path="" component={Singup}></Route> 
      </Switch>
      <Footer /> 
    </>
  );
}

export default App;
