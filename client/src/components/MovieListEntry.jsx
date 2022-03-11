import React from 'react';


var MovieListEntry = ({movie}) => {

  var text = 'watched';

  function onClick(event) {
    event.preventDefault();

    if (movie.watched) {
      movie.watched = false;
      text = 'to watch'
    } else if (!movie.watched) {
      movie.watched = true;
      text = 'watched'
    }
    console.log(movie);
    console.log(text);
    // console.log('you clicked me!');
  };

  return (

    <li className="movie-title">{movie.title}
    <button onClick={onClick}>{text}</button>
    </li>
  );
};

export default MovieListEntry;