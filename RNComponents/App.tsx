import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigators/StackNavigator';

import {ThemeProvider} from './src/context/themeContext/ThemeContext';

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
