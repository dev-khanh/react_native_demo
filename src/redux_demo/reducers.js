let appState = {number: 0, histories: [], errorMsg: ''};
export function renderData(state = appState, action) {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        histories: [...state.histories, action.number],
        number: action.number,
      };
    default:
      break;
  }
  return state;
}
export function todo(state = appState, action) {
  switch (action.type) {
    case 'UPDATE_TODO':
      return {
        ...state,
        errorMsg: action.errorMsg,
      };
    default:
      break;
  }
  return state;
}
