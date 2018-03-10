import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import Panel from './components/panel/Panel';
import Select from './components/searchBar/select';
import Pyramide from './components/pyramide/Pyramide';

class App extends Component {
  constructor(props) {
    super(props);
    const sessionTmp= [];
    data.forEach((element, index) => {
      sessionTmp[index] = '-';
    });

    this.state = {
      indexSelected: 0,
      session: sessionTmp
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);    
    this.handleAnswerGiven = this.handleAnswerGiven.bind(this);    
  }

  handleSelectChange(indexSelected) {        
    this.setState({
      indexSelected: indexSelected ? indexSelected.value : null,      
    });    
  }  
  handleAnswerGiven(value) {    
    const sessionClone = this.state.session;
    sessionClone[this.state.indexSelected] = value;    
    this.setState({
      session: sessionClone
    })    
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">                    
          <Select options={data} onSelectChange={this.handleSelectChange} session={this.state.session}/>
        </header>
        <div className='app-container'>       
        {this.state.indexSelected ? 
          <Panel 
          data={data[this.state.indexSelected]} 
          session={this.state.session[this.state.indexSelected]}
          onAnswerGiven={this.handleAnswerGiven}></Panel>
          :
          <Pyramide profits={this.state.session}></Pyramide>
        }
        </div>
        
      </div>
    );
  }
}

export default App;
