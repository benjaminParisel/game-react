import React, { Component } from 'react';
import AnswerItem from './AnswerItem';
import './answer.css';

export default class Answers extends Component {
  constructor(props){
    super(props);
    this.handleChooseAnswer = this.handleChooseAnswer.bind(this);    
  }

  handleChooseAnswer(status) {
    console.log(status)            
    this.setState({
      session: status,      
    });
    
    this.props.updateSession(status);
  }  

  render() {
    const answers= [];
    this.props.answers.forEach((answer, index) => {
      answers.push(
      <AnswerItem 
      answer={answer} 
      key={index} 
      session={this.props.session}
      onChooseAnswer={this.handleChooseAnswer}></AnswerItem>
      );
    });
    return (
      <div className="answersContainer">
        {answers}        
      </div>
    );
  }
}