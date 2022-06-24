import React, { useContext } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { permissionsContext } from '../context/PermissionsContext';
export const PrivilegesScreen = () => {

const  {permissions,checkLocationpermission}  = useContext(permissionsContext)
  
  return (
    <View style={styles.container}>
      <Text>
        PrivilegesScreen <Icon name="ios-person" size={30} color="#4F8EF7" />
      </Text>

      <Button 
      title="Permission"
      onPress={()=>{checkLocationpermission()}}
      />

      <Text>
        {JSON.stringify(permissions,null,5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
