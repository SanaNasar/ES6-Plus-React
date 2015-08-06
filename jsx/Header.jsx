const React = require('react');

class Header extends React.Component {
  handleLayoutEvent(e) {
    this.props.changeLayout(e.target.value);
  }
    render() {
      let searchBox;
      if(this.props.queryTerm)
        searchBox = {
          <h1 className="app-header__term">
          (this.props.queryTerm) <a onClick>
        }

        return (
        <header className= "app-header">
          <div className= "app-header__inner">
            <h1 className= "app-header__title">Forwardflix</h1>
            <select onChange={this.handleLayoutEvent.bund(this)}
              value={this.props.layout} className = "app-header__display-select">
                <option value="title">Title</option>
                <option value="list">List</option>
            </select>
      
          <form onSubmit={this.handleTermSubmit.bind(this)}>
            <input  onChange={this.handleTermEvent.bind(this)}
              value = {this.props.layout} className="app-header__display-select">
              <option value="title"> Title</option>
          </form>
          </div>
            <select>
        </header>
      );
    }
  }

