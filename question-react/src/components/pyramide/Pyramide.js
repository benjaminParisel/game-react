import React, { Component } from 'react';
import PyramideRow from './PyramideRow';

export default class Pyramide extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const rows = [];    
    this.props.profits.forEach((profit, index) => {      
      rows.push(
        <PyramideRow
          status={profit}
          nbQuestion={index}
          key={index}
        />
      );
    });
    return (
      <div className='jumbotron'>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}