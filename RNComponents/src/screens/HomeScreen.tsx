import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../appTheme/appTheme';
import { FliatListMenuItem } from '../components/FliatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { menuItems } from '../data/menuItems';
import { MenuItem } from '../interfaces/appInterfaces';

const itemseparator=()=>{
    return(
        <View style={{
            borderBottomWidth:1,
            opacity:0.4,
            marginVertical:8
        }}>

        </View>
    )
}
export const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={menuItems}
        renderItem={({item, index}) => <FliatListMenuItem menuItem={item}/>}
        keyExtractor={item => item.name}
        ListHeaderComponent={()=><HeaderTitle title="options"/>}
        ItemSeparatorComponent={()=>itemseparator()}
      />
    </View>
  );
};
