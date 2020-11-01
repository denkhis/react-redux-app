import { INCREASE_COUNTER } from '../actions/PageActions';

const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: action.payload + 1 };

    default:
      return state;
  }
}

export default counterReducer;
