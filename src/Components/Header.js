import { React, useContext } from "react";
import { useDispatch,useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Alert from "../Alert/Alert";
import ThemeContext from "../Context/ThemeContext";
import { logOutAction } from "../Redux/action/Auth.action";

function Header(props) {
  const value = useContext(ThemeContext)
  const dispatch=useDispatch();
  const auth =useSelector(state => state.auth)
  const handleLogOut = () =>{
    console.log("done");
     dispatch(logOutAction())
  }
  return (
    <div>
      <div className={`main-header ${value.theme}`}>
        <div
          id="topbar"
          className={`d-flex align-items-center fixed-top ${value.theme}`}
        >
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope" />
              <a href="mailto:contact@example.com">cityhospital@example.com</a>
              <i className="bi bi-phone" /> +91 9988776655
            </div>
            <div className="d-none d-lg-flex social-links align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="form-check form-switch me-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              defaultChecked
              onClick={() =>value.toggle_theme(value.theme)}
            />
          </div>
        </div>
        <header id="header" className={`fixed-top  ${value.theme}`}>
          <div className="container d-flex align-items-center">
            <div className="logo">
              <NavLink to="index.html">
                <h1 className="logo me-auto">City</h1>
                <br />
                <h2 className="logo-tiny-text me-auto">
                  Multispeciality Hospital
                </h2>
              </NavLink>
            </div>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <NavLink to="/" className="nav-link scrollto active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Departments" className="nav-link scrollto">
                    Departments
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Doctor" className="nav-link scrollto">
                    Doctors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Appointment" className="nav-link scrollto">
                    Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Medicine" className="nav-link scrollto">
                    Medicine
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/About" className="nav-link scrollto ">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Contact" className="nav-link scrollto">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            <NavLink to="/Appointment" className="appointment-btn scrollto">
              <span className="d-none d-md-inline">Make an</span>
              Appointment
            </NavLink>
            {
              auth.user === null?
              <NavLink to="/Singup" className="appointment-btn scrollto">
              <span className="d-none d-md-inline">Login/ Signup</span>
            </NavLink>:
            <NavLink to="/" className="appointment-btn scrollto">
              <span className="d-none d-md-inline" onClick={handleLogOut}>Log Out</span>
            </NavLink>
            }
          </div>
          <Alert/>
        </header>
      </div>
    </div>
  );
}

export default Header;
