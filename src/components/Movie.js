import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="Movie">
        <a href={this.props.detailsURL}>{this.props.title}</a> <a href={this.props.showtimesURL}>Showtimes</a>
      </div>
    );
  }
}

export default Movie;
