import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { light, dark } from "../themes"
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;


const Content = styled.div`
    width: 100%;
    margin: auto;
    
`;



function Layout({ children, theme }) {

    useEffect(() => {
        setTimeout(() => {
            document.body.style.transition = "all 0.50s linear";
        }, 1000);
    }, [])

    return (
        <Container>
            <ThemeProvider theme={theme === 'light' ? light : dark}>
                <GlobalStyles />
                <Content>
                    <Navbar />
                    {children}
                    <Footer />
                </Content>
            </ThemeProvider>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        theme: state.application.theme,
    };
};

export default connect(
    mapStateToProps,
    null
)(Layout);