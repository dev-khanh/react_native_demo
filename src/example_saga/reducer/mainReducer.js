import {FETCH_SUCCESS, UPDATE} from '../actions/actionTypes';
let appState = {count: 0, receivedMovies: ''};
function mainReducer(state = appState, action) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        count: action.count,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        receivedMovies: action.receivedMovies,
      };
  }
  return state;
}
export default mainReducer;
