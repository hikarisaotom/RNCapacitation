import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

export const Page2Screen = () => {

const navigation = useNavigation();
useEffect(() => {
  navigation.setOptions({
    title:'HolaMundo',
    headerBackTitle:'Back'
  })
}, [])

  return (
    <View style={styles.globalMargin}>
        <Text  style={styles.title}>
            Screen2
        </Text>
        <Button title='Go to screen3'
        onPress={()=>{
          //navigator.goBack()
   
          navigation.navigate({name:'Page3Screen'});
        }}/>
    </View>
  )
}
