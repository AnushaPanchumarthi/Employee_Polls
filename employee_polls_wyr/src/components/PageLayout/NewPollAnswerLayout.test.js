import * as React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import PollAnswerLayout from './PollAnswerLayout';
import { store } from '../../store';

afterEach(cleanup);

describe('PollAnswer', () => {
  it('will match snapshot', () => {
    var component = render(
      <Router>
        <Provider store={store}>
          <PollAnswerLayout />
        </Provider>
      </Router>
    );

    expect(component).toMatchSnapshot();
  });
});
