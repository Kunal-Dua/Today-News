import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import icon from './horizon media icon.jpg'
export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        { /*image => <Link className="navbar-brand ms-4" to="/"><img src={icon} alt="horizon media icon" width="30" height="24" className="d-inline-block align-text-top" /></Link> */}
      <div className={`container-fluid`}> <Link className="navbar-brand text-primary" to="/" >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health"> Health</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
          </ul>
        </div>
        <button className={`btn btn-${props.mode === "light" ? "primary" : "dark"} mx-3`} onClick={props.newCountry}>Change Country</button>
        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
};
