import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';

import './select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

export default class Select extends Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(selectValue){
    this.setState({
      selectValue: selectValue,      
    });
    this.props.onSelectChange(selectValue);
  }
  render() {
    const categories = this.props.options;
    const options = [];

    categories.forEach((element,index) => {
      options.push({'value': index, 'label': element.category});
    });        
    
    return (
      <VirtualizedSelect      
        options={options}        
        onChange={this.handleSelectChange}
        value={this.state.selectValue}        
      />
    );
  }
} 