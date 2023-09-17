import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import React from 'react';
import CounterScreen from './src/screens/CounterScreen';

const App = () => {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
};

export default App;
