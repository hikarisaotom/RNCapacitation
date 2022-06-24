import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1 = () => {

  useEffect(() => {
    console.log('Tab1Screeb effect')
  }, [])
  
  return (
   <View style={styles.globalMargin}>
       <Text style={styles.title}>ICONS</Text>
       <TouchableIcon name="ios-person" />
       <TouchableIcon name="add-circle-outline"/>
     
   </View>
  )
}
