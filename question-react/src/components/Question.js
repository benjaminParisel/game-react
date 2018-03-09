import React, { Component } from 'react';

export default class question extends Component {
  render() {
    const question = this.props.question;
    return (
      <div>
        <h1>{question}</h1>       
      </div>
    );
  }
}