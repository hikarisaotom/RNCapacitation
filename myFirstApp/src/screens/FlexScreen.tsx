import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
 export const FlexScreen = () => {
    return (
    <View style={styles.container}>
      <Text style={styles.box1}>SCREEN</Text> 
      <Text style={styles.box2}>SCREEN2</Text>
    <Text style={styles.box3}>SCREEN3</Text>
    </View>
  );
};
const styles=StyleSheet.create({
    box1:{
      //  alignSelf:'flex-start',
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // flex:4 //40 % of the screen goes to this box 
    },
    box2:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // flex:4 //40 % of the screen goes to this box 
    },
    box3:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // flex:2//20 % of the screen goes to this box 

    },
    container:{
         flex:1,
        backgroundColor:'#28C4D9',
      
    }

})