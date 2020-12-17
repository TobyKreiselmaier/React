import React, {useState, useEffect} from 'react'
import Header from './components/Header/Header';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';
import axios from 'axios';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

const Div = styled.div`
    text-align: center;
    background-color:#61DBFB;
    color: rgb(15, 10, 10);
`;

var formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function App () {
  const [coinCount] = useState(20);
  const [balance, setBalance] = useState(0);//use State Hook
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const getTopIds = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    return response.data.slice(0, coinCount).map(coin => coin.id);
  }

  const getNewCoinData = async (ids) => {
    let data = [];
    const response = await axios.get('https://api.coinpaprika.com/v1/tickers');
    for (let i = 0; i < response.data.length; i++) {
      for (let j = 0; j < ids.length; j++) {
        if (ids[j] === response.data[i].id) {
          data.push({ 
            key: response.data[i].id,
            name: response.data[i].name,
            ticker: response.data[i].symbol,
            balance: 0,
            price: formatter.format(response.data[i].quotes.USD.price)
          });
        }
      }
    }
    return data;
  }

  const componentDidMount = async () => {
    const topIds = await getTopIds();
    const newCoinData = await getNewCoinData(topIds);
    setCoinData(newCoinData);
    var amount = (prompt("Please enter the size of your testportfolio in USD:", 1000000));
    if (amount === null) {
      //check for 'cancel' button
      return;
    } else {
      amount = parseFloat(amount);
    };
    if (isNaN(amount)) {
      //check if number was entered
      alert("Please enter a number!");
      componentDidMount();
    } else if (amount <= 0) {
      //check if negative number was entered
      alert("Please enter a positive number!");
      componentDidMount();
    } else{
      setBalance(amount);
    }
  }

  useEffect(() => {//Effect Hook - can not be async!
    if (coinData.length === 0) {//componentDidMount sitation
      componentDidMount();
    }
  });

  const handleAirDrop = () => {//doesn't fire
    setBalance(old => old + 1200);
  }

  const handleTransaction = (isBuy, valueChangeId) => {
    var balanceChange;
    var newCoinData = [];
    if(showBalance){//only allow operation when balances are shown.
      if(isBuy) {//buy operation
        balanceChange = prompt(`How many ` + valueChangeId + ` would you like to buy?`, 1);
        if (balanceChange === null) {
          return;
        } else if (balanceChange <= 0) {
          //throw if negative number
          alert("Please enter a positive number!");
          handleTransaction(true, valueChangeId);
        } else if (isNaN(balanceChange)) {
          //throw if no number
          alert("Please enter a number!");
          handleTransaction(true, valueChangeId);
        } else{
          //handle buy input
          balanceChange = parseFloat(balanceChange);
          newCoinData = coinData.map( function(values) {
            let newValues = {...values};
            if (valueChangeId === values.key) {
              //make sure it's the right coin
              if(newValues.balance + balanceChange >= 0) {
                //make sure no negative balance possible on coin
                if(balance - balanceChange * parseFloat((newValues.price).replace(/[$,]/g,'')) >= 0) {
                  //make sure no negative account balance possible
                  newValues.balance += balanceChange;
                  setBalance(old => old - balanceChange * parseFloat((newValues.price).replace(/[$,]/g,'')))
                }
              }
            }
            return newValues;
          });
        }
      } else if (!isBuy) {//sell operation
        balanceChange = prompt(`How many ` + valueChangeId + ` would you like to sell?`, 1);
        if (balanceChange === null) {
          //throw if 'cancel' button
          return;
        } else if (balanceChange <= 0) {
          //throw if negative number
          alert("Please enter a positive number!");
          handleTransaction(false, valueChangeId);
        } else if (isNaN(balanceChange)) {
          //throw if no number
          alert("Please enter a number!");
          handleTransaction(false, valueChangeId);
        } else {
          //handle sell input
          balanceChange = parseFloat(balanceChange);
          newCoinData = coinData.map( function(values) {
            let newValues = {...values};
            if (valueChangeId === values.key) {
              //make sure it's the right coin
              if(newValues.balance - balanceChange >= 0) {
                //make sure no negative balance possible on coin
                newValues.balance -= balanceChange;
                setBalance(old => old + balanceChange * parseFloat((newValues.price).replace(/[$,]/g,'')))
              } else {
                alert ('You can not sell what you do not own!');
              }
            }
            return newValues;
          });
        }
      }
      setCoinData(newCoinData);
    };
  }

  const handleBalanceDisplay = () => {
    setShowBalance(old => !old);
  }

  const handleRefresh = async (tickerId) => {
    const response = await axios.get(`https://api.coinpaprika.com/v1/tickers/${tickerId}`);
    const newPrice = formatter.format(response.data.quotes.USD.price);
    const newCoinData = coinData.map((values) => {
      let newValues = { ...values };
      if (tickerId === values.key) {
        newValues.price = newPrice;
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }

  return (
    <Div className="App">
      <Header/>
      <AccountBalance 
        amount={balance} 
        showBalance={showBalance} 
        handleAirDrop={handleAirDrop} 
        handleBalanceDisplay={handleBalanceDisplay}/>
      <CoinList 
        coinData={coinData} 
        showBalance={showBalance} 
        handleTransaction={handleTransaction} 
        handleRefresh={handleRefresh}/>
    </Div>
  );
}

export default App;