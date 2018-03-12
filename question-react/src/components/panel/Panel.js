import React, { Component } from 'react';
import Question from '../Question';
import Answers from '../answer/Answers';

export default class Panel extends Component {
  constructor(props){
    super(props);
    this.handleUpdateSession = this.handleUpdateSession.bind(this);
  }

  handleUpdateSession(session){        
    this.props.onAnswerGiven(session);
  }
  render() {    
    const data = this.props.data;

    return (
      <div className='jumbotron'>
          <Question question={data.question}/>
          <Answers 
          answers={data.answers} 
          session={this.props.session}        
          updateSession={this.handleUpdateSession}>
        </Answers>        
      </div>
    );
  }
}