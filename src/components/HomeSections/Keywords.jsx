import React from 'react';
import styled, { keyframes } from 'styled-components';

const flash = keyframes`
  0% {
    color: #fae0c2;
    opacity: 0.1;
  }
  100% {
    color: #ffffff;
    opacity: 1;
  }
`;


const Container = styled.div`
    font-size: 26px;
    margin: 100px;
    padding: 20px 0;
    letter-spacing: .3vw;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    text-transform: uppercase;

    span {
        animation: ${flash} 3s linear infinite;

        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6){
            animation-delay: .1s;
        }
    }

    
`;


function Keywords() {
    return (
        <Container>
            <span> engineer </span>
            <span> / </span>
            <span> developer </span>
            <span> / </span>
            <span> researcher </span>
            <span> / </span>
            <span> informatics </span>
        </Container>
    );
}

export default Keywords;
