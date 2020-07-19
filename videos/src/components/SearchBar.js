import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChage = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              value={this.state.term}
              type="text"
              name=""
              id=""
              onChange={this.onInputChage}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
