import React from 'react';
import styled from 'styled-components';
import Navbar from '../layout/Navbar';
import Projects from './Projects';
import Homepage from './Homepage';

const Container = styled.div`
    background: #1a1a1a;
    height: 100%;
    min-height: 100vh;
    overflow: auto;
    padding: 50px;
`;


const Content = styled.div`
    max-width: 3000px;
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
                <Projects />
            </Content>
        </Container>
    );
}

export default Layout;
