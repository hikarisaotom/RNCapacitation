import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {PrivilegesScreen} from '../screens/PrivilegesScreen';
import {MapScreen} from '../screens/MapScreen';
import {permissionsContext} from '../context/PermissionsContext';
import {LoadingScreen} from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {permissions} = useContext(permissionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }
  return (
    <Stack.Navigator
      initialRouteName="PrivilegesScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen name="MapScreen" component={MapScreen} />
      ) : (
        <Stack.Screen name="PrivilegesScreen" component={PrivilegesScreen} />
      )}
    </Stack.Navigator>
  );
};
