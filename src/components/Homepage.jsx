import React from 'react';
import styled, { keyframes } from 'styled-components';
import About from './HomeSections/About';
import Keywords from './HomeSections/Keywords';
import Projects from './HomeSections/Projects';
import Publications from './HomeSections/Publications';
import Contact from './HomeSections/Contact';

const scroll = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100vw, 0, 0);
  }
`;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    
`;

const Row = styled.div`
    position: sticky;
    top: 0;
    min-height: 70vh;
    object-fit: fill;
`;


const TextContainer = styled.div`
    z-index: 2;
    position: relative;
    overflow: hidden;
`;

const HeadlineRow = styled.div`
	position: relative;
	display: flex;
	margin-left: 0;
	padding-left: 0;
	justify-content: flex-start;
	align-items: center;
    animation: ${props => props.animation ? scroll : "none"} ;
    animation-duration: 25s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    will-change: transform;
    transform-style: preserve-3d;
    z-index: 2;
    color: #d4d0ca;

    &:first-child{
        color: #f1f0d8
    }

`;

const Headline = styled.span`
	display: inline-block;
	margin-top: 0;
	margin-right: 4vw;
	margin-bottom: 0;
	flex-direction: row-reverse;
	justify-content: flex-end;
	align-items: stretch;
	font-family: 'Grandslang b side','Palatino Linotype',sans-serif;
	font-size: 12vw;
	white-space: nowrap;
	cursor: default;
    z-index: 2;
`;

const ImageContainer = styled.div`
	position: relative;
    display: flex;
    overflow: hidden;
    width: 65vw;
    max-width: 100%;
    padding-top: 0;
    margin-bottom: 200px;
    z-index: 1;
    margin: auto;

    img {
        width: 100%;
        max-width: 3000px;
        margin: auto;
        filter: grayscale(1);
    }
`;


function Homepage() {

    return (
        <div>
            <Container>
                <Row>
                    <TextContainer>
                        <HeadlineRow animation>
                            <Headline>WEB-BASED SYSTEMS</Headline>
                            <Headline>FREITAS</Headline>
                        </HeadlineRow>
                        <HeadlineRow animation>
                            <Headline>RESEARCHER</Headline>
                            <Headline>DEVELOPER</Headline>
                            <Headline>ENGINEER</Headline>
                        </HeadlineRow>
                    </TextContainer>
                </Row>
                <ImageContainer>
                    <img src="/images/prof.jpg" loading="eager" />
                </ImageContainer>
            </Container>

            <Keywords />
            <About />
            <Projects />
            
            <Publications />
            <Contact />
        </div>
    );
}

export default Homepage;
