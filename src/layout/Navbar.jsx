import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 80px;
    position: static;
    top: 0;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
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

const ColorProfile = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: #f5f5f5;
    cursor: pointer;
`;

function Navbar() {
    return (
        <Container>
            <Logo to="/">
                <h1>RF</h1>
            </Logo>
            <ColorProfile />
        </Container>
    );
}

export default Navbar;
