import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(null));
        dispatch(hideLoading());
      })
      .catch(function (error) {
        alert('There was an error loading initial data: ', error);
      });
  };
}
