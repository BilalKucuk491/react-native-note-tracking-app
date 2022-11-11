import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';

const Note = () => {

  const state = useSelector(state => state);
  const data = state.noteList[state.selectNumber];
  return (
    <View style={{flex:1, backgroundColor:data.color}}>
      <View style={styles.noteContextContainer}>
        <Text style={styles.noteTitle}>{data.title}</Text>
        <ScrollView>
          <Text style={styles.note}>{data.note}</Text>
        </ScrollView>
      </View>
    </View>
    
  );
};

export default Note;

const styles = StyleSheet.create({
  
  noteContextContainer: {
    margin: 30,
  },
  noteHeaderContainer: {
    flexDirection: 'row',
  },
  noteTitle: {
    marginBottom: 20,
    fontSize: 35,
    color: 'white',
  },
  note: {
    fontSize: 25,
    lineHeight: 35,
    color: '#fff',
  },
});
