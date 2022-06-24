import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { AlbumsScreens } from '../screens/AlbumsScreens';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator=()=> {
  const {top}=useSafeAreaInsets()
  return (
    <Tab.Navigator
    style={{
      paddingTop:top
    }}
    sceneContainerStyle={{
      backgroundColor:'white'
    }}
    tabBarOptions={{
      pressColor:colors.primary,
      showIcon:true,
      indicatorStyle:{
        backgroundColor:colors.primary,
      },
      style: {
        borderTopColor: colors.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({color, focused}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Tab1Screen':
            iconName = 'bandage-outline';
            break;

          case 'Tab2Screen':
            iconName = 'basketball-outline';
            break;

          case 'StackNavigator':
            iconName = 'bookmarks-outline';
            break;
        }
        return <Text>{route.name}</Text>;
        //  return <Icon name={ iconName } size={ 20 } color={ color } />
      },
    })}
    >
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreens} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
    </Tab.Navigator>
  );
}