const initialState = {
  year: 2020,
  photos: [],
};

function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_YEAR':
      return { ...state, year: action.payload };

    default:
      return state;
  }
}

export default pageReducer;
