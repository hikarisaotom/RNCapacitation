import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl'; ///putting ythe ? means is optional
}
export const FAB = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.75}
        style={[styles.fabLocation, position == 'bl' ? styles.bl : styles.br]}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[styles.fabLocation, position == 'bl' ? styles.bl : styles.br]}
      >
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('black', true, 20)}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS == 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocation: {
    //Fab location bottom left
    position: 'absolute',
    bottom: 0,
  },
  bl: {
    //Fab location bottom left
    right: 25,
  },
  br: {
    //Fab location bottom right
    left: 25,
  },
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center', //To center the childs of the container vertically to the center
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center', //to aling the content itselft
  },
});
