import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';
import { counterReducer } from './counter';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  counter: counterReducer,
});
