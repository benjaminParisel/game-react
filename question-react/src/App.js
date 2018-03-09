import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import Panel from './components/panel/Panel';
import SearchBar from './components/searchBar/SearchBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: 0      
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);    
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <SearchBar filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}/>
        </header>
        <Panel data={data[this.state.filterText]}></Panel>
      </div>
    );
  }
}

export default App;
