// React using ES6 way
const React = require('react');
const omdb = require('omdb-client');
// var omdb = require('./fake-omdb-client');
const MovieContainer = require('./MovieContainer');
const MovieTileLayout = require('./MovieTileLayout');
const MovieListLayout = require('./MovieListLayout');
const preload = require('./netflix');
const Header = require('./Header');
const _ = require('lodash');
// const MovieContainer = require('./MovieListLayout');
// const MovieTileLayout = require('./MovieTileLayout');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      layout: 'tile',
      results: _.clone(preload.Search, true),
      queryTerm: ""
    };
  }

  changeLayout(layout) {
    this.setState({layout});
  }
  
  //clearTerm method
   clearTerm() {
    this.setState({queryTerm:"", results: _.clone(preload.Search, 
      true)});
  }

  //search method
  search(term) {
    this.setState({queryTerm:term});
    omdb.search({query:term}, (err, data) => {
      this.setState({results: data.Search});
    });
  }



  render() {
    let layout;
    if (this.state.layout === 'tile') {
      layout = MovieTileLayout;
    }
    else {
      layout = MovieListLayout;
    }

    return (
      <div className="app-container">
        <Header 
          changeLayout={this.changeLayout.bind(this)}
          layout={this.state.layout}
          queryTerm={this.state.term}
          search={this.search.bind(this)}
          clearTerm={this.clearTerm.bind(this)}
        />
        <div className="movies-list">
          {this.state.results.map((el) => {
            return (
              <MovieContainer
                id={el.imdbID}
                key={el.imdbID}
                layout={layout}
              />
            );
          })}
        </div>
      </div>
    );
  }

}

module.exports = App;

// ES5 way
// React.createClass({
//   render: function() {
//     return {
//       <h1> lol nailed it! </h1>
//     }
//   }
// })
 // module.exports = App;