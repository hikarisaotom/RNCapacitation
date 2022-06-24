import React from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import { useState } from 'react';

export const PulltoRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<string>()

const onRefresh=()=>{
  setRefreshing(true)
  setTimeout(()=>{
    console.log('done')
    setRefreshing(false)
    setData("Pulled and refreshed!")
  },1500)
}

  return (
    <ScrollView
    refreshControl={
      <RefreshControl 
      refreshing={refreshing}
      onRefresh={()=>onRefresh()}
      colors={['red','orange']}
 
       />
    }>
      <View>
        <HeaderTitle title="Pull to refresh" />

        {
          data&&<HeaderTitle title={data} />
        }

      </View>
    </ScrollView>
  );
};
