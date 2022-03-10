import React from 'react';

var MovieListEntry = (props) => (
  <div className="movie">
    <div className="movie-title">{props.movie.title}</div>
  </div>
);

export default MovieListEntry;