import React, { Component } from 'react' //typed rcc
import './Coin.css'; //create-react-app allows to do this.
import propTypes from 'prop-types'; //allows checking of props' types

export default class Coin extends Component {
    render() {
        return ( 
            <tr className='coinrow'>
              <td>{this.props.name}</td>
              <td>{this.props.ticker}</td>
              <td>${this.props.price}</td>
            </tr>
        );
      }
}

Coin.propTypes = {
  name: propTypes.string.isRequired,
  ticker: propTypes.string.isRequired,
  price: propTypes.number.isRequired
}