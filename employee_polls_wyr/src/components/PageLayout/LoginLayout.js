import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import LogoutLayout from './LogoutLayout';
import UserLayout from './UserLayout';

const LoginLayout = (props) => {
  return (
    <div className="navbar-nav ml-auto">
      <NavLink className="nav-link ml-auto" exact to="/home">
        Home
      </NavLink>
      <NavLink className="nav-link ml-auto" to="/addNewPoll">
        New Poll
      </NavLink>
      <NavLink className="nav-link ml-auto" to="/leaderboard">
        LeaderBoard
      </NavLink>
      <UserLayout />
      <LogoutLayout />
    </div>
  );
};

export default connect()(LoginLayout);
