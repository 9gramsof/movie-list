import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   event.preventDefault();
  //   this.handleSubmit(event);
  // }

  handleSubmit(event) {
    event.preventDefault();
    const movies = this.props.value.slice(0);
    const searchTerm = event.target[0].value;
    const filteredItems = movies.filter(
      (item) => {
        if (searchTerm === "") {
          return item
        } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item
        }
      })
    this.props.handleUpdate(filteredItems);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search..."/>
        <input type="submit" value="Go!" />
      </form>
    );
  }
}


export default Search;