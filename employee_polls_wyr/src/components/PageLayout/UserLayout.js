import React from 'react';
import { connect } from 'react-redux';

const UserLayout = (props) => {
  const avatarURL = props.authedUserDetails.avatarURL;
  const name = props.authedUserDetails.name;
  return (
    <div className="navbar-nav ml-3 border-right">
      <div className="nav-link ml-3 profile-wrapper d-flex align-items-center">
        <span className="nav-link ml-3">Hello! {name}</span>
        <img
          src={avatarURL}
          className="nav-link ml-3 rounded shadow-sm"
          alt="User"
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  const authedUserDetails = authedUser !== null ? users[authedUser] : null;
  return {
    authedUserDetails
  };
};

export default connect(mapStateToProps)(UserLayout);
