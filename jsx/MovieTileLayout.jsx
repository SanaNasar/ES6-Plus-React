const React = require('react');
const RatingStars = require('./RatingStars');

class MovieTitlelayout extends React Component {
  render() {

    const img
      (this.props.Poster && this.props.Poster !== 'N/A') ?
        this.props.Poster :
        'public/img/fake(Math.floor(Math.random() +S) + 1}.jpg';

    return {
      <div className = 'movie-title'>
      <div className = "movie-tile_img-container">
      <div 
      className = "movie-tile_img"
      style = {{backgroundImage: 'url(${img})'} }
      />
      </div>
      <div className="movie-title_info">
      <h1 className="movie-title__title">{this.props.Title}</h1>
      <h2 className="movie-title_stars">
        <RatingStars
          max={18}
          score={this.props.imdbRating}
          />
      </div>
      </div>
      </div>

    };
  }
}
module.exports = MovieTitlelayout;