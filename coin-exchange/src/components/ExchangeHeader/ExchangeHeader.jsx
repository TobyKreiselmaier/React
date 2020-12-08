import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components';

const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 36px;
    color: white;
`;

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`;

const H1 = styled.h1`
    font-size: 4rem;
`;

export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header>
                <Img src={logo} alt='React Logo'></Img>
                <H1>
                    Coin Exchange
                </H1>
            </Header>
        )
    }
}