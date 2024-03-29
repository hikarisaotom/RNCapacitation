// import {StackScreenProps} from '@react-navigation/stack';
// import React from 'react';
// import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
// //import { Movie } from '../interfaces/movieInterface';
// import {RootStackParams} from '../navigators/StackNavigator';
// import { useMovieDetails } from '../hooks/useMovieDetails';

// const screenHeight = Dimensions.get('screen').height;
// interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
// export const DetailScreen = ({route}: Props) => {
//   const movie = route.params;
//   console.log(movie.original_title);
//   const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

//   const {cast,isLoading,MovieFull}=useMovieDetails(movie.id)

//   return (
//     <ScrollView>
//       <View style={styles.imageContainer}>
//         <Image source={{uri}} style={styles.posterImage} />
//       </View>
//       <View>
//         <Text style={styles.title}>{movie.original_title}</Text>
//         <Text style={styles.subtitle}>{movie.title}</Text>
//       </View>

//       <View>
//         <Text style={styles.title}>{}</Text>
//         <Text style={styles.subtitle}>{movie.title}</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   imageContainer: {
//     width: '100%',
//     height: screenHeight * 0.7,
//   },
//   posterImage: {
//     flex: 1,
//     borderBottomEndRadius: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     opacity: 0.8,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });


import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
//import { Movie } from '../interfaces/movieInterface';
import {RootStackParams} from '../navigators/StackNavigator';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}

      {/* Boton para cerrar */}
      <View style={ styles.backButton }>
                <TouchableOpacity
                    onPress={() => navigation.pop() }
                >
                   <Text  style={{
                     ...styles.title,
                     backgroundColor:'red'
                   }}> back </Text>
                </TouchableOpacity>
            </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    // backgroundColor: 'red',
    // overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});
