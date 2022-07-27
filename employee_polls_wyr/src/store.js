import reducer from '../src/reducers';
import middleware from '../src/middleware';
import { createStore } from 'redux';

export const store = createStore(reducer, middleware);
