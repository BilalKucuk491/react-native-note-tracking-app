const addList = payload => ({
  type: 'ADD_LIST',
  payload,
});
const noteList = () => ({
  type: 'NOTE_LIST',
});

const selectNoteID = (payload) => ({
  type: 'INC_NUMBER',
  payload
});

const selectNote = payload => ({
  type: 'SELECT_NOTE',
  payload,
});

const editList = payload => ({
  type: 'EDIT_LIST',
  id,
  payload,
});

const sort_AZ_List = payload => ({
  type: 'SORT_AZ_LIST',
  payload,
});

const sort_ZA_List = payload => ({
  type: 'SORT_ZA_LIST',
  payload,
});
export {
  selectNoteID,
  noteList,
  selectNote,
  addList,
  editList,
  sort_AZ_List,
  sort_ZA_List,
};
