import React, { Component } from 'react';
import styles from './answer.css';

export default class AnswerItem extends Component {
  constructor(props) {
    super(props);    
    this.state = { class: 'answer'};
    this.eventHandler = this.eventHandler.bind(this, this.props.id);    
    this.toogleSelected = this.toogleSelected.bind(this,this.props.id);    
  }

  eventHandler(id, event) {            
      this.props.getRightAnswer(id);    
  }  

  toogleSelected(id, event){         
    this.props.handleSelected(id);
  }  

  render() {    
    return (      
      <div className={`col-lg-6 answer ${this.props.display}`} onClick={this.toogleSelected} onDoubleClick={this.eventHandler}>
        <h4>{ this.props.answer.label}</h4>
        <h4>aza { this.props.isSelected}</h4>
      </div>
    );
  }
}