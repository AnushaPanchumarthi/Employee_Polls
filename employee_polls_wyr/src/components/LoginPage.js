import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useRef } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import Illustration from '../images/WYR.jpg';
import {  useLocation, useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = props.dispatch;
  const userIds = props.users;
  const inputRef = useRef();
  const [selectedUser, setSelectedUser] = useState(userIds[0]);

  const changeUser = (e) => {
    setSelectedUser(inputRef.current.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(inputRef.current.value));
    if (inputRef.current.value || selectedUser) {
      return navigate(state?.path || "/",{'replace': false});
    }
  };
  return (
    <section className="py-sm-5">
      <div className="container px-3">
        <div className="row align-items-center" style={{ textAlign: 'center' }}>
          <div className="col-md-6 mt-2 text-center">
            <img
              align="left"
              src={Illustration}
              margin="10%"
              width="90%"
              alt="Poll Now"
            />
          </div>
          <div className="col-md-6 mt-4" margin="100%">
            <h1 className="login" style={{ fontSize: '30px' }}>
              Login! for Employee Polls
            </h1>
            <h2 style={{ color: 'red', fontSize: '20px' }}>
              {' '}
              Would you Rather!!{' '}
            </h2>
            <form onSubmit={handleLogin}>
              <div className="field">
                <label style={{ display: 'block', fontSize: '20px' }}>
                  {' '}
                  Select The User from the list{' '}
                </label>
                <select
                  style={{
                    padding: '.5rem .8rem .5rem .8rem',
                    margin: '20px 5px'
                  }}
                  size="lg"
                  id="login"
                  name="Username"
                  data-testid="username-select"
                  onChange={changeUser}
                  ref={inputRef}
                  required
                >
                  <option key="initalText" disabled>
                    ChooseUser
                  </option>
                  {userIds.map((userId) => (
                    <option key={userId} value={userId}>
                      {userId}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="btn  btn-dark px-4 my-2"
                type="submit"
                data-testid="submit-button" >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users)
  };
};

export default connect(mapStateToProps)(LoginPage);
