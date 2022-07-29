import { connect } from 'react-redux';
import React from 'react';
import { Navigate } from 'react-router-dom';
import QuestionsLayout from './PageLayout/QuestionsLayout';

const Dashboard = (props) => {
  if (props.loaded === undefined) {
    return <p className="text-center mt-4">Loading...</p>;
  } else if (props.authedUser === null) {
    return <Navigate to="/login" />;
  } else {
    const { questionIds } = props;
    const answered = props.answeredIds;
    const unAnswered = questionIds.filter((q) => !answered.includes(q));

    return (
      <section className="py-5">
        <div className="container mt-3">
          <div className="row">
            <QuestionsLayout answered={answered} unAnswered={unAnswered} />
          </div>
        </div>
      </section>
    );
  }
};

const mapStateToProps = ({ users, authedUser, questions }) => {
  const answered =
    authedUser !== null ? Object.keys(users[authedUser].answers) : [];
  return {
    loaded: true,
    authedUser,
    authedUserDetails: users[authedUser],
    answeredIds: answered.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
};

export default connect(mapStateToProps)(Dashboard);
