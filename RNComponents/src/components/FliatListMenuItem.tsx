import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
interface Props {
  menuItem: MenuItem;
}

export const FliatListMenuItem = ({menuItem}: Props) => {
  const navigate=useNavigation()
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={()=>navigate.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="gray" size={19} />
        <Text style={styles.itemText}>
          {menuItem.name} 
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="gray" size={19} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,

  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
