import React from 'react';
import PollAnswerLayout from './PageLayout/PollAnswerLayout';
import { useParams } from 'react-router-dom';

const withRouter = (Component) => {
  return (props) => {
    const match = { params: useParams() };
    return <Component {...props} match={match} />;
  };
};

const PollDetail = (props) => {
 return (
    <section className="py-5">
      <div className="container mt-4">
        <h3>Answer Poll</h3>
        <hr />
        <p className="mt-3">
          Polls are a great way to gather opinions
        </p>
        <div className="mt-4">
          <PollAnswerLayout questionId={props.match.params.question_id} />
        </div>
      </div>
    </section>
  );
};

export default withRouter(PollDetail);
