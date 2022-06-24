import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{
  id:number,
  name:string
}

export const Page3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text  style={styles.title}>
            Screen3
        </Text>
        <Button title='Go back'
        onPress={()=>{
          navigation.pop()
        }}/>
         <Button title='Go Home'
        onPress={()=>{
          navigation.popToTop()
        }}/>
    </View>
  )
}
