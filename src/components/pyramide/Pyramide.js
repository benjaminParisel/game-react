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
          active ={this.props.activeQuestion}
          status={profit}
          nbQuestion={index}
          key={index}
        />
      );
    });
    return (
      <div>
        <h3>Pyramide des gains</h3>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}