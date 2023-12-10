/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { AppProvider } from './src/context/AppContext';
import AppNavigator from './src/navigator/AppNavigator';

function App(): JSX.Element {

  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  )
}

export default App;
