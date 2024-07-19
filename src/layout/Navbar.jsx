import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { dimensions } from '../helper';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    z-index: -1;

`;

const Logo = styled.img`
    width: 200px;
    margin-top: 60px;
    cursor: pointer;
`;


function Navbar({ reduxTheme }) {

    return (
        <Container>
            <Link to="/">
                <Logo src={reduxTheme === "light" ? "/image/logo_light.svg" : "/image/logo_dark.svg"} alt="logo" />
            </Link>
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
