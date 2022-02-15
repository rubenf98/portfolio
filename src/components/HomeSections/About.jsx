import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 70%;
    max-width: 3000px;
    padding: 150px 0 20px 0;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        width: 40%;
        padding: 25px;
    }   
`;

const InfoContainer = styled.div`
    width: 50%;
    padding: 25px;

    h3 {
        font-size: 28px;
        color: white;
    }

    p {
        font-size: 22px;
        color: #e2e8f0;
    }
`;


function About() {
    return (
        <Container>
            <InfoContainer>
                <h3>
                    Hi, I'm Rúben!
                </h3>
                <p>
                    I'm a Portuguese researcher based in Madeira Island with a Master's degree in Informatics Engineering. Currently I'm enrolled in a PhD programme at University of Madeira, specializing in Artificial Intelligence.
                </p>
                <p>
                    My focus is scientific investigation but sometimes I also like to create web projects and stimulate my creativity. I'm open for new projects, so feel free to contact me by email or on my social networks.
                </p>
                <p>
                    My hobbies include long gaming sessions, bingeing TV series, web development, and desiring computer upgrades.
                </p>
                <p>
                    In the future, I'd love to incorporate AI into my web projects in order to create something unique and innovative, therefore establishing my brand. I'd also like to explore WebGL towards creating fully immersive web-based AI applications.
                </p>
            </InfoContainer>
            <img src="/images/about.jpg.svg" alt="" />
        </Container>
    )
}

export default About