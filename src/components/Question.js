import React, { Component } from 'react';

export default class question extends Component {
  render() {
    const question = this.props.question;
    return (
      <div className="lead">
        <p>{question}</p>       
      </div>
    );
  }
}