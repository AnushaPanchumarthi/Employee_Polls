import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import middleware from './middleware';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(rootReducer, middleware);
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
