import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PollCard = (props) => {
  const { question,optedAnswer } = props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const summation = optionOneVotes + optionTwoVotes;
    const optionOneprcntg =
      summation === 0 ? 0 : Math.floor((optionOneVotes * 100) / summation);
    const optionTwoprcntg =
      summation === 0 ? 0 : Math.floor((optionTwoVotes * 100) / summation);
  
    return (
      <div>
      <div className="option-one mt-3">
      <p className="card-text mb-1">{question.optionOne.text} ?</p>
      <div className="votes d-flex">
        <div className="progress w-75" style={{ height: 32 }}>
          <div
            className={`progress-bar  bg-${
              optedAnswer === 'optionOne' ? 'success' : 'dark'
            }`}
            role="progressbar"
            style={{ width: `${optionOneprcntg}%` }}>
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
                    className={`progress-bar  bg-${
                      optedAnswer === 'optionTwo' ? 'success' : 'dark'
                    }`}
                    role="progressbar"
                    style={{ width: `${optionTwoprcntg}%` }}>
                    {optionTwoprcntg}%
                  </div>
                </div>
                <span className="pl-4 lead font-weight-bold">
                  {optionTwoVotes}
                </span>
              </div>
            </div> 
            <Link to="/" className="mt-4 btn btn-dark px-4 py-2">
          Back to Home
        </Link>
    </div>
    );
}

const mapStateToProps = (
  { questions, users },
  { questionId, optedAnswer }
) => {
 const question = questions[questionId];
  //const authedUserDetails = users[authedUser];
  const username = users[question.author].name;
  return {
    questionId,
    question,
    username,
    optedAnswer: optedAnswer
  };
  };
  
  export default connect(mapStateToProps)(PollCard);