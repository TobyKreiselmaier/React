import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Td = styled.td`
    border: 1px solid rgb(15, 10, 10);
    width: 12vw;
    height: 5vh;
`;

const TdControls = styled(Td)`
    width: 20vw;
`;

const TdName = styled(Td)`
    width: 24vw;
`;

const Button = styled.button`
    font-size: 1.0rem;
    margin: 0.1rem 0.2rem 0.1rem 0.2rem;
    border: 1px solid #fff;
    border-radius: 5px;
`;

export default function Coin (props) {
  const handleRefresh = (event) => {
    event.preventDefault();
    props.handleRefresh(props.tickerId);
  }

  const handleBuy = (event) => {
    event.preventDefault();
    props.handleTransaction(true, props.tickerId);
  }

  const handleSell = (event) => {
    event.preventDefault();
    props.handleTransaction(false, props.tickerId);
  }
  
  return (
    <tr>
      <TdName>{props.name}</TdName>
      <Td>{props.ticker}</Td>
      <Td>{props.price}</Td>
      <Td>{props.showBalance ? props.balance:'-'}</Td>
      <TdControls>
        <form action='#' method='POST'>
        <Button className='btn btn-warning' onClick={handleRefresh}>
            Refresh Price
        </Button>
        <Button className='btn btn-success' onClick={handleBuy}>
            Buy
        </Button>
        <Button className='btn btn-danger' onClick={handleSell}>
            Sell
        </Button>
        </form>
      </TdControls>
    </tr>
  );
}

Coin.propTypes = {
  name: propTypes.string.isRequired,
  ticker: propTypes.string.isRequired,
}