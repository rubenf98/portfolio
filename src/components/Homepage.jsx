import React from 'react';
import styled from 'styled-components';
import { dimensions } from '../helper';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;

    @media (max-width: ${dimensions.md}) {
        justify-content: flex-start;
    }

    h1 {
        color: #ffffff;
        line-height: 0.86;
        font-size: 124px;
        letter-spacing: -9.92px;
        padding-left: 10px;

        @media (max-width: ${dimensions.md}) {
            position: absolute;
            bottom: -100px;
            left: 0;
            font-size: 60px;
            left: 50%;
            transform: translate(-50%, 0);
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 0.85;
            letter-spacing: -4.8px;
            z-index: 5;
        }
    }

    
`;


const Logo = styled.img`
    width: 200px;
    top: 60px;
    position: absolute;
    
`;


const ImageHeaderContainer = styled.div`
    z-index: 3;
    position: relative;
    padding-top: 30px;
    display: flex;

    @media (max-width: ${dimensions.sm}) {
        width: 80%;
    }

    .background {
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        width: 70%;
        height: 100%;
        background-color: #e4c180;
    }

    img {
        width: 600px;

        @media (max-width: ${dimensions.lg}) {
            width: 500px;
        }

        @media (max-width: ${dimensions.sm}) {
            width: 100%;
        }
    }
    
`;

const SocialContainer = styled.div`
    transform: rotate(270deg);
    display: block;
    white-space: nowrap; 
    position: absolute;
    left: -80px;
    font-size: 22px;
    font-weight: 500;
    z-index: 999;
    

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    a {
        opacity: 0.4;
        margin: 0px 40px;
        text-decoration: none;
        color: ${props => props.color};
        transition: opacity .3s linear;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 300;

        font-stretch: normal;

        font-style: normal;

        line-height: 2.75;

        letter-spacing: -0.92px;

        &:hover {
            opacity:1;
        }
    }
`;

function Homepage() {

    return (
        <div>
            <Container>
                <SocialContainer color="white">
                    <a rel="noreferrer noopener" target="_blank" href="https://github.com/rubenf98">github</a>
                    <a rel="noreferrer noopener" target="_blank" href="https://scholar.google.com/citations?user=1xnrzDMAAAAJ">scholar</a>
                    <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/jrubenf98/">instagram</a>
                </SocialContainer>
                <Logo src="/image/logo.svg" alt="logo" />
                <ImageContainer>
                    <ImageHeaderContainer>
                        <img src="/image/header.png" alt="" />
                        <div className='background' />

                    </ImageHeaderContainer>

                    <h1>soon, <br /> rúben <br /> freitas</h1>

                </ImageContainer>
            </Container>
            {/* 
            <Keywords />
            <About />
            <Projects />

            <Publications />
            <Contact /> */}
        </div>
    );
}

export default Homepage;
