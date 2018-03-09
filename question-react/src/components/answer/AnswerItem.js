import React, { Component } from 'react';
import styles from './answer.css';

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true, class: 'answer' };
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(event) {   
    
    if (this.state.toggle) {
      if (this.props.answer.isTrue) {
        this.state.class += ' success';
      } else {
        this.state.class += ' error';
      }
    }

    this.setState((prevState) => ({
      toggle: !prevState.toggle
    })
    );
  }

  render() {
    const index = this.props.index;   
    const label = this.props.answer.label;

    return (
      <div className={this.state.class} onDoubleClick={this.eventHandler}>
        <span className='label'>{label}</span>
      </div>
    );
  }
}