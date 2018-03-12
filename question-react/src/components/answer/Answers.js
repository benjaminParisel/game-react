import React, { Component } from 'react';
import AnswerItem from './AnswerItem';
import './answer.css';

export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = { display: ['', '', '', ''] };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleVerifyAnswer = this.handleVerifyAnswer.bind(this);

    this.handleChooseAnswer = this.handleChooseAnswer.bind(this);
  }

  handleChooseAnswer(status) {
    this.setState({
      session: status,
    });

    this.props.updateSession(status);
  }

  handleAnswerSelected(index) {
    const value = ['', '', '', ''];
    value[index] = 'selected';
    this.setState({ display: value });
  }

  handleVerifyAnswer(index) {
    const value = this.state.display;
    if (this.props.answers[index].isTrue) {
      value[index] = 'success';
    } else {          
      // this.props.answers.filter(answer => answer.isTrue).forEach((element, i) => {
      //   console.log(i, element);
      //   value[i] = 'success';
      // });
      value[index] = 'error';

    }


    this.setState({ display: value });


    //if()
    console.log('verify', index);
  }

  render() {
    const answers = [];
    this.props.answers.forEach((answer, index) => {
      answers.push(
        <AnswerItem
          answer={answer}
          key={index}
          id={index}
          session={this.props.session}
          display={this.state.display[index]}
          handleSelected={this.handleAnswerSelected}
          status={this.state.status}
          getRightAnswer={this.handleVerifyAnswer}
          onChooseAnswer={this.handleChooseAnswer}></AnswerItem>
      );
    });
    return (
      <div className="row answers">
        {answers}
      </div>
    );
  }
}