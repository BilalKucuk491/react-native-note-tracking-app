import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const NotesApp = () => {
  const [icon, setIcon] = useState(false);
  const [search, setSearch] = useState(false);

  const navigation = useNavigation();

  const state = useSelector(state => state);

  const data = icon
    ? state.noteList.sort((a, b) => a.title.localeCompare(b.title))
    : state.noteList.sort((a, b) => a.title.localeCompare(b.title)).reverse();

  const OnPressEvent = () => {
    setIcon(!icon);
    return data;
  };

  // useEffect(() => {
  //   const searchTitle = data.find(item => {
  //     return item.title.toUpperCase() == search.toUpperCase();
  //   })

  //  if (searchTitle !== undefined) {
    
  //   return data.filter((item)=> {return item.title.toUpperCase() == search.toUpperCase() } )
  //  }
  // }, [search]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={'search...'}
          onChangeText={item => setSearch(item)}
        />
        <TouchableOpacity
          style={styles.sortingContainer}
          onPress={() => OnPressEvent()}>
          <Text style={styles.btnSortByText}>Sort by</Text>

          <FontAwesome5Icon
            size={24}
            name={icon ? 'sort-alpha-up' : 'sort-alpha-up-alt'}
            style={styles.btnSortByIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {data
          .filter(el => {
            return el != null;
          })
          .map((item, key) => {
            return (
              <Card
                id={key}
                date={item.date}
                noteTittle={item.title}
                noteTitleType={item.titleType}
                note={item.note}
                backgroundColor={item.color}
                key={key}
              />
            );
          })}
      </ScrollView>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate('AddNoteScreen')}>
        <FontAwesome5Icon name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default NotesApp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1.2,
    borderRadius: 20,
    borderColor: '#404040',
    width: '70%',
    fontSize: 20,
    textAlign: 'center',
  },
  btnSortByIcon: {
    paddingLeft: 10,
  },
  btnSortByText: {
    fontSize: 15,
    color: 'gray',
    fontWeight: 'bold',
  },
  sortingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnContainer: {
    backgroundColor: 'green',
    width: 66,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 45,
    right: 25,
    position: 'absolute',
    borderRadius: 33,
  },
});
