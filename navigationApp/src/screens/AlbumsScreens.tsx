import React, { useContext } from 'react'
import { View, Button } from 'react-native';
import { Text } from 'react-native-paper'
import { AuthContex } from '../context/AuthContext'
import { styles } from '../theme/appTheme';

export const AlbumsScreens = () => {
  const {authState,logOut}=useContext(AuthContex)
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>
      {authState.isLoggedIn&&<Button title="logOut" onPress={logOut}/>}
    </View>
  );
}
