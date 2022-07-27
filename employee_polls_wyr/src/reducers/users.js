import { RECEIVE_USERS } from '../actions/users';
import { ADD_QUESTION_ANSWER, ADD_QUESTION } from '../actions/questions';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action.answer;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    case ADD_QUESTION:
      const questionId = action.question.id;
      const author = action.question.author;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, questionId]
        }
      };
    default:
      return state;
  }
}
