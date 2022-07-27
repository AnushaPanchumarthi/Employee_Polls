import NavBar from './NavBar';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import middleware from '../../middleware';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';

let root = document.createElement('div');

beforeEach(() => {
  document.body.appendChild(root);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(root);
  root.remove();
  root = null;
});

describe('NavBar', () => {
  it('should match snapshot', () => {
    const store = createStore(reducer, middleware);
    const component = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
      root
    );
    expect(component).toMatchSnapshot();
  });
});
