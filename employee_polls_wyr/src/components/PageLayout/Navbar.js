import React from 'react';
import LoginLayout from './LoginLayout';
import LogoutLayout from './LogoutLayout';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand brand-font">Would You Rather !!</span>
        <div className="collapse navbar-collapse">
          {props.authedUser === undefined
          ? <p>Loading...</p>
          : props.authedUser === null
          ? <LogoutLayout />
          : <LoginLayout />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
