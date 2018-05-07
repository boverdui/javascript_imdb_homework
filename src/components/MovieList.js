import React, { Component } from 'react';
import Movie from './Movie.js';

class MovieList extends Component {
  render() {
    const movieNodes = this.props.data.map((movie) => {
      return (
        <Movie key={movie.id} title={movie.title} detailsURL={movie.detailsURL} showtimesURL={movie.showtimesURL}>
        </Movie>
      )
    });
    return (
      <div className = "movie-list">
        {movieNodes}
      </div>
    );
  }
}

export default MovieList;
