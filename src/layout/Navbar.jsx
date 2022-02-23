import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    position: static;
    top: 0;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    margin-bottom: 50px;
    position: relative;
`;


const ColorProfile = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: #f5f5f5;
    cursor: pointer;
`;

const BackButton = styled(Link)`
    display: ${props => props.display ? "block" : "none"};
    position: fixed;
    left: 50px;
    top: 0;
    margin: 50px 0px;
    width: 20px;
    height: 20px;
    cursor: pointer;

    img {
        width: 100%;
    }
`;


function Navbar() {
    const location = useLocation();

    return (
        <Container>
            <BackButton to="/" display={location.pathname.length == 1 ? 0 : 1}>
                <img src='/icons/left-arrow.svg' />
            </BackButton>

            <ColorProfile />
        </Container>
    );
}

export default Navbar;
