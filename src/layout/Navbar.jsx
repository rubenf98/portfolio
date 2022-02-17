import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    position: static;
    top: 0;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    margin-bottom: 50px;
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
            <ColorProfile />
        </Container>
    );
}

export default Navbar;
