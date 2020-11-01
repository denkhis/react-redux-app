import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
