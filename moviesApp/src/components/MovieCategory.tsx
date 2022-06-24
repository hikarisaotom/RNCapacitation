import React from 'react'
import { Text,FlatList, View, } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { MoviePoster } from './MoviePoster'

interface Props{
    moviesToShow:Movie[];
    categoryTitle:string;

}


export const MovieCategory = ({moviesToShow,categoryTitle}:Props) => {
  return (
      <View style={{marginTop:10}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>{categoryTitle}</Text>
    <FlatList
      data={moviesToShow}
      renderItem={({item}: any) => (
        <MoviePoster movie={item} width={140} height={200} />
      )}
      keyExtractor={item => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={true}
    />
  </View>
  )
}
