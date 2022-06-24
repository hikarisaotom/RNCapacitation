import React from 'react';
import {View, StyleSheet, Animated, Button, Easing} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, position, opacity, startMoving} = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purppleBox,
          marginBottom: 20,
          opacity: opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="fadeIn"
        onPress={() => {
          fadeIn();
          startMoving(-100);
        }}
      />
      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purppleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
