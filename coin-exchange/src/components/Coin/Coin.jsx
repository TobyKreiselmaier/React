import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Td = styled.td`
    border: 1px solid rgb(15, 10, 10);
    width: 25vh;
`;

const Button = styled.button`
    font-size: 1.0rem;
    margin: 0.5rem 0 0.5rem 0;
    background-color: #282c34;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
`;

export default class Coin extends Component {
    handleClick = (event) => {
      event.preventDefault();
      this.props.handleRefresh(this.props.ticker);
    }

    render() {
        const coinBalance = this.props.showBalance ?
                            <Td>{this.props.balance} {this.props.ticker}</Td> : null;

        return (
            <tr>
              <Td>{this.props.name}</Td>
              <Td>{this.props.ticker}</Td>
              <Td>${this.props.price}</Td>
              {coinBalance}
              <Td>
                <form action='#' method='POST'>
                  <Button onClick={this.handleClick}>Refresh
                  </Button>
                </form>
              </Td>
            </tr>
        );
      }
}

Coin.propTypes = {
  name: propTypes.string.isRequired,
  ticker: propTypes.string.isRequired,
  price: propTypes.number.isRequired
}