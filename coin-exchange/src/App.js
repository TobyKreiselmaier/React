import React from 'react'
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    background-color:#61DBFB;
    color: rgb(15, 10, 10);
`;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true, //added bool so condition can be passed on
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 18966
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32.0,
        price: 593
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1.0
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000,
        price: 0.62
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 239
      }
    ]
  }

  classProperty = 'value'

  handleBalanceDisplay = () => {
    this.setState({showBalance: !this.state.showBalance});//change bool
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map((values) => {
      let newValues = {...values};
      if (valueChangeTicker === values.ticker) {
        let randomPercentage = 0.95 + Math.random() * 0.1;
            newValues.price *= randomPercentage;
      }
      return newValues;
    });
    this.setState( {coinData: newCoinData} )//will trigger fresh rendering //balance remains untouched
  }

  render() {
    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance amount={this.state.balance} 
                        showBalance={this.state.showBalance} 
                        handleBalanceDisplay={this.handleBalanceDisplay}/>
        <CoinList coinData={this.state.coinData} 
                  showBalance={this.state.showBalance}
                  handleRefresh={this.handleRefresh}/>
      </Div>
    );
  }
}

 /*props are optional */
export default App;
