import Dashboard from './Dashboard';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('Dashboard', () => {
  it('will match snapshot', () => {
    var component = render(
      <Router>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </Router>
    );

    expect(component).toMatchSnapshot();
  });
});
