import { View, Text } from 'react-native';
import { styles } from '../appTheme/appTheme';
import React from 'react';
interface Props{
  title?:string
}
export const HeaderTitle = ({title}:Props) => {
    return (
      <View style={{marginTop:20, marginBottom:20}}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };