const INITIAL_STATE = 0;

const numberReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INC_NUMBER':
      return state + 1;
      break;
    case 'SELECT_NUMBER':
      return action.payload;
      break;
    default:
      return state;
      break;
  }
};

export default numberReducer;
