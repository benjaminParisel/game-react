import React, { Component } from 'react';
import AnswerItem from './AnswerItem';
import './answer.css';

export default class Answers extends Component {
  render() {
    const answers= [];
    this.props.answers.forEach((answer, index) => {
      answers.push(
      <AnswerItem answer={answer} key={index}></AnswerItem>
      );
    });
    return (
      <div className="answersContainer">
        {answers}        
      </div>
    );
  }
}