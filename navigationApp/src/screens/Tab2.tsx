import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab2 = () => {
  useEffect(() => {
    console.log('Tab1Screeb effect')
  }, [])
  return (
   <View>
       <Text>Tab2Screen</Text>
   </View>
  )
}
