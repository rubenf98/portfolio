import React from 'react';
import styled, { keyframes } from 'styled-components';

const flash = keyframes`
  0% {
    
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;


const Container = styled.div`
 max-width: 3000px;
    font-size: 26px;
    margin: 100px;
    padding: 150px 0 20px 0;
    margin: auto;
    letter-spacing: .3vw;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    text-transform: uppercase;
    color: #e4c180;
    span {
        animation: ${flash} 3s linear infinite;

        &:nth-child(3),
        &:nth-child(4){
            animation-delay: .1s;
        }
    }

    
`;


function Keywords() {
  return (
    <Container>
      <span> &lt; </span>
      <span> engineer </span>
      <span> developer </span>
      <span> researcher </span>
      <span> informatics </span>
      <span> 	/&gt; </span>
    </Container>
  );
}

export default Keywords;
