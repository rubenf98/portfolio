import React from 'react'
import styled from 'styled-components';
import { dimensions } from '../../helper';

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: block;
    padding: 50px;
    color: white;

    h5 {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 26px;
        line-height: 1.2;
        font-weight: 500;
    }

    h1 {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 120px;
        line-height: 1.2;
        font-weight: bold;

        @media (max-width: ${dimensions.md}){
            font-size: 80px;
        }

        @media (max-width: ${dimensions.sm}){
            font-size: 60px;
        }
    }
`;

const EmailContainer = styled.div`
    width: 100%;
    position: relative;
`;

const Overlay = styled.div`
    width: 250px;
    height: 250px;
    border: 2px solid #777;
    border-radius: 250px;
    position: absolute;
    left: 0;
    top: -50px;

    @media (max-width: ${dimensions.md}){
            width: 120px;
            height: 120px;
            top: -20px;
    }

    @media (max-width: ${dimensions.sm}){
            height: 80px;
            width: 80px;
            top: -15px;
        }
`;


const Email = styled.div`
    display: flex;
    margin-top: 100px;

    img {
        width: 200px;
        z-index: 1;
        margin: 0px 60px;
        box-sizing: border-box

        @media (max-width: ${dimensions.lg}){
            width: 100px;
        }


        @media (max-width: ${dimensions.md}){
            width: 60px;
            margin: 0px 20px;
        }

        @media (max-width: ${dimensions.sm}){
            width: 60px;
            margin: 0px 20px;
        }
    }

    h3 {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 80px;
        line-height: 1.2;
        color: #e4c180;

        @media (max-width: ${dimensions.lg}){
            font-size: 50px;
        }

        @media (max-width: ${dimensions.md}){
            font-size: 30px;
        }

        @media (max-width: ${dimensions.sm}){
            font-size: 20px;
        }
    }
`;

function Contact() {
    return (
        <Container>
            <h5>Ruben Freitas</h5>
            <h1>Let's Work</h1>
            <h1>Together.</h1>
            <EmailContainer>
                <Overlay />
                <Email>
                    <img src="/icons/right-arrow.svg" alt="arrow-indicator" />
                    <h3>info@rubenfreitas.com</h3>
                </Email>

            </EmailContainer>
        </Container>
    )
}

export default Contact