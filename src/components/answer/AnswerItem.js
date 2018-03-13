import React, { Component } from 'react';
import './answer.css';

export default class AnswerItem extends Component {
  constructor(props) {
    super(props);
    this.eventHandler = this.eventHandler.bind(this, this.props.id);
    this.toogleSelected = this.toogleSelected.bind(this, this.props.id);
  }

  eventHandler(id, event) {
    this.props.getRightAnswer(id);
  }

  toogleSelected(id, event) {
    this.props.handleSelected(id);
  }

  render() {
    return (
      <div
        className={`col-lg-6 ${this.props.display}`}
        onClick={this.toogleSelected}
        onDoubleClick={this.eventHandler}>
        <h4>{this.props.answer.label}</h4>
      </div>
    );
  }
}