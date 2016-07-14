//  Rajiv Ramaiah, CS52, Summer '16
//  Sources: http://cs52.me/assignments/sa4/

import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { searchterm: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <div>
        <input placeholder="Search" onChange={this.onInputChange} value={this.state.searchterm} />
      </div>
    );
  }
}

export default SearchBar;
