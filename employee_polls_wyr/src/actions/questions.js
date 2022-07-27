import { saveQuestionAnswer, saveQuestion } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function addQuestionAnswer(answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    answer
  };
}

export function handleCreateQuestion(question) {
  return (dispatch) => {
    return saveQuestion(question).then((formattedQuestion) =>
      dispatch(addQuestion(formattedQuestion))
    );
  };
}

export function handleAnswerQuestion(answer) {
  return (dispatch) => {
    return saveQuestionAnswer(answer).then(() =>
      dispatch(addQuestionAnswer(answer))
    );
  };
}
