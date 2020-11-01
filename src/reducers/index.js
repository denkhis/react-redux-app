import { combineReducers } from 'redux';
// eslint-disable-next-line import/named
import pageReducer from './page';
import userReducer from './user';
import counterReducer from './counter';

const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  counter: counterReducer,
});

export default rootReducer;
