import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PollPageView = (props) => {
    const { questionId, question, username, optedAnswer } = props;
    return (
      <div className="card w-75 mx-auto mt-3">
        <h6 className="card-header py-3 px-4">{username} Asked : </h6>
        <div className="card-body py-3 px-4">
          <div className="vote-info">
            <span className="text-muted">
              {new Date(question.timestamp).toUTCString()}
            </span>
            <div className='results-view'>
            {optedAnswer && (
              <Link to={`/questions/${questionId}`}>View the Poll</Link>)}
            </div>
            <div className='results-view'>
            {!optedAnswer && (
              <Link to={`/questions/${questionId}`}>Vote Now</Link>)}
            </div>
            </div>
        </div>
      </div>
    );
  };
  
  const mapStateToProps = (
    { questions, authedUser, users },
    { type, questionId }
  ) => {
    const question = questions[questionId];
    const authedUserDetails = users[authedUser];
    const optedAnswer =
      type === 'answered' ? authedUserDetails.answers[questionId] : null;
    const username = users[question.author].name;
    return {
      questionId,
      question,
      username,
      optedAnswer: optedAnswer
    };
  };
  
  export default connect(mapStateToProps)(PollPageView);
  