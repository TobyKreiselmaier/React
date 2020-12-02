import React from 'react'
import logo from './logo.svg'
import './App.css';//style app here
import Coin from './components/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='React Logo' className='App-logo'></img>
        <h1 className='App-title'>
          Coin Exchange
        </h1>
      </header>
      <table className='cointable'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <Coin name ='Bitcoin' ticker='BTC' price={18966} />
        <Coin name ='Ethereum' ticker='ETH' price={593} />
        <Coin name ='Tether' ticker='USDT'  price={1.0}/>
        <Coin name ='Ripple' ticker='XRP' price={0.62} />
      </tbody>
    </table>

    </div>
  );
}
 /*props are optional */
export default App;
