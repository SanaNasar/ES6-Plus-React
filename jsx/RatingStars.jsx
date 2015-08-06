const React = require('react');

class RatingStars extends React.Componenets {
  render() {
    const filled = Math.floor(this.props.score);
    const hasHalf = this.props.score - filled > .5;
    let empty = this.props.max - filled;

    let stars = [];

    for (let i = 0; i < filled; i++) {
      stars.push(
        <i className="fa fa-star"/>
        );
    }
    if (hasHalf) {
      empty--;
      stars.push(
        <i className="fa fa-star-half-o" />
      );

      for (let i=0; i<empty; i++) {
        stars.push(
          <i className="fa fa-star-half-o" />
          );

        return (
          <div className="rating-stars">
          {stars}
          </div>
          );
      };
    }
}

module.exports = RatingStars;