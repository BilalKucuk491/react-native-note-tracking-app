import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotesApp from './src/screens/NotesApp';
import AddNote from './src/screens/AddNote';
import Note from './src/screens/Note';
import {Provider} from 'react-redux';
import store from './src/redux/store';
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

const RootApp = () => {
  return (
    <Provider store={store}>
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
      
    </Provider>
  );
};

const App = () => {
  return <RootApp />;
};

export default App;
