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
const teste = keyframes`
  0% {
    top: 0;
  }

  50% {
    top: 40px;
  }

  100% {
    top: 80px;
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

const Teste = styled.div`
    font-size: 2vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e4bb68;
    position: relative;

    .string {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .greeting {
        position: sticky;
        left: 0;
        top: 0;
        animation: ${teste} 5s infinite;
    }

    .closure::after {
        content: '';
        position: absolute;
        height: 36vmin;
        width: 40vmin;
        /* background: #16181C; */
        transform: translate(-40vmin, -37.5vmin);
    }

    .closure::before {
        content: '';
        position: absolute;
        height: 25vmin;
        width: 40vmin;
        /* background: #16181C; */
        transform: translate(-40vmin, 5vmin);
    }

    .en {
    color: #fa8231;
    }

    .es {
    color: white;
    }

    .de {
    color: #c678dd;
    }

    .it {
    color: #a9b0bd;
    }

`;


function Keywords() {
    return (
        // <Container>
        //     <span> &lt; </span>
        //     <span> engineer </span>
        //     <span> developer </span>
        //     <span> researcher </span>
        //     <span> informatics </span>
        //     <span> 	/&gt; </span>
        // </Container>
        <Teste>
            <h1>console<span style={{ color: "white" }}>.</span><span style={{ color: "#e06c75" }}>log</span>(" </h1>

            <h1 className="greeting en">Hello World!</h1>
            <h1 className="greeting es">¡Hola Mundo!</h1>
            <h1 className="greeting de">Hallo Welt!</h1>
            <h1 className="greeting it">Ciao Mondo!</h1>

            <h1 className="closure">");</h1>
        </Teste>
    );
}

export default Keywords;
