import React from 'react'
import styled, { withTheme } from 'styled-components';
import { dimensions, middleWidth } from '../../helper';


const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${dimensions.md}) {
        min-height: 0px;
        padding: 150px 0px 0px 0px;
        box-sizing: border-box;
        .last {
            display: none;
        }
    }
`;

const InfoContainer = styled.div`
    width: 80%;
    max-width: ${middleWidth};
    margin: auto;
    padding: 0px 20px;
    box-sizing: border-box;
    z-index: 8;

    h3 {
        color: ${props => props.primary};
        margin: 0px;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 3px;
        background-color: ${({ theme }) => theme.background};

        
    }

    h2 {
        font-size: clamp(30px, 3vw, 70px);
        color: inherit;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.96;
        margin: 27px 0px;
        background-color: ${({ theme }) => theme.background};

    }

    p {
        font-size: clamp(16px, 2vw, 20px);
        font-weight: normal;
        line-height: 2.23;
        width: 90%;
        background-color: ${({ theme }) => theme.background};


        img {
            width: 30px;
            rotate: 30deg;
            margin-right: 5px;
        }
    }

    @media (max-width: ${dimensions.md}) {
        p {
            width: 100%;
        }
    }
`;

const Highlight = styled.div`
    width: ${props => props.width};
    height: 600px;
    background-color: ${props => props.background};

    @media (max-width: ${dimensions.md}) {
        height:400px
    }
`;

function About({ theme, text }) {
    return (
        <Container>
            <Highlight className='first' width="10px" background={theme.primary} />
            <InfoContainer primary={theme.primary}>
                <h3>
                    {text.title}

                </h3>
                <h2>{text.subtitle}</h2>
                <p>
                    {text.description}
                </p>
            </InfoContainer>
            <Highlight className='last' width="100px" background={theme.primary} />
        </Container>
    )
}

export default withTheme(About)