import React, { Component } from 'react';
import MovieList from '../components/MovieList.js';

class MovieBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, title: 'Sherlock Gnomes', detailsURL: 'http://whatever', showtimesURL: 'http://whatever'},
        { id: 2, title: 'Life of the Party', detailsURL: 'http://whatever', showtimesURL: 'http://whatever'},
        { id: 3, title: 'Breaking In', detailsURL: 'http://whatever', showtimesURL: 'http://whatever'},
        { id: 4, title: 'Entebbe', detailsURL: 'http://whatever', showtimesURL: 'http://whatever'},
        { id: 5, title: 'Redoubtable', detailsURL: 'http://whatever', showtimesURL: 'http://whatever'},
        { id: 6, title: 'How to Talk to Girls at Parties', detailsURL: 'http://whatever', showtimesURL: 'http://whatever'},
        { id: 7, title: 'Revenge', detailsURL: 'http://whatever', showtimesURL: 'http://whatever'},
        { id: 8, title: 'Anon', detailsURL: 'http://whatever', showtimesURL: 'http://whatever'},
        { id: 9, title: 'The Cured', detailsURL: 'http://whatever', showtimesURL: 'http://whatever'},
      ]
    }
  }

  render() {
    return (
      <div className="movie-box">
        <hr/>
        <h3>UK Opening This Week</h3>
        <MovieList data={ this.state.data }/>
        <p><a href='http://whatever'>See more opening this week >></a></p>
        <hr/>
        <h3><a href='http://whatever'>Get Showtimes >></a></h3>
        <hr/>
      </div>
    );
  }
}

export default MovieBox;
