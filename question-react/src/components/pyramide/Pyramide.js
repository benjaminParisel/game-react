import React, { Component } from 'react';
import PyramideRow from './PyramideRow';

export default class Pyramide extends Component {
  constructor(props){
    super(props);
    
  }  

  render() {
    const rows= [];
    console.log(this.props.profits);
    this.props.profits.forEach((profit, index) => {
      console.log(profit);
        rows.push(
            <PyramideRow
          status={profit}
          nbQuestion={index}
          key={index}
        />
      );
    });
    return (
        <table>
        <thead>
        <tr>
          <th>Level</th>
          <th>Completed</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}