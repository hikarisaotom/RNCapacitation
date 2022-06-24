import React from 'react';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions, Text, View, Image} from 'react-native';
const Drawer = createDrawerNavigator();
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {styles} from '../theme/appTheme';
import { TouchableOpacity } from 'react-native';
import { Tabs } from './Tabs';

export const LateralMenu = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
    //    headerShown: false
      }}
      drawerContent={props => <InternalMenu {...props} />}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={Tabs} />

      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* avatar Part */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:
              'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
         style={styles.menuBtn}
         onPress={()=>navigation.navigate('Tabs')}
         >
          <Text style={styles.menutext}>TABS</Text>

        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.menuBtn}
        onPress={()=>navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.menutext}>Settings</Text>

        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
