import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
    background: #16181C;
`;


const Content = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
`;



function Layout({ children }) {
    return (
        <Container>
            <Content>
                {/* <Navbar /> */}
                {children}
                {/* <Footer /> */}
            </Content>
        </Container>
    );
}

export default Layout;
