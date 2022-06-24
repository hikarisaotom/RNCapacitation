import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from '../screens/SearchScreen';
import React from 'react';
import {Tab1} from './Tab1';
import {Platform, StyleSheet, View} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:'#5856D6',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255, 0.7)',
          borderWidth: 0,
          elevation: 0,
        },

      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
    >
      <Tab.Screen 
      name="HomeScreen_Navigator" 
      component={Tab1}
      options={{
          tabBarLabel:'List',
          tabBarIcon:({color})=><Icon 
          color={color} 
          size={25}
          name="list-outline"/>
      }} />
      <Tab.Screen name="SearchScreen"
       component={Tab2Screen} 
       options={{
        tabBarLabel:'Search',
        tabBarIcon:({color})=><Icon 
        color={color} 
        size={25}
        name="search-outline"/>
    }} />
    </Tab.Navigator>
  );
};


// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// import { Tab1 } from './Tab1';

// import { Tab2Screen } from './Tab2';

// const Tab = createBottomTabNavigator();



// export const Tabs = () => {
//   return (
//     <Tab.Navigator
//         sceneContainerStyle={{
//             backgroundColor: 'white'
//         }}
//         tabBarOptions={{
//             activeTintColor: '#5856D6',
//             labelStyle: {
//                 marginBottom: ( Platform.OS === 'ios' ) ? 0 : 10
//             },
//             style: {
//                 position: 'absolute',
//                 backgroundColor: 'rgba(255,255,255, 0.92)',
//                 borderWidth: 0,
//                 elevation: 0,
//                 height: (Platform.OS === 'ios' )? 80 : 60
//             }
//         }}
//     >
//       <Tab.Screen 
//         name="HomeScreen" 
//         component={ Tab1 }
//         options={{
//             tabBarLabel: "Listado",
//             tabBarIcon: ({ color }) => (
//                 <Icon 
//                     color={ color } 
//                     size={ 25 } 
//                     name="list-outline"
//                 />
//             )
//         }}
//       />
//       <Tab.Screen 
//         name="SearchScreen" 
//         component={ Tab2Screen } 
//         options={{
//             tabBarLabel: "Búsqueda",
//             tabBarIcon: ({ color }) => (
//                 <Icon 
//                     color={ color } 
//                     size={ 25 } 
//                     name="search-outline"
//                 />
//             )
//         }}
//     />
//     </Tab.Navigator>
//   );
// }
