import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator/StackNavigator';
import {LateralBasicMenu} from './src/navigator/LateralBasicMenu';
import {LateralMenu} from './src/navigator/LateralMenu';
import {Tabs} from './src/navigator/Tabs';
import {AuthProvider} from './src/context/AuthContext';
const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <LateralMenu />
      </AppState>
    </NavigationContainer>
  );
};

//the father component that is conectec to the context we created 
const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default App;
