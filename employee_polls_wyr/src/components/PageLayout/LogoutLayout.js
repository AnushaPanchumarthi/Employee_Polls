import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetAuthedUSer } from '../../actions/authedUser';

function LogoutLayout(props) {
  const handleLogout = (e) => {
    e.preventDefault();
    props.dispatch(resetAuthedUSer());
  };
  return (
    <NavLink className="nav-link ml-auto" to="/login" onClick={handleLogout}>
      Logout
    </NavLink>
  );
}

export default connect()(LogoutLayout);
