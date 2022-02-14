import React from 'react';
import styled from 'styled-components';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import Homepage from './Homepage';

const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    overflow: auto;
    background: #1a1a1a;
`;


const Content = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
`;



function Layout() {
    return (
        <Container>
            <Content>
                <Navbar />
                <Homepage />
                <Footer />
            </Content>
        </Container>
    );
}

export default Layout;
