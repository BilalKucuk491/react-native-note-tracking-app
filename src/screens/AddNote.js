import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import colors from '../assets/colors';
import {addList} from '../redux/actions/noteActions';
import {selectNoteID} from '../redux/actions/noteActions';
const screen = Dimensions.get('screen');

const AddNote = () => {
  const navigation = useNavigation();
  const state = useSelector(state => state);
  const idDispatch = useDispatch();
  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [noteValue, setNoteValue] = useState();
  const [colorValue, setColorValue] = useState('NULL');

  bgColor = colors[Math.floor(Math.random() * colors.length)];
  colorValue === 'NULL' ? setColorValue(bgColor) : '';

  const OnPressEvent = () => {
    if ((titleValue, dateValue, noteValue != null)) {
      idDispatch(selectNoteID(state.noteList.length));

      dispatch(
        addList({
          id: state.noteList.length,
          title: titleValue,
          date: dateValue,
          titleType: 'Personel',
          note: noteValue,
          color: colorValue,
        }),
      );
      navigation.navigate('HomeScreen');
    } else {
      alert('Lutfen duzgun deger giriniz');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colorValue}}>
      <View style={styles.noteContextContainer}>
        <View style={styles.noteHeaderContainer}>
          <TextInput
            style={styles.noteTitle}
            placeholder="Note Title"
            onChangeText={value => setTitleValue(value)}
          />
          <TextInput
            style={styles.noteDate}
            placeholder="Date"
            onChangeText={value => setDateValue(value)}
          />
        </View>
        <ScrollView>
          <TextInput
            multiline={true}
            textAlignVertical="top"
            style={styles.note}
            placeholder="Note"
            onChangeText={value => setNoteValue(value)}
          />
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => OnPressEvent()}>
        <Text style={{color: 'white', fontSize: 20}}>Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  noteContextContainer: {
    margin: 30,
  },
  noteHeaderContainer: {
    marginTop: 30,
    marginBottom: 20,
    width: screen.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteTitle: {
    fontSize: 35,
    color: '#000',
    backgroundColor: 'white',
    width: screen.width / 2,
    borderRadius: 10,
  },
  noteDate: {
    fontSize: 35,
    color: '#000',
    width: screen.width / 3,
    marginRight: 60,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  note: {
    fontSize: 25,
    lineHeight: 35,
    color: '#000',
    backgroundColor: 'white',
    width: screen.width - 60,
    height: screen.width,
    borderRadius: 20,
  },
  btnContainer: {
    backgroundColor: 'green',
    width: 132,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 45,
    right: 25,
    position: 'absolute',
    borderRadius: 10,
  },
});
