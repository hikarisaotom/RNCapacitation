import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';
const   App=()=> {
  return (
    <NavigationContainer>{/* Rest of your app code */
    <StackNavigator/>
    }</NavigationContainer>
  );
}

export default App;