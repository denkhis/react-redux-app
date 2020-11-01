export const initialState = {
  user: {
    name: 'Den',
    surname: 'Khis',
    age: 23,
  },
}

export function rootReducer(state = initialState) {
  return state;
}