import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 5rem 1.5rem 5rem;
`;

const Button = styled.button`
    font-size: 1.6rem;
    margin: 1.5rem 0 1.5rem 5rem;
    background-color: #282c34;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
`;

export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ? 
                           'Hide Balance' : 'Show Balance';
        let content = this.props.showBalance ? 
                      <>Account Balance: ${this.props.amount}</> : null;

        return (
            <Section>
                {content}
                <Button onClick={this.props.handleBalanceDisplay}>
                    {buttonText}
                </Button>
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: propTypes.number.isRequired
}