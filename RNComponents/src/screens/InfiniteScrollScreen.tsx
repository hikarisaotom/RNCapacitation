import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const renderItem = (item: number) => {
    return (
      <Image
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      ListFooterComponent={()=>(
        <View style={{
          height:150,
          justifyContent:'center',
          alignItems:'center',
          width:'100%'
        }}>
          <ActivityIndicator size={40} color='red' />
        </View>
      )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
