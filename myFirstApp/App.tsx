import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModel} from './src/screens/BoxObjectModel';
import {Counter} from './src/screens/Counter';
import {DimentionsScreen} from './src/screens/DimentionsScreen';
import {FlexScreen} from './src/screens/FlexScreen';
import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
import {HomeWorkScreen} from './src/screens/HomeWorkScreen';
import {PositionScreen} from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* //  <HelloWorldScreen/>
  // <Counter/> */}
      {/* <BoxObjectModel/> */}
      {/* <DimentionsScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <HomeWorkScreen />
    </SafeAreaView>
  );
};

export default App;
