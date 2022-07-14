import React from 'react'
import styled, { withTheme } from 'styled-components';

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InfoContainer = styled.div`
    width: 60%;
    padding: 0px 20px;
    box-sizing: border-box;

    h3 {
        color: ${props => props.primary};
        margin: 0px;
        font-size: 30px;
        font-weight: 300;
        letter-spacing: 6px;
        
    }

    h2 {
        font-size: 70px;
        color: inherit;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.96;
        letter-spacing: -5.6px;
        margin: 27px 0px;
    }

    p {
        font-size: 30px;
        font-weight: normal;
        line-height: 2.23;
        letter-spacing: -2.4px;
        opacity: .6;
    }
`;

const Highlight = styled.div`
    width: ${props => props.width};
    height: 600px;
    background-color: ${props => props.background};
`;

function About({ theme }) {
    return (
        <Container>
            <Highlight width="3%" background={theme.darkerPrimary} />
            <InfoContainer primary={theme.primary}>
                <h3>
                    about me
                </h3>
                <h2> the researcher that does web development.</h2>
                <p>
                    I'm a Portuguese researcher based in Madeira Island with a Master's degree in Informatics Engineering. Currently I'm enrolled in a PhD programme at University of Madeira, specializing in Artificial Intelligence.
                </p>
                {/* <p>
                    My focus is scientific investigation but sometimes I also like to create web projects and stimulate my creativity. I'm open for new projects, so feel free to contact me by email or on my social networks.
                </p>
                <p>
                    My hobbies include long gaming sessions, bingeing TV series, web development, and desiring computer upgrades.
                </p>
                <p>
                    In the future, I'd love to incorporate AI into my web projects in order to create something unique and innovative, therefore establishing my brand. I'd also like to explore WebGL towards creating fully immersive web-based AI applications.
                </p> */}
            </InfoContainer>
            <Highlight width="10%" background={theme.darkerPrimary} />
        </Container>
    )
}

export default withTheme(About)