import React from 'react';
import movies from './MovieListData.jsx';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: movies,
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  //handleSubmit for adding a movie and search
  handleUpdate(newValue) {
    this.setState({value: newValue});
  }
  //make a render function
  render() {
    return (
      <div>
        <div className="add-movie">
          <div><AddMovie value={this.state.value} handleUpdate={this.handleUpdate}/></div>
        </div>
        <div className="search-bar">
          <div><Search value={this.state.value} handleUpdate={this.handleUpdate}/></div>
        </div>
        <div className="title">
          <h1>Movie List!</h1>
        </div>
        <div className="movie-list">
          <div><MovieList movies={this.state.value}/></div>
        </div>
      </div>
    )
  }
}

export default App;