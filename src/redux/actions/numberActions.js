const increaseNumber = () => ({
  type: 'INC_NUMBER',
});
const selectNumber = (payload) => ({
  type: 'SELECT_NUMBER',
  payload
});

export {increaseNumber, selectNumber};
