import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
       <View style={styles.purpleBox}></View>
       <View style={styles.orangeBox}></View>
       <View style={styles.blueBox}></View>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'column',
     justifyContent:'center',
    alignItems:'center'
    },
    purpleBox:{
       width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
        //flex:2
    },
    orangeBox:{
       width:100,
       height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        //flex:1,
       // alignSelf:'center'
      // flex:2
    },
    blueBox:{
       width:100,
       height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',
      // alignSelf:'flex-start'
     // flex:4
    },
})