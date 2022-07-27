import { render, fireEvent, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import { MemoryRouter as Router } from 'react-router-dom';
import reducer from '../reducers';
import middleware from '../middleware';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('Login test scenarios', () => {
  /*snapshot testing*/
  it('matches the snapshot when a user logs in', () => {
    const store = createStore(reducer, middleware);
    const component = render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('Succesfull Login', () => {
    const store = createStore(reducer, middleware);
    const component = render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>
    );
    var username = component.queryByTestId('username-select');
    fireEvent.change(username, { target: { value: 'mtsamis' } });
    var submitButton = component.getByTestId('submit-button');
    fireEvent.click(submitButton);
    screen.debug();
  });
});
