var db_data = require('./_DATA');

describe('Save the valid question', () => {
  it('will return the formatted question for saving in the state', async () => {
    var question_valid = {
      author: 'mtsamis',
      optionOneText: 'live in home land',
      optionTwoText: 'live in foreign land'
    };
    var result = await db_data._saveQuestion(question_valid);
    expect(result.author).toEqual('mtsamis');
  });
  it('will return the error if incorrect information is passed', async () => {
    var question_invalid = {
      optionOneText: 'live in home land',
      optionTwoText: 'live in foreign land'
    };
    await expect(db_data._saveQuestion(question_invalid)).rejects.toEqual(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
});

describe('Save the Poll Answer', () => {
  it('will return true if all the answeres provided correctly', async () => {
    var answer_valid = {
      authedUser: 'mtsamis',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionTwo'
    };
    var result = await db_data._saveQuestionAnswer(answer_valid);
    expect(result).toEqual(true);
  });
  it('will return error if data is sent incorrectly', async () => {
    var answer_invalid = {
      answer: 'optionTwo'
    };
    await expect(db_data._saveQuestionAnswer(answer_invalid)).rejects.toEqual(
      'Please provide authedUser, qid, and answer'
    );
  });
});
