import React from 'react';
import { NavLink } from 'react-router-dom';

function LogoutLayout() {
  return (
    <div className="navbar-nav ml-auto">
    <NavLink className="nav-link mx-3" to="/login" >Login</NavLink>
   </div>
  );
}

export default (LogoutLayout);
