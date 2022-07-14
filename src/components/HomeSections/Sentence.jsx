import React from 'react'
import { dimensions } from '../../helper';
import styled, { withTheme, keyframes } from 'styled-components';
import { text } from "../../assets/homepage";

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
    margin-top: 90px;
    display: flex;
	align-items: center;
    overflow-x: hidden;
`;


const MovingRow = styled.div`
    display: flex;
	align-items: center;
    line-height: 150px;
    margin: 0px;
`;


const MovingRowItem = styled.span`
    animation: ${scroll};
    animation-duration: 25s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    will-change: transform;
    transform-style: preserve-3d;
    display: inline-block;
    margin: 0px;
    text-transform: uppercase;
    font-size: 150px;
    font-weight: 900;
    color: ${props => props.color};
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
    @media (max-width: ${dimensions.md}) {
        font-size: 40px;
    }

`;
function Sentence({ theme }) {
    return (
        <Container >
            <div>
                <MovingRow >
                    <MovingRowItem stroke={theme.primary} color={theme.background}>{text[localStorage.getItem("language")].sentence[0]}</MovingRowItem>
                    <MovingRowItem stroke={theme.background} color={theme.primary}>{text[localStorage.getItem("language")].sentence[1]}</MovingRowItem>
                    <MovingRowItem stroke={theme.primary} color={theme.background}>{text[localStorage.getItem("language")].sentence[2]}</MovingRowItem>
                    <MovingRowItem stroke={theme.background} color={theme.primary}>{text[localStorage.getItem("language")].sentence[3]}</MovingRowItem>
                </MovingRow>
                <MovingRow >
                    <MovingRowItem stroke={theme.background} color={theme.primary}>{text[localStorage.getItem("language")].sentence[1]}</MovingRowItem>
                    <MovingRowItem stroke={theme.primary} color={theme.background}>{text[localStorage.getItem("language")].sentence[2]}</MovingRowItem>
                    <MovingRowItem stroke={theme.background} color={theme.primary}>{text[localStorage.getItem("language")].sentence[3]}</MovingRowItem>
                    <MovingRowItem stroke={theme.primary} color={theme.background}>{text[localStorage.getItem("language")].sentence[0]}</MovingRowItem>
                </MovingRow>


            </div>
        </Container>
    )
}

export default withTheme(Sentence)