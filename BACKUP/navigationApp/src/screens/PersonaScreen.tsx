import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{
  name:string,
  id:number
}
export const PersonaScreen = ({route,navigation}:Props) => {
 const {id,name}=route.params
 useEffect(()=>{
   navigation.setOptions({
     title:name
   })
 })
  return (
    <View >
        <Text style={styles.title}>
        Hello {name}
        </Text>
    </View>
  )
}
