import React, { useEffect, useState } from 'react'
import styled, { withTheme, keyframes } from 'styled-components';
import { dimensions } from '../../helper';
import { connect } from "react-redux";
import { setLightTheme, setDarkTheme, setLanguage } from "../../redux/application/actions";

const scroll = keyframes`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(90px);
  }
  100% {
    transform: translateY(0%);
  }
`;


const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 100px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        flex-direction: column;
        gap: 20px;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;

    @media (max-width: ${dimensions.md}) {
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    h1 {
        line-height: 90%;
        font-size: clamp(60px, 6vw, 124px);
        letter-spacing: -9.92px;
        padding-left: 16px;

        @media (max-width: ${dimensions.md}) {
            margin: -150px auto auto auto;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: .86;
            letter-spacing: -4.8px;
            z-index: 5;
            padding-left: 0px;
        }
    }

    
`;




const LanguageContainer = styled.div`
    top: 60px;
    right: 60px;
    position: absolute;

    @media (max-width: ${dimensions.md}) {
        display: none;
    }
`;

const MobileLanguageContainer = styled.div`
    display: none;

    @media (max-width: ${dimensions.md}) {
        display: flex;
    }
`;

const LanguageIndicator = styled.span`
    opacity: ${props => props.active ? 1 : .4};
    color: ${props => props.active ? props.primary : "inherit"};
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.84;
    letter-spacing: -2px;
    cursor: pointer;

    &:nth-child(2) {
        margin-left: 13px;
    }
`;

const ImageHeaderContainer = styled.div`
    z-index: 3;
    position: relative;
    padding-top: 30px;
    box-sizing: border-box;
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
        background-color: ${props => props.background};

        
    }

    img {
        width: 600px;
        filter: ${props => "grayscale(" + props.grayscale + ")"};

        @media (max-width: ${dimensions.lg}) {
            width: 500px;
        }

        @media (max-width: ${dimensions.sm}) {
            width: 100%;
        }
    }
    
`;

const SocialContainer = styled.div`
    transform: rotate(180deg);
    writing-mode:vertical-lr;
    display: block;
    white-space: nowrap; 
    position: absolute;
    left: 60px;
    font-size: 22px;
    font-weight: 500;
    z-index: 999;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    a {
        opacity: 0.6;
        text-decoration: none;
        color: inherit;
        transition: opacity .3s linear;
        font-family: Poppins;
        font-size: 20px;
        line-height: 55px;
        text-transform: uppercase;
        font-weight: 400;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.75;
        letter-spacing: -0.92px;

        &:hover {
            opacity:1;
        }
    }

    .middle {
        padding: 98px 0px;
        box-sizing: border-box;
    }
`;

const ThemeSwitch = styled.img`
    position: absolute;
    right: 50px;
    bottom: 60px;
    width: 35px; height: 35px;
    cursor: pointer;

    @media (max-width: ${dimensions.md}) {
        right: 20px;
    }
`;

const ScrollIndicator = styled.div`
    position: absolute;
    left: 50%;
    bottom: -80px;
    transform: translate(-50%, 0);
    width: 1px; 
    height: 150px;
    background: ${props => props.background};

    .active {
        position: absolute;
        left: calc(50% - 1px);
        bottom: 90px;
        transform: translate(-50%, 0);
        width: 2px; 
        height: 60px;
        background: ${props => props.accent};
        animation: ${scroll} 4s ease-in-out infinite;
    }

    @media (max-width: ${dimensions.md}) {
        right: 20px;
        bottom: -40px;
        height: 120px;

        .active {
            bottom: 90px;
            height: 30px;
        }
    }
`;




function Header({ theme, reduxTheme, setDarkTheme, setLightTheme, setLanguage, language, text }) {
    function handleLanguageClick(val) {

        setLanguage(val)
    }
    console.log(language)
    return (
        <Container>

            <LanguageContainer >
                <LanguageIndicator
                    primary={theme.primary}
                    active={language == "pt"}
                    onClick={() => handleLanguageClick("pt")}
                >
                    pt
                </LanguageIndicator>
                <LanguageIndicator
                    primary={theme.primary}
                    active={language == "en"}
                    onClick={() => handleLanguageClick("en")}
                >
                    en
                </LanguageIndicator>
            </LanguageContainer>

            <SocialContainer>
                <a rel="noreferrer noopener" target="_blank" href="https://github.com/rubenf98">github</a>
                <a className='middle' rel="noreferrer noopener" target="_blank" href="https://scholar.google.com/citations?user=1xnrzDMAAAAJ">scholar</a>
                <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/r%C3%BAben-freitas/">linkedin</a>
            </SocialContainer>

            <ImageContainer>
                <ImageHeaderContainer grayscale={reduxTheme === "light" ? 1 : 0} background={theme.accent}>
                    <img src="/image/header.png" alt="picture of me pointing towards social links" />
                    <div className='background' />
                </ImageHeaderContainer>

                {text.title}

            </ImageContainer>

            <MobileLanguageContainer >
                <LanguageIndicator
                    primary={theme.primary}
                    active={language == "pt"}
                    onClick={() => handleLanguageClick("pt")}
                >
                    pt
                </LanguageIndicator>
                <LanguageIndicator
                    primary={theme.primary}
                    active={language == "en"}
                    onClick={() => handleLanguageClick("en")}
                >
                    en
                </LanguageIndicator>
            </MobileLanguageContainer>

            <ThemeSwitch
                src={reduxTheme === 'light' ? "/icon/light_theme_switch.svg" : "/icon/dark_theme_switch.svg"}
                onClick={reduxTheme === 'light' ? setDarkTheme : setLightTheme}
            />
            <ScrollIndicator
                background={theme.scrollIndicator}
                accent={theme.scrollIndicatorAccent}
            >
                <div className='active' />
            </ScrollIndicator>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        reduxTheme: state.application.theme,
        language: state.application.language,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        setLightTheme: () => dispatch(setLightTheme()),
        setDarkTheme: () => dispatch(setDarkTheme()),
        setLanguage: (lang) => dispatch(setLanguage(lang)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(Header));