import React from 'react'
import styled from 'styled-components';
import { dimensions, colors } from '../../helper';

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: block;
    padding: 50px;
    color: white;

    h2 {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 120px;
        line-height: 1.2;
        font-weight: bold;

        @media (max-width: ${dimensions.md}){
            font-size: 80px;
        }

        @media (max-width: ${dimensions.sm}){
            font-size: 60px;
        }
    }
`;

const EmailContainer = styled.div`
    width: 100%;
    position: relative;
`;

const Email = styled.a`
    display: flex;
    margin-top: 100px;
    text-decoration: none;

    img {
        width: 200px;
        z-index: 1;
        margin-right: 40px;
        box-sizing: border-box

        @media (max-width: ${dimensions.lg}){
            width: 100px;
        }


        @media (max-width: ${dimensions.md}){
            width: 60px;
            margin: 0px 20px;
        }

        @media (max-width: ${dimensions.sm}){
            width: 60px;
            margin: 0px 20px;
        }
    }

    h3 {

        &:hover {
            ::before {
                width: 105%;
            }
        }

        ::before {
            position: absolute;
            margin-left: -5px;
            content: "";
            width: 0px;
            height: 6px;
            left: 0;
            bottom: 0;
            top: 0;
            margin-top: auto;
            margin-bottom: auto; 
            background: ${colors.accent};
            transition: 0.2s;    
        }
        
        transition: 0.3s;
        position: relative;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 80px;
        line-height: 1.2;
        color: ${colors.accent};

        @media (max-width: ${dimensions.lg}){
            font-size: 50px;
        }

        @media (max-width: ${dimensions.md}){
            font-size: 30px;
        }

        @media (max-width: ${dimensions.sm}){
            font-size: 20px;
        }
    }
`;

function Contact() {
    return (
        <Container>
            <h2>Let's Work</h2>
            <h2>Together.</h2>
            <EmailContainer>
                <Email href="mailto:work@rubenfreitas.com">
                    <img src="/icons/right-arrow.svg" alt="arrow-indicator" />
                    <h3>work@rubenfreitas.com</h3>
                </Email>

            </EmailContainer>
        </Container>
    )
}

export default Contact