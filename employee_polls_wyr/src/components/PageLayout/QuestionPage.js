import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const QuestionPage = (props) => {
  const { questionId, question, username, optedAnswer } = props;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const summation = optionOneVotes + optionTwoVotes;
  const optionOneprcntg =
    summation === 0 ? 0 : Math.floor((optionOneVotes * 100) / summation);
  const optionTwoprcntg =
    summation === 0 ? 0 : Math.floor((optionTwoVotes * 100) / summation);

  return (
    <div className="card w-75 mx-auto mt-3">
      <h6 className="card-header py-3 px-4">{username} Asked : </h6>
      <div className="card-body py-3 px-4">
        <div className="vote-info">
          <span className="text-muted">
            {new Date(question.timestamp).toUTCString()}
          </span>
          <div className="option-one mt-3">
            <p className="card-text mb-1">{question.optionOne.text} ?</p>
            <div className="votes d-flex">
              <div className="progress w-75" style={{ height: 32 }}>
                <div
                  className={`progress-bar ${
                    optedAnswer === 'optionOne' ? 'bg-success' : 'bg-dark'
                  }`}
                  role="progressbar"
                  style={{ width: `${optionOneprcntg}%` }}
                >
                  {optionOneprcntg}%
                </div>
              </div>
              <span className="pl-4 lead font-weight-bold">
                {optionOneVotes}
              </span>
            </div>
          </div>
          <div className="option-two my-3">
            <p className="card-text mb-1">{question.optionTwo.text} ?</p>
            <div className="votes d-flex">
              <div className="progress w-75" style={{ height: 32 }}>
                <div
                  className={`progress-bar ${
                    optedAnswer === 'optionTwo' ? 'bg-success' : 'bg-dark'
                  }`}
                  role="progressbar"
                  style={{ width: `${optionTwoprcntg}%` }}
                >
                  {optionTwoprcntg}%
                </div>
              </div>
              <span className="pl-4 lead font-weight-bold">
                {optionTwoVotes}
              </span>
            </div>
          </div>
          {!optedAnswer && (
            <Link to={`/questions/${questionId}`}>Answer Poll</Link>
          )}
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

export default connect(mapStateToProps)(QuestionPage);
