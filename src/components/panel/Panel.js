import React, { Component } from 'react';
import Question from '../Question';
import Answers from '../answer/Answers';
import './panel.css';
import ref from '../../data.js';

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateSession = this.handleUpdateSession.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  handleUpdateSession(value) {
    // Activer le bouton next    
    this.props.onAnswerGiven(value);
  }

  nextQuestion() {
    this.props.onNextQuestion();
  }


  render() {
    const data = this.props.data;    

    return (
      <div className='jumbotron'>
        <Question question={data.question} />
        <Answers
          answers={data.answers}
          updateSession={this.handleUpdateSession}>          
        </Answers>
        <div className='footer'>
          <p>{this.props.activeQuestion + 1}/{ref.length}</p> 
          <button
            className={'btn btn-lg btn-success'}
            disabled={this.props.activeQuestion + 1 === ref.length}
            onClick={this.nextQuestion}>></button>
        </div>
      </div>
    );
  }
}