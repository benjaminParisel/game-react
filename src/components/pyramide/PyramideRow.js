import React, { Component } from 'react';
import data from '../../data';
import './pyramide.css';

export default class PyramideRow extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    const sessionStatus = this.props.status;
    const palier = [4,8,12];
    
    const status = typeof(sessionStatus) !== "boolean" ? '-' :
        sessionStatus ? 
        <span style={{color: 'green'}}>O</span> : 
        <span style={{color: 'red'}}>X</span>;
    return (
      <tr className={(palier.includes(this.props.nbQuestion +1) ? 'palier': '') + (this.props.nbQuestion == this.props.active ? ' active': '')}>
        <td>{status}</td>
        <td>{data[this.props.nbQuestion].category}</td>
      </tr>
    );
  }
}