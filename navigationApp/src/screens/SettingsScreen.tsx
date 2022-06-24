import React, { useContext } from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView,useSafeAreaInsets} from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContex } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const insets=useSafeAreaInsets();

  const {authState} = useContext(AuthContex)
  return (
    //<SafeAreaView>
    <View style={{...styles.globalMargin,
      marginTop:insets.top
    }}>
      <Text style={styles.title}>Settings screen</Text>
      <Text>{
        JSON.stringify(authState,null,4)}</Text>
        {authState.favoriteIcon&&<Icon name={authState.favoriteIcon} size={30} color="#4F8EF7" />}
       

    </View>
    //</SafeAreaView>
  );
};
