import React  from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';
const Drawer = createDrawerNavigator();

export const LateralBasicMenu=()=> {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
    }}
  >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}