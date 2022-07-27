import React from 'react';
import LoginLayout from './LoginLayout';
import LogoutLayout from './LoginLayout';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  if (props.authedUser === null) {
    return <LogoutLayout />;
  } else {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand brand-font">Would You Rather !!</span>
          <div className="collapse navbar-collapse">
            {props.authedUser === undefined || props.authedUser === null ? (
              <NavLink className="navigation" to="/login">
                Login
              </NavLink>
            ) : (
              <LoginLayout />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
