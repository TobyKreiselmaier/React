import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class AccountBalance extends Component {
    render() {
        return (
            <>
                ${this.props.amount}
            </>
        );
    }
}

AccountBalance.propTypes = {
    amount: propTypes.number.isRequired
}