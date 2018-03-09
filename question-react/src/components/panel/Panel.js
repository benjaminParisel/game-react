import React, { Component } from 'react';
import Question from '../Question';
import Answers from '../answer/Answers';

export default class Panel extends Component {
  render() {
    const data = this.props.data;

    return (
      <div>
        <Question question={data.question}/>
        <Answers answers={data.answers}></Answers>
      </div>
    );
  }
}