import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Animation101Screen} from '../screens/Animation101Screen copy';
import {Animation102Screen} from '../screens/Animation102Screen';
import {HomeScreen} from '../screens/HomeScreen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {AlertsScreen} from '../screens/AlertsScreen';
import {TextInputScreen} from '../screens/TextInputScreen';
import {PulltoRefreshScreen} from '../screens/PulltoRefreshScreen';
import {SectionListScreen} from '../screens/SectionListScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {InfiniteScrollScreen} from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';

const Stack = createStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PulltoRefreshScreen"
        component={PulltoRefreshScreen}
      />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
    </Stack.Navigator>
  );
};
