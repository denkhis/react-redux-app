export function setYear(year) {
  return {
    type: 'SET_YEAR',
    payload: year,
  };
}

export function increaseCounter(counter) {
  return {
    type: 'INCREASE_COUNTER',
    payload: counter,
  };
}
