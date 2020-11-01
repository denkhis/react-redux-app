import { combineReducers } from 'redux';
// eslint-disable-next-line import/named
import pageReducer from './page';
import userReducer from './user';

const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
});

export default rootReducer;
