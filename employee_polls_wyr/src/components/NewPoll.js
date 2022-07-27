import React from 'react';
import NewPollLayout from './PageLayout/NewPollLayout';

const NewPoll = () => {
  return (
    <section className="py-5">
      <div className="container mt-4">
        <h3>Create New Poll</h3>
        <hr />
        <p className="mt-3">
          Go Ahead! Create a Poll and collect the opinions from peers
        </p>
        <div className="d-flex justify-content-center mt-4">
          <NewPollLayout />
        </div>
      </div>
    </section>
  );
};

export default NewPoll;
