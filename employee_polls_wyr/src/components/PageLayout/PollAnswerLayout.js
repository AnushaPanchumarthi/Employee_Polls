import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../../actions/questions';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import PollCard from './PollCard';

const PollAnswerLayout = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [redirect, setredirect] = useState(false);
  const [checkedOption,setcheckedOption] = useState('');

  console.log('PROPS QUESTION', props);
  const handleChange = (e) => {
    setcheckedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkedOption === undefined) {
      alert('Please choose one of the options!');
      return;
    }
    const answerObj = {
      authedUser: props.authedUser,
      qid: props.questionId,
      answer: checkedOption
    };
    props.dispatch(handleAnswerQuestion(answerObj));
    setcheckedOption('');
    setredirect(true);
    console.log('AFTER RENDING THE PROPS', props);
  };

  if (props.loaded !== true) {
    return <p className="text-center">Loading...</p>;
  }
  if(props.loaded === true && (props.authedUser === null || props.authedUser === undefined)) {
    console.log('AMI INTO REDIRECT PATH' , location.pathname);
    return <Navigate to=  "/login" replace  state={{ path: location.pathname }} />
  }
 if(props.loaded === true && (props.question === undefined || props.question === null)){
        console.log('AM I INTO LOADED 404 PATH');
    return navigate("/404");
  }
  if(redirect === true){
        return navigate('/');
  }

  const question = props.question;
  const username = props.username;
  const userAvatar = props.userAvatar;
  const optedAnswer = props.optedAnswer;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const summation = optionOneVotes + optionTwoVotes;
  const optionOneprcntg =
    summation === 0 ? 0 : Math.floor((optionOneVotes * 100) / summation);
  const optionTwoprcntg =
    summation === 0 ? 0 : Math.floor((optionTwoVotes * 100) / summation); 

  return (
    <div>
    {optedAnswer ? (
      <PollCard questionId={props.questionId} optedAnswer={optedAnswer}/>
  ) : (
    <div className="card w-75 mx-auto mt-3">
      <h6 className="card-header py-3 px-4">
        {username} Poll for Would You Rather:{' '}
      </h6>
      <div className="card-body py-3 px-4 d-flex align-items-center">
        <div className="pr-3">
          <img src={userAvatar} height="50" alt={username} />
        </div>
        <div className="vote-info pl-3 w-100 border-left">
          <span className="text-muted">
            {new Date(question.timestamp).toUTCString()}
          </span>
          <form onSubmit={handleSubmit}>
            <div className="option-one mt-3">
              <p className="card-text mb-1">{question.optionOne.text} ?</p>
              <div className="votes d-flex">
                <input
                  id="optionOne1"
                  type="radio"
                  data-testid="optionOne-input"
                  name="optionOne1"
                  className="form-check-input"
                  onChange={handleChange}
                  checked={checkedOption === 'optionOne'}
                  value="optionOne"
                />
                <div className="progress w-75 ml-3" style={{ height: 32 }}>
                  <div
                    className={`progress-bar bg-${
                      checkedOption === 'optionOne' ? 'success' : 'dark'
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
                <input
                  id="optionTwo2"
                  type="radio"
                  name="optionTwo2"
                  className="form-check-input"
                  onChange={handleChange}
                  data-testid="optionTwo-input"
                  checked={checkedOption === 'optionTwo'}
                  value="optionTwo"
                />
                <div className="progress w-75 ml-3" style={{ height: 32 }}>
                  <div
                    className={`progress-bar bg-${
                      checkedOption === 'optionTwo' ? 'success' : 'dark'
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
            <button
              className="btn btn-success mt-4"
              data-testid="submit-button"
              type="submit"
              disabled={checkedOption === null}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )}
  </div>                 
  );
};



const mapStateToProps = ({ questions, authedUser, users }, { type, questionId }) => {
  const question = questions[questionId];
  const username = question ? users[question.author].name : '';
  const userAvatar = question ? users[question.author].avatarURL : '';
  const authedUserDetails = users[authedUser];
  const optedAnswer = authedUser === null ? null : authedUserDetails.answers[questionId];
  return {
    loaded: true,
    question,
    username,
    authedUser,
    userAvatar,
    optedAnswer: optedAnswer
  };
};

export default connect(mapStateToProps)(PollAnswerLayout);
