import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addList} from '../redux/actions/listActions';
const ListProcess = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  return (
    <>
      <View >
        <Button title="Add Item" onPress={() => dispatch(addList(state.counter))} />
       {console.warn(state)}
      </View>
    </>
  );
};

export default ListProcess;
