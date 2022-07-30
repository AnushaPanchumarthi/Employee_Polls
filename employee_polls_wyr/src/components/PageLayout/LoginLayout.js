import React from 'react';
import { connect } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import UserLayout from './UserLayout';
import { resetAuthedUSer } from '../../actions/authedUser';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  };
  return ComponentWithRouterProp;
};

const LoginLayout = (props) => {
  
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    props.dispatch(resetAuthedUSer());
    navigate('/login');
  };

  return (
    <div className="navbar-nav ml-auto">
      <NavLink className="nav-link mx-3" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link mx-3" to="/add">
        New Poll
      </NavLink>
      <NavLink className="nav-link mx-3" to="/leaderboard">
        LeaderBoard
      </NavLink>
      <UserLayout />
      <button className="btn nav-link mx-3" style={{position: 'relative', bottom:1}} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default withRouter(connect()(LoginLayout))
