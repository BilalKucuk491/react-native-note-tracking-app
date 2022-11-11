const INITIAL_STATE = [];
const noteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, action.payload];
      break;
    case 'NOTE_LIST':
      return [...state];
      break;
    case 'SELECTED_NOTE_ID':
      return state + 1;
      break;
    case 'SELECT_NOTE':
      return [...state]
      break;
    case 'EDIT_LIST':
      return [...state, action.payload];
      break;
    default:
      return state;
      break;
  }
};

export default noteReducer;
