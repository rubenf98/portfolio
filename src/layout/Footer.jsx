import React from 'react'
import styled, { withTheme, keyframes } from 'styled-components';
import { dimensions, maxWidth, middleWidth } from '../helper';
import { connect } from 'react-redux';

const scroll = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100vw, 0, 0);
  }
`;

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: ${dimensions.lg}) {
        min-height: 30vh;
    }

`;

const EmailContainer = styled.div`
    width: 100%;
    padding: 0px;
    position: relative;
    min-height: clamp(130px, 22vw, 400px);
    margin: auto;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-size: clamp(30px, 10vw, 100px);
        text-align: center;
        margin: auto;
        display: block;
        font-weight: bold;
        color: ${props => props.color};
        font-family: 'Poppins', sans-serif;
    }
`;

const ScrollingRow = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
    top: 50%;
    transform: translate(0, -50%);
    z-index: -1;

    p {
        padding: 0px 50px;
        animation: ${scroll} ;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        will-change: transform;
        transform-style: preserve-3d;
        display: inline-block;
        white-space: nowrap;
        font-size: clamp(80px, 16vw, 300px);
        margin: 0px;
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

    }
`;

const LinksContainer = styled.div`
    width: 100%;
    max-width: ${middleWidth};
    display: flex;
    justify-content: space-between;
    align-items: middle;
    margin: auto;
    padding: 30px 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
`;

const Copyright = styled.p`
    font-size: 20px;
    margin: auto 0px;

    span {
        font-weight: bold;
        text-decoration: underline;
    }

    @media (max-width: ${dimensions.lg}) {
        order: 2;
        text-align: center;
        width: 100%;
    }
`;

const Social = styled.div`
    width: 50%;
    background-color: ${props => props.primary};
    display: flex;
    justify-content: flex-end;
    align-items: middle;
    cursor: pointer;
    gap: 30px;

    a {
        color: ${props => props.color};
        text-decoration: none;
        transition: opacity .3s linear;
        font-size: 20px;
        line-height: 100%;
        text-transform: uppercase;
        font-weight: 400;
        font-stretch: normal;
        font-style: normal;
        margin: 0px;
    }

    @media (max-width: ${dimensions.lg}) {
        order: 1;
        background-color: transparent;
        justify-content: space-around;
        width: 100%;
        gap: 15px;
        flex-wrap: wrap;
        margin-bottom: 50px;

        a {
            color: ${({ theme }) => theme.primary};
            font-size: 16px;

        }
    }
`;

const Background = styled.div`
    width: 50%;
    position: absolute;
    height: 130px;
    bottom: 0px;
    right: 0px;
    background-color: ${props => props.background};
    z-index: -1;

    @media (max-width: ${dimensions.lg}) {
        display: none;
    }
`;

const Top = styled.div`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    color: ${props => props.color};
    width: 100%;
    max-width: ${middleWidth};
    text-align: right;
    cursor: pointer;
    font-size: 24px;
    cursor: pointer;
    z-index: 5;
`;

const year = new Date().getFullYear();
function Footer({ theme, language }) {
    const sentence = { en: "let's work together", pt: "vamos construir juntos" }
    return (
        <Container>
            <Top onClick={() => window.scrollTo(0, 0)} color={theme.primary} >top</Top>


            <EmailContainer color={theme.text}>
                <a href='mailto:jrubenf98@gmail.com'>jrubenf98@gmail.com</a>
                <ScrollingRow stroke={theme.primary} color={theme.background}>
                    <p>{sentence[language]}</p>
                    <p>{sentence[language]}</p>
                </ScrollingRow>
            </EmailContainer>


            <LinksContainer>

                <Background background={theme.primary} />
                <Copyright>
                    © All right reserved <span>rúbenfreitas – {year}</span>
                </Copyright>

                <Social color={theme.background} primary={theme.primary}>
                    <a href="https://www.instagram.com/jrubenf98/" target="_blank" rel="noreferrer">
                        github
                    </a>
                    <a href="https://www.instagram.com/jrubenf98/" target="_blank" rel="noreferrer">
                        instagram
                    </a>
                    <a href="https://scholar.google.com/citations?user=1xnrzDMAAAAJ" target="_blank" rel="noreferrer">
                        scholar
                    </a>

                    <a href="https://www.linkedin.com/in/r%C3%BAben-freitas/" target="_blank" rel="noreferrer">
                        linkedin
                    </a>
                </Social>
            </LinksContainer>
        </Container >
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(
    mapStateToProps,
    null
)(withTheme(Footer));