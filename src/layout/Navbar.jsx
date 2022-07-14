import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
`;

const Logo = styled.img`
    width: 200px;
    margin-top: 60px;
`;


function Navbar({ reduxTheme }) {

    return (
        <Container>
            <Logo src={reduxTheme === "light" ? "/image/logo_light.svg" : "/image/logo_dark.svg"} alt="logo" />
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        reduxTheme: state.application.theme,
    };
};
export default connect(
    mapStateToProps,
    null
)(Navbar);
