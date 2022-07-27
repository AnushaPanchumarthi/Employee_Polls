import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import middleware from '../../middleware';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import NewPollLayout from './NewPollLayout';

let root;

beforeEach(() => {
  root = document.createElement('div');
  document.body.appendChild(root);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(root);
  root.remove();
  root = null;
});

describe('NewPoll', () => {
  it('should match snapshot', () => {
    const store = createStore(reducer, middleware);
    const component = render(
      <Provider store={store}>
        <Router>
          <NewPollLayout />
        </Router>
      </Provider>,
      root
    );
    expect(component).toMatchSnapshot();
  });
});
