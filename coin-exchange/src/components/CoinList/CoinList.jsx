import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: auto;
    display: inline-block;
    font-size: 1.4 rem
`;

export default class CoinList extends Component {
    render() {
        const coinBalance = this.props.showBalance ?
                            <th>Balance</th> : null;
        return (
            <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                {coinBalance}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.coinData.map(({key, name, ticker, price, balance}) =>
                  <Coin key={key} 
                        handleRefresh={this.props.handleRefresh} 
                        name={name} 
                        ticker={ticker} 
                        showBalance={this.props.showBalance}
                        balance={balance}
                        price={price}
                        tickerId={key}/>
                )
              }
            </tbody>
          </Table>
        )
    }
}