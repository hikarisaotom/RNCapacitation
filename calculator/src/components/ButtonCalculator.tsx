import React from 'react';
import {styles} from '../theme/appTheme';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: string;
  width?:boolean;
  action: (acction:string) => void
}

export const ButtonCalculator = ({text, color = '#2D2D2D',width=false,action}: Props) => {
  return (
      <TouchableOpacity
      onPress={()=>action(text)}>
      <View
      style={
        //   [styles.btn,{backgroundColor:color}]
        {...styles.btn, 
            backgroundColor: color,
            width:(width)?180:80,
        }
      }
    >
      <Text style={{
          ...styles.btnText,
          color:(color==='#9B9B9B')?'black':'white'
      }}>{text}</Text>
    </View>
    </TouchableOpacity>
  );
};
