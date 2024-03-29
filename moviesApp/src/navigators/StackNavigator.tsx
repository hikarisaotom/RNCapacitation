import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams={
  HomeScreen:undefined;
  DetailScreen:Movie;
}


const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false,
      cardStyle:{
        backgroundColor:'white'
      }
    }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}