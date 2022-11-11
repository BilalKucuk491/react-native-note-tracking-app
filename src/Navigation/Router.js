import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import NotesApp from '../screens/NotesApp';
import AddNote from "../screens/AddNote";
import Note from "../screens/Note";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
    return <NotesApp />;
  };
  const NoteScreen = () => {
    return <Note />;
  };
  const AddNoteScreen = () => {
    return <AddNote />;
  };

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Notes'}}
        />
        <Stack.Screen
          name="NoteScreen"
          component={NoteScreen}
          options={{title: 'Note'}}
        />
        <Stack.Screen
          name="AddNoteScreen"
          component={AddNoteScreen}
          options={{title: 'Add Note'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
