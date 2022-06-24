import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab3 = () => {
  useEffect(() => {
    console.log('Tab1Screeb effect')
  }, [])
  return (
   <View>
       <Text>Tab3Screen</Text>
   </View>
  )
}
