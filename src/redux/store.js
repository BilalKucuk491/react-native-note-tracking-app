import {createStore, combineReducers} from 'redux';
import noteReducer from './reducers/noteReducer';
import numberReducer from './reducers/numberReducer';
const reducers = combineReducers({
  id: numberReducer,
  selectNumber: numberReducer,
  addList: noteReducer,
  noteList: noteReducer,
  editList: noteReducer,
  selectNote: noteReducer,
});

const store = createStore(reducers);
export default store;
