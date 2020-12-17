import React from 'react'
import logo from './logo.png'
import styled from 'styled-components';

const Header = styled.header`
    background-color: #282c34;
    min-height: 30vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 36px;
    color: white;
`;

const Img = styled.img`
    height: 6rem;
    pointer-events: none;
`;

const H1 = styled.h1`
    font-size: 4rem;
    line-height: 8rem;
    margin: 0 2.5rem 0 2.5rem;
`;

export default function ExchangeHeader () {
    return (
        <Header>
            <Img src={logo} alt='Bitcoin Logo'></Img>
            <H1>
                Crypto Portfolio Simulator
            </H1>
        </Header>
    )
}
