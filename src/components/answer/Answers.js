import React, { Component } from 'react';
import AnswerItem from './AnswerItem';
import './answer.css';

export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = { display: this.defaultDisplay()};
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleVerifyAnswer = this.handleVerifyAnswer.bind(this);

  }

  defaultDisplay() {
    //return ['', 'hideWrong', '', ''];
      return ['', '', '', ''];
  }

  handleAnswerSelected(index) {
    const value = this.defaultDisplay();
    value[index] = 'selected';
    this.setState({ display: value });
  }

  handleVerifyAnswer(index) {    
    const value = this.state.display;
    let boolean = false;
    if (this.props.answers[index].isTrue) {
      boolean = true;
      // Bonne réponse
      value[index] = 'success';
    } else {
      // Mauvaise réponse                
      const trustly = this.props.answers.findIndex(element => element.isTrue);
      value[trustly] = 'success';
      value[index] = 'error';
    }

    this.setState({ display: value });
    this.props.updateSession(boolean);
  }

  componentWillReceiveProps(nextProps) {
      if(nextProps.answers !== this.props.answers) {
        this.setState({display: this.defaultDisplay()});
      }

  }

  render() {
    const answers = [];
    this.props.answers.forEach((answer, index) => {
      answers.push(
        <AnswerItem
          key={index}
          id={index}
          answer={answer}
          display={this.state.display[index]}
          handleSelected={this.handleAnswerSelected}
          getRightAnswer={this.handleVerifyAnswer}
          session={this.props.session}>
        </AnswerItem>
      );      
    });
    return (
      <div className="row answers">
        {answers}
      </div>
    );
  }
}