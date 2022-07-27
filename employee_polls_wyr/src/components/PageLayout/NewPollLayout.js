import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleCreateQuestion } from '../../actions/questions';

const NewPollLayout = (props) => {
  const navigate = useNavigate();
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setoptionTwoText] = useState('');

  const handleOptionOneChange = (e) => {
    setOptionOneText(e.target.value);
  };
  const handleOptionTwoChange = (e) => {
    setoptionTwoText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPoll = {
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: props.authedUser
    };
    props.dispatch(handleCreateQuestion(newPoll));
    setOptionOneText('');
    setoptionTwoText('');
    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit} className="w-75 bg-light px-4 py-4">
      <h6>{props.authedUsername} Asked Would You Rather:</h6>
      <div className="form-group row mt-4">
        <label htmlFor="optionOne" className="col-sm-2 col-form-label">
          Option One
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            name="optionOne"
            value={optionOneText}
            onChange={handleOptionOneChange}
            className="form-control"
            id="optionOne"
            required
          />
        </div>
      </div>
      <div className="form-group row mt-4">
        <label htmlFor="optionTwo" className="col-sm-2 col-form-label">
          Option Two
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            name="optionTwo"
            value={optionTwoText}
            onChange={handleOptionTwoChange}
            className="form-control"
            id="optionTwo"
            required
          />
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-dark mt-4"
          disabled={optionOneText === undefined && optionTwoText === undefined}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    loaded: true,
    authedUser,
    authedUsername: authedUser !== null ? users[authedUser].name : ''
  };
};

export default connect(mapStateToProps)(NewPollLayout);
