import React from 'react';
import styled from 'styled-components';
import About from './HomeSections/About';
import Keywords from './HomeSections/Keywords';
import Projects from './HomeSections/Projects';
import Publications from './HomeSections/Publications';
import Contact from './HomeSections/Contact';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    
`;

const Row = styled.div`
    position: sticky;
    top: 0px;
    padding: 20px 0;
    min-height: 70vh;
    object-fit: fill;
    text-align: center;
    font-weight: normal;
    box-sizing: border-box;
    

    h1 {
        color: #c8c8c8;
        margin: 0;
        font-size: 1vw;
        letter-spacing: 0em;
        font-family: 'Megrim', cursive;
    }

    h2 {
        margin: 3vh auto;
	    font-size: 5vw;
        color: #ececec;
        max-width: 65vw;
        font-family: 'Noto Serif Display', serif;
    }
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

    picture {
        width: 100%;
        max-width: 3000px;
        margin: auto;
        

        img {
            width: 100%;
            filter: grayscale(1);
        }
    }
`;


function Homepage() {

    return (
        <div>
            <Container>
                <Row>
                    <h1>Rúben Freitas</h1>
                    <h2>The Researcher that does Web Development</h2>

                </Row>
                <ImageContainer>
                    <picture>
                        <source srcSet="/images/profile.jpg" type="image/jpg" />
                        <img src="/images/profile.webp" alt="Profile" loading="eager" />
                    </picture>

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
