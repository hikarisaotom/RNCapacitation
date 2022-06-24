import React from 'react';
import {Button, View, Alert} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';

export const AlertsScreen = () => {
  const showAlert = () => {
    Alert.alert('This is an alert', 'subtitle', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('cancel');
        },
        style:'cancel'
      },
      {
        text: 'OK',
        onPress: () => {
          console.log('OK');
        },
        style:'default'
      }
    ]);
  };
  return (
    <View>
      <HeaderTitle title="Alerts" />
      <Button title="show alert" onPress={showAlert} />
    </View>
  );
};
