import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (
    <div className='bg-black '>
      <div className='-mt-44 px-6  z-20'>
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        <MovieList title="TV Shows" movies={movies.tvShows} />
      </div>
    </div>
  )
}

export default SecondaryContainer
