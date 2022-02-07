import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 100%;
    min-height: 100vh;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: auto;
`;

const ImageContainer = styled.div`
    width: 40%;
    position: relative;

    .background {
        width: 100%;
        height: 680px;
        background-color: #4b0707;

        img {
            position: absolute;
        left: 0;
        top: auto;
        right: auto;
        bottom: 0;
        display: block;
        height: 110%;
        max-height: none;
        max-width: none;
        -webkit-box-flex: 0;
        }
    }

    
`;

const InfoContainer = styled.div`
    width: 50%;
    color: rgb(228, 228, 228);

    h1 {
        
        font-size: 50px;
    }

    h2 {
        font-size: 36px;
    }
`;

function Homepage() {

    return (
        <Container>
            <Row>
                <InfoContainer>
                    <h1>Hello, I'm Rúben Freitas.</h1>
                    <h2>Freelance Web Developer & Scientific Researcher from Madeira Island</h2>
                </InfoContainer>
                <ImageContainer>
                    <div className='background' >
                        <img src="/images/profile-pic.svg" />
                    </div>

                </ImageContainer>
            </Row>
        </Container>
    );
}

export default Homepage;
