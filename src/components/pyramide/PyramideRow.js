import React, { Component } from 'react';

export default class PyramideRow extends Component {
  render() {
    const sessionStatus = this.props.status;    
    
    const status = typeof(sessionStatus) !== "boolean" ? '-' :
        sessionStatus ? 
        <span style={{color: 'green'}}>O</span> : 
        <span style={{color: 'red'}}>X</span>;      

    return (
      <tr>
        <td>{ this.props.nbQuestion}</td>
        <td>{status}</td>
      </tr>
    );
  }
}