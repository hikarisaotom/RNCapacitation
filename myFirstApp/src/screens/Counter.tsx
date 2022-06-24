import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FAB} from '../components/Fab';
export const Counter = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador:{counter}</Text>
      <FAB 
      title="+1"
      onPress={() => setCounter(counter+1) }
      position='bl'/>
       <FAB 
      title="-1"
      onPress={() => setCounter(counter-1) }
      position='br'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -10,
  },
});
