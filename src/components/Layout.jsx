import React from 'react';
import styled from 'styled-components';
import Navbar from '../layout/Navbar';
import Homepage from './Homepage';
import Contact from './HomeSections/Contact';

const Container = styled.div`
    background: #1a1a1a;
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



function Layout() {

    return (
        <Container>
            <Content>
                <Navbar />
                <Homepage />
                <Contact />
            </Content>
        </Container>
    );
}

export default Layout;
