/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Game} from './pages/Game';
import {Provider} from 'react-redux';
import { store } from './store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Game />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
