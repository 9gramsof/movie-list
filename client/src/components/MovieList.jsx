import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => {
  return (
    <div className="movielist">
      {props.movies.map((movie, index) =>
        <MovieListEntry movie={movie} key={index}/>
      )}
    </div>
  );
};

export default MovieList;