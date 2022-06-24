import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {
  id: number;
  name: string;
}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen1</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Page2Screen');
          }}
          style={styles.bigBottom}
        >
          <Text style={styles.textBigBottom}> Go to screen2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonaScreen', {id: 1, name: 'Clau'});
          }}
          style={styles.bigBottom}
        >
          <Text style={styles.textBigBottom} >Nagivate with arguments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonaScreen', {id: 2, name: 'Maria'});
          }}
          style={styles.bigBottom}
        >
          <Text style={styles.textBigBottom}>Nagivate with arguments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
