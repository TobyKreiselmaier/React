import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 3rem;
`;

const Button = styled.button`
    margin: 0 8px;
    border: 1px solid #fff;
    border-radius: 5px;
`;

const Balance = styled.div`
    min-width: 250px;
    margin 0.5rem 0 0 2.5rem;
    font-size: 1.5rem;
    vertical-align: middle;
    text-align: left;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function AccountBalance (props) {
    let content = '\u00a0';//placeholder so page doesn't jump
    if (props.showBalance) {
        content = <>Account Balance: {formatter.format(props.amount)}</>
    }
    const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info')
    return (
        <>
            <Balance>{content}</Balance>
            <Section>
                <Button 
                    onClick={props.handleBalanceDisplay} 
                    className={buttonClass}>
                    {props.showBalance ? 'Hide Balances' : 'Show Balances'}
                </Button>
                <Button 
                    onClick={props.handleAirDrop}
                    className='btn btn-success'>
                    <i className="fas fa-helicopter"></i>
                </Button>
            </Section>
        </>
    );
}

AccountBalance.propTypes = {
    amount: propTypes.number.isRequired
}