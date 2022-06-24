import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { Page4Screen } from '../screens/Page4Screen';
import React  from 'react';
const Stack = createStackNavigator();

export const StackNavigator= ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page1Screen" component={Page1Screen} />
      <Stack.Screen name="Page2Screen" component={Page2Screen} />
      <Stack.Screen name="Page3Screen" component={Page3Screen} />
      <Stack.Screen name="Page4Screen" component={Page4Screen} />

    </Stack.Navigator>
  );
}
