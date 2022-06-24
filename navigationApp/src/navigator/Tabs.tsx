import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, Text} from 'react-native';
import {Tab1} from '../screens/Tab1';
import {Tab2} from '../screens/Tab2';
import {Tab3} from '../screens/Tab3';
import {colors} from '../theme/appTheme';
import {StackNavigator} from './StackNavigator';
import {TopTabNavigator} from './TopTabNavigator';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

// IOS
const TabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <TabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white', //this is where the cntent goes
      }}
      // screenOptions={{ headerShown: false}}
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
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      {/* <Tab.Screen name="Tab1" options={{title:'TB1', tabBarIcon:(props)=><Text style={{color:props.color}}>T1</Text>}} component={Tab1} /> */}
      <TabIOS.Screen name="Tab1" options={{title: 'TB1'}} component={Tab1} />
      <TabIOS.Screen name="Tab2" options={{title: 'TB2'}} component={TopTabNavigator} />
      <TabIOS.Screen
        name="Tab3"
        options={{title: 'TB3'}}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
};

// Android
const TabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      // screenOptions={{ headerShown: false}}
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
      <TabAndroid.Screen
        name="Tab1"
        options={{title: 'TB1'}}
        component={Tab1}
      />
      <TabAndroid.Screen
        name="Tab2"
        options={{title: 'TB2'}}
        component={TopTabNavigator}
      />
      <TabAndroid.Screen
        name="Tab3"
        options={{title: 'TB3'}}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
}
