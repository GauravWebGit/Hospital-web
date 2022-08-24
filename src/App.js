import { react } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Container/Home';
import Footer from './Components/Footer';
import  Departments from "./Container/Departments";
import Appointment from "./Container/Appointment";
import  Contact from "./Container/Contact";
import  About  from "./Container/About";
import {Switch,Route} from "react-router-dom";
import Doctor from './Container/Doctor';
import Medicine from "./Medicine/Medicine";
import ListAppointment from "./Components/ListAppointment";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import { ThemeProvider } from "./Context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Singup from "./Container/Singup";


function App() {
  return (
    <>
    <Provider store={store}>
      <ThemeProvider>
          <Header />
            <Switch>
                  <PublicRoute exact path="/" component={Home}/>
                  <PublicRoute exact path="/Departments" component={Departments}/>
                  <PublicRoute exact path="/Doctor" component={Doctor}/>
                  <PrivateRoute exact path="/Appointment" component={Appointment} />
                  <PublicRoute exact path="/About" component={About}/>
                  <PublicRoute exact path="/Contact" component={Contact}/>  
                  <PublicRoute exact path="/Singup" restricted={true} component={Singup}/> 
                  <PrivateRoute exact path="/Medicine" component={Medicine}/> 
                  <PrivateRoute exact path="/list_apt" component={ListAppointment}/>
            </Switch>
          <Footer /> 
        </ThemeProvider>
    </Provider>
    </>
  );
}

export default App;
