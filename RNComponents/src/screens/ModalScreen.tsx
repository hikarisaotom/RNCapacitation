import React from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <HeaderTitle title="Modal component" />

      <Button title="Open modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="slide" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            // width:100,
            // height:100
          }}
        ></View>
        <View style={{backgroundColor: 'white'}}>
          <HeaderTitle title="Modal" />

          <Text>Modal Body </Text>
          <Button title="Close modal" onPress={() => setIsVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};
