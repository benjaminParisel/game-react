import React, { Component } from 'react';
import './question.css';

export default class question extends Component {
  render() {
    const question = this.props.question;
    const theme = this.props.theme;
    return (
      <div className="lead">
          <div className="category">{theme}</div>
        <p>{question}</p>       
      </div>
    );
  }
}