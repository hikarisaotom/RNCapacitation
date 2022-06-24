import React from 'react'
import { View,Text } from 'react-native';
export const HelloWorldScreen = () => {
  return (
    <View style={{
        flex:1,
       // backgroundColor:'blue',
        justifyContent:'center'
      }}>
        <Text style={{
        fontSize:55,
        textAlign:'center'
      }}>
      Clau hizo una screen
        </Text>
      </View>
  )
}
