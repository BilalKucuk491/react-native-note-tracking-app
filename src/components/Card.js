import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {selectNumber} from '../redux/actions/numberActions';

const Card = ({id, date, noteTittle, note, noteTitleType, backgroundColor}) => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const OnPressEvent = () => {
    dispatch(selectNumber(id));
    navigation.navigate('NoteScreen');
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: backgroundColor,
          height: 200,
          borderRadius: 10,
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <View style={styles.noteDateContainer}>
          <Text style={styles.noteDate}>{date}</Text>
        </View>
        <View style={styles.noteContainer}>
          <Pressable onPress={() => OnPressEvent()}>
            <Text style={styles.noteTitle}>{noteTittle}</Text>
            <Text style={styles.noteTitleType}>{noteTitleType}</Text>
          </Pressable>

          <Text style={styles.note}>{note}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  noteDateContainer: {
    alignItems: 'flex-end',
    padding: 8,
  },
  noteDate: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteContainer: {
    marginHorizontal: 20,
  },
  noteTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    width: 150,
  },
  noteTitleType: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: 130,
  },
  note: {
    color: '#404040',
    fontSize: 22,
    fontWeight: 'bold',
    height: 80,
  },
});
