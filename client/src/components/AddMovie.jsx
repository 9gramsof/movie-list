import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handleSubmit for adding a movie
  handleSubmit(event) {
    event.preventDefault();
    const movie = {title: event.target[0].value};
    //add it to movieList
    const movieList = this.props.value.slice(0);
    movieList.push(movie);
    //display it on screen
    this.props.handleUpdate(movieList);
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add title here..." />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddMovie;