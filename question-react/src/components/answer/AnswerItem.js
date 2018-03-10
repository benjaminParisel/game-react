import React, { Component } from 'react';
import styles from './answer.css';

export default class AnswerItem extends Component {
  constructor(props) {
    super(props);    
    this.state = { class: 'answer'};
    this.eventHandler = this.eventHandler.bind(this);    
    this.preselectChoose = this.preselectChoose.bind(this);    
  }

  eventHandler(event) {        
      if (this.props.answer.isTrue) {        
        this.setState({
          answerSession : true, class: ' success'
        });        
      } else {        
        this.setState({
          answerSession : false, class: 'error'
        });            
      }
      this.props.onChooseAnswer(this.state.answerSession);
  }  

  preselectChoose(event){
    this.setState({
      class: 'selected'
    });
  }

  render() {    
    return (
      <div className={`answer ${this.state.class}`} onClick={this.preselectChoose} onDoubleClick={this.eventHandler}>
        <span className='label'>{ this.props.answer.label}</span>
      </div>
    );
  }
}