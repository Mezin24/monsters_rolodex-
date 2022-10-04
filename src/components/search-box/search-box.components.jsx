import React, { Component } from 'react';

export class SearchBox extends Component {
  render() {
    const { filter, onSearchChange, className, placeholder } = this.props;
    return (
      <input
        type='search'
        className={className}
        placeholder={placeholder}
        value={filter}
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchBox;
