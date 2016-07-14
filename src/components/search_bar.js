import React, { Component } from 'react';
// import debounce from 'lodash.debounce';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { searchterm: '' };

    this.onInputChange = this.onInputChange.bind(this);

    // this.search = debounce(this.search, 300);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(this.state.searchterm);
  }

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} value={this.state.searchterm} />
      </div>
    );
  }
}

export default SearchBar;
