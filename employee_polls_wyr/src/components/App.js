import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading-bar';
import LoginPage from './LoginPage';
import PollDetail from './PollDetail';
import NewPoll from './NewPoll';
import Navbar from './PageLayout/Navbar';
import LeaderBoard from './LeaderBoard';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const { authedUser } = props;
  return (
    <Fragment>
      <LoadingBar />
      {authedUser === null ? (
        <LoginPage />
      ) : (
        <>
          <Navbar authedUser={authedUser} />
          <div className="container">
            <Routes>
              <Route exact path="/home" element={<Dashboard />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route path="/addNewPoll" element={<NewPoll />} />
              <Route path="/questions/:question_id" element={<PollDetail />} />
              <Route exact path="/leaderboard" element={<LeaderBoard />} />
              <Route path="*" element={<notFound />} />
            </Routes>
          </div>
        </>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(App);
