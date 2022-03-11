import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({movies}) => {


  return (
    <ul className="movielist">
      <h2> Watched</h2>
      <div>
      {movies.map((movie, index) =>
        <MovieListEntry movie={movie} key={index}/>
      )}
      </div>
      <h2> to Watch</h2>
      <div>
      {movies.map((movie, index) =>
        <MovieListEntry movie={movie} key={index}/>
      )}
      </div>
    </ul>

  );
};

export default MovieList;