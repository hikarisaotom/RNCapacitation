import React, { useContext } from 'react';
import {View,Button,Text} from 'react-native';
//import { } from 'react-native-paper';
import {styles} from '../theme/appTheme';
import { AuthContex, AuthState } from '../context/AuthContext';

export const ContactsScreen = () => {


  const {authState,sigIn}=useContext(AuthContex)
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>
      {!authState.isLoggedIn&&<Button title="sigIn" onPress={sigIn}/>}
    </View>
  );
};
