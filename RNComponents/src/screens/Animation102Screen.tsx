import React from 'react'
import { View, StyleSheet } from 'react-native';

export const Animation102Screen = () => {
  return (
   <View style={{
     flex:1
   }}>
     <View style={styles.purppleBox}/>

   </View>

  )
}

const styles=StyleSheet.create({
purppleBox:{
  backgroundColor:'red',
  width:150,
  height:150
}
})
