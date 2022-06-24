import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigator/StackNavigator';
import {AuthContex} from '../context/AuthContext';
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {
  name: string;
  id: number;
}
export const PersonaScreen = ({route, navigation}: Props) => {
  const {authState, changeUsername} = useContext(AuthContex);

  const {id, name} = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  useEffect(() => {
    changeUsername(name);
  }, []);

  return (
    <View>
      <Text style={styles.title}>Hello {name}</Text>
    </View>
  );
};
