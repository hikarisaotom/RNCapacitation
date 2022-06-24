import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, ScrollView} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {MovieCategory} from '../components/MovieCategory';

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying!}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={700}
            itemWidth={300}
          />
        </View>

        {/* Movie Categories */}
        <MovieCategory
          moviesToShow={nowPlaying}
          categoryTitle="Now Playing!"
        />
        <MovieCategory moviesToShow={popular} categoryTitle="Popular Movies" />
        <MovieCategory moviesToShow={topRated} categoryTitle="Top Rated" />

        <MovieCategory moviesToShow={upcoming} categoryTitle="Upcoming" />
      </View>
    </ScrollView>
  );
};
