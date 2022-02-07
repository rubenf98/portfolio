import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100px;
    position: static;
    top: 0;
    text
`;

const Logo = styled(Link)`
    text-decoration: none;
    color: white;

    h1 {
        font-family: 'Kumar One', cursive;
        margin-bottom: 0px;
        font-size: 26px;
        line-height: 20px;
    }

    div {
        margin-top: 3px;
        color: hsla(0,0%,100%,.5);
        font-size: 14px;
    }
`;

function Navbar() {
    return (
        <Container>
            <Logo to="/">
                <h1>Rúben Freitas</h1>
                <div class="brand-logo-subtitle">Web-Developer & Researcher</div>
            </Logo>
        </Container>
    );
}

export default Navbar;
