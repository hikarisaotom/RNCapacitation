import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
        BoxObjectModel
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    backgroundColor:'red',
    flex:1
},
title:{
    margin:20,
    padding:50,
    fontSize:20,
    borderWidth:10
}
})
