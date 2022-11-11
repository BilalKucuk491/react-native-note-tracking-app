const INITIAL_STATE=[];
const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, action.payload];
      break;

    default:
      return state;
      break;
  }
};

export default listReducer;
