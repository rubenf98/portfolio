import React from 'react';
import styled from 'styled-components';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import Homepage from './Homepage';
import Contact from './HomeSections/Contact';
import Publications from './HomeSections/Publications';

const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    overflow: auto;
`;


const Content = styled.div`
    width: 100%;
    max-width: 3000px;
    margin: auto;
    position: relative;
`;

const DarkBackground = styled.div`
    background: #1a1a1a;
`;

const LightBackground = styled.div`
    background: #f0f0f0;
`;



function Layout() {

    return (
        <Container>
            <DarkBackground>
                <Content>
                    <Navbar />
                    <Homepage />
                </Content>
            </DarkBackground>
            <LightBackground>
                <Content>
                    <Publications />
                </Content>
            </LightBackground>
            <DarkBackground>
                <Content>
                    <Contact />
                    <Footer />
                </Content>
            </DarkBackground>
        </Container>
    );
}

export default Layout;
