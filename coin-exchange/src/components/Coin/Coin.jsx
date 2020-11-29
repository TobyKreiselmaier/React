/* eslint-disable no-useless-constructor */
import React, { Component } from 'react' //typed rcc
import './Coin.css'; //create-react-app allows to do this.
import propTypes from 'prop-types'; //allows checking of props' types

export default class Coin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        price: this.props.price
      }
      this.handleClick = this.handleClick.bind(this)//important to set for each event
    }
/* THIS WOULD BE THE AUTOMATED CHANGING OF PRICES
    componentDidMount() {
      let callback = () => {
        //set state to new random value
        let randomPercentage = 0.995 + Math.random() * 0.01;
        //don't do this; only allowed constructor:
        //this.state.price = this.state.price * randomPercentage;
        //instead do for functions:
        this.setState( (oldState) => {
          return {
            price: oldState.price * randomPercentage
          };
        });

        //or this for values, but could be issue with concurrence:
        //this.setState({price: this.state.price * randomPercentage});

      }
      setInterval(callback, 1000);
    }
*/

handleClick(event) {
  // Prevent the default action of submitting this form
  event.preventDefault();

  let randomPercentage = 0.995 + Math.random() * 0.01;
  this.setState( (oldState) => {
    return {
      price: oldState.price * randomPercentage
    };
  });

}
    render() {
        return (
            <tr className='coinrow'>
              <td>{this.props.name}</td>
              <td>{this.props.ticker}</td>
              <td>${this.state.price}</td>
              <td>
                <form action='#' method='POST'>
                  <button onClick={this.handleClick}>Refresh
                  </button>
                </form>
              </td>
            </tr>
        );
      }
}

Coin.propTypes = {
  name: propTypes.string.isRequired,
  ticker: propTypes.string.isRequired,
  price: propTypes.number.isRequired
}