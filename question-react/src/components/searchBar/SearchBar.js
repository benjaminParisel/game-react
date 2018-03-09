import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);   
  }

  handleFilterTextChange(e) {    
    this.props.onFilterTextChange(e.target.value - 1);
  }  

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="N°Question dispo (1 ou 2)"
          value={this.props.index}
          onChange={this.handleFilterTextChange}
        />        
      </form>
    );
  }
}