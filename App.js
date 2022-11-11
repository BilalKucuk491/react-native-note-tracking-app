import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Router from './src/Navigation/Router';


const RootApp = () => {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
};

const App = () => {
  return <RootApp />;
};

export default App;
