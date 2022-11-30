import React from 'react'
import { dimensions } from '../../helper';
import styled, { withTheme, keyframes } from 'styled-components';
import { text } from "../../assets/homepage";

import AnimationContainer from "../AnimationContainer";

const scroll = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100vw, 0, 0);
  }
`;

const Container = styled.div`
    min-height: 70vh;
    margin-top: 300px;

    overflow-x: hidden;
`;

const Title = styled.h2`
    font-size: 62px;
    color: inherit;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    line-height: 0.96;
    letter-spacing: -5.6px;
    margin: 27px 0px;
    width: 60%;
    margin: auto;
    margin-bottom: 150px;
`;

const MovingWordContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    color: ${props => props.color};
`;

const MovingWord = styled.div`
    transform: translate(0px);
    filter: none;
    opacity: 1;
    visibility: inherit;
    font-size: 140px;
    line-height: 0.9;
    letter-spacing: 0.064em;
    text-transform: uppercase;
    color: inherit;
    text-shadow: ${props =>
        "-1px -1px 0 " + props.stroke +
        ",0   -1px 0 " + props.stroke +
        ",1px -1px 0 " + props.stroke +
        ",1px  0   0 " + props.stroke +
        ",1px  1px 0 " + props.stroke +
        ",0    1px 0 " + props.stroke +
        ",-1px  1px 0 " + props.stroke +
        ",-1px  0   0 " + props.stroke
    };
    font-weight: 700;
    width: 60%;
    margin: 150px 0px;
    margin-left: ${props => props.left ? "auto" : "0px"};
    font-family: 'Poppins', sans-serif;

    @media (max-width: ${dimensions.md}) {
        font-size: 40px;
    }
`;


function Sentence({ theme }) {
    return (
        <Container >
            <Title>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel modi, sapiente quas illum architecto."</Title>
            <MovingWordContainer color={theme.background}>
                <AnimationContainer animateIn="fadeInLeftBig">
                    <MovingWord stroke={theme.text}>{text[localStorage.getItem("language")].sentence[0]}</MovingWord>
                </AnimationContainer>
                <AnimationContainer animateIn="fadeInRightBig">
                    <MovingWord left stroke={theme.text}>{text[localStorage.getItem("language")].sentence[1]}</MovingWord>
                </AnimationContainer>
                <AnimationContainer animateIn="fadeInLeftBig">
                    <MovingWord stroke={theme.text}>{text[localStorage.getItem("language")].sentence[2]}</MovingWord>
                </AnimationContainer>
                <AnimationContainer animateIn="fadeInRightBig">
                    <MovingWord left stroke={theme.text}>{text[localStorage.getItem("language")].sentence[3]}</MovingWord>
                </AnimationContainer>


            </MovingWordContainer>
        </Container>
    )
}

export default withTheme(Sentence)