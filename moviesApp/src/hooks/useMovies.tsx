import movieDB from '../api/movieDB';

import React, {useEffect, useState} from 'react';
import {MovieDBResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular:[],
    topRated:[],
    upcoming:[], 
  });

  const getMovies = async () => {
    const nowPlaying = movieDB.get<MovieDBResponse>('/now_playing');
    const popular = movieDB.get<MovieDBResponse>('/popular');
    const topRated = movieDB.get<MovieDBResponse>('/top_rated');
    const upcoming = movieDB.get<MovieDBResponse>('/upcoming');

    const responses = await Promise.all([
      nowPlaying,
      popular,
      topRated,
      upcoming,
    ]);

    setMoviesState({
      nowPlaying: responses[0].data.results,
      popular: responses[1].data.results,
      topRated: responses[2].data.results,
      upcoming: responses[3].data.results,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    //get now playing movies
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
