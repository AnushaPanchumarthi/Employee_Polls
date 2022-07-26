import React from 'react';
import { Link } from 'react-router-dom';
import PollPageView from './PollPageView';
//import QuestionPage from './QuestionPage';

const QuestionsLayout = (props) => {
  const answered = props.answered;
  const unAnswered = props.unAnswered;

  return (
    <div className="col-md-8 pl-5">
      <div className="d-flex justify-content-end">
        <ul className="nav nav-pills mb-4 pb-2" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link px-4 active"
              id="pills-unanswered-tab"
              data-toggle="pill"
              href="#pills-unanswered"
              data-testid="unanswered-filter"
              role="tab"
            >
              UnAnswered Polls
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link px-4"
              id="pills-answered-tab"
              data-toggle="pill"
              href="#pills-answered"
              role="tab"
            >
              Answered Polls
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content w-100" id="pills-tabContent">
        <div
          className="tab-pane w-100 fade show active"
          id="pills-unanswered"
          role="tabpanel"
        >
          {unAnswered.length === 0 && (
            <p>
              Hurray! There are no Unanswered Polls as of now.Why not a Create a
              Poll Now! ?<Link to="/add">New Poll</Link>
            </p>
          )}
          {unAnswered.map((q) => (
            <PollPageView key={q} questionId={q} type="unanswered" />
          ))}
        </div>
        <div
          className="tab-pane w-100 fade"
          id="pills-answered"
          role="tabpanel"
        >
          {answered.length === 0 && <p>There are no Answered questions</p>}
          {answered.map((q) => (
            <PollPageView key={q} questionId={q} type="answered" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsLayout;
