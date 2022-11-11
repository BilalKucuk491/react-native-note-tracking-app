import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {increaseNumber, decreaseNumber} from '../redux/actions/numberActions';
const NumberProcess = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <>
      <View style={{
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
      }}>
        <Button title='+' onPress={()=> dispatch(increaseNumber())} />
        <Text>{state.counter}</Text>
        <Button title='-' onPress={()=> dispatch(decreaseNumber())} />
        {JSON.stringify(state.counter) === "12" ? alert("12 Oldu") : ""}
      </View>
    </>
  );
};

export default NumberProcess;
