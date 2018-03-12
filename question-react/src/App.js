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
    const sessionTmp = [];
    data.forEach((element, index) => {
      sessionTmp[index] = '-';
    });

    this.state = {
      indexSelected: '-',
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
      <div className="container">
        <header className="header clearfix">
          <nav>
            <ul className="nav nav-pills pull-right">
              <li id="call"><a className="btn btn-lg btn-default" href="#"
                role="button">Appel à un ami</a></li>
              <li id="fifty"><a className="btn btn-lg btn-default" href="#"
                role="button">50/50</a></li>
              <li id="fifty"><a className="btn btn-lg btn-default" href="#"
                role="button">Public</a></li>
            </ul>
            <Select options={data} onSelectChange={this.handleSelectChange} session={this.state.session} />
          </nav>
        </header>
        <div className='container'>          
          {Number.isInteger(this.state.indexSelected) ?
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
