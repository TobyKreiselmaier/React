import React, { Component } from 'react' //typed rcc
import './Coin.css'; //create-react-app allows to do this.

export default class Coin extends Component {
    render() {
        return ( 
            <tr className='coin-row'>
              <td>{this.props.name}</td>
              <td>{this.props.ticker}</td>
              <td>{this.props.price}</td>
            </tr>
        );
      }
}
