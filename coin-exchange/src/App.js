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
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <Coin name ='Bitcoin' ticker='BTC' price='$19000' />
        <Coin name ='Ether' ticker='ETH' price='$600' />
      </tbody>
    </table>

    </div>
  );
}

export default App;
