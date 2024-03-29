import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { ProductsProvider } from './src/context/ProductsContext';

const App=()=> {
  return (
    <NavigationContainer>
      <AppState>
      <StackNavigator/>
      </AppState>
    </NavigationContainer>
  );
}

export default App;


const AppState=({children}:any)=>{
return(
  <AuthProvider>
    <ProductsProvider>
    {children}
    </ProductsProvider>
  </AuthProvider>
)
}


