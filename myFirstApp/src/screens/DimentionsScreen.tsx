import React from 'react';
import {View, Text, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';

//const {width,height} =Dimensions.get('window')

export const DimentionsScreen = () => {
    const {width,height} = useWindowDimensions();
  return (
    <View>
        <View style={styles.container}>
      <View style={{...styles.purpleBox,width:width*0.6}}></View>
      <View style={styles.orangeBox}></View>
    </View>
    <Text  style={styles.title}> W:{width} , H:{height} </Text>

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:200,
        backgroundColor:'red'

    },
    title:{
        fontSize:20
    },
  purpleBox: {
    backgroundColor: 'purple',
    //width: '50%',

    height:'50%'
  },
  orangeBox: {
    backgroundColor: 'orange',
  
  },
});
