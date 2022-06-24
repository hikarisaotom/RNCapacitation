import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}>
        <Text>POSITION SCREEN</Text>
      </View>
      <View style={styles.orangeBox}>
        <Text>POSITION SCREEN</Text>
      </View>
      <View style={styles.greenBox}>
        <Text>POSITION SCREEN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28C4D9',
    flex: 1,
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position:'absolute',
    bottom:0,
    left:0
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',
    position:'absolute',
    bottom:0,
    right:0
  },
 greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    position:'absolute'
  },
});
