/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//react
import React from 'react';

//navigation
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigator/StackNavigator'

//Providers
import { PermissionsProvider } from './context/PermissionsContext'
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
import store from './reduxStore/store'

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <PermissionsProvider>
            <StackNavigator />
          </PermissionsProvider>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
