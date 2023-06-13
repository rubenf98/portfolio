import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import { dimensions, middleWidth } from '../helper';

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: block;
    position: relative;
`;

const Background = styled.div`
    width: 100%;
    height: calc(100% - 100vh);
    top: 100vh;
    left: 0;
    background-color: white;
    z-index: -1;
    position: absolute;

    
`;

const Header = styled.section`
    width: 100%;
    position: relative;
    min-height: 100vh;
    text-align: center;
    display: flex;
    flex-direction:column ;
    justify-content: space-between;
    align-items: center;
    perspective: calc(${middleWidth} - 300px);
    padding-top: 200px;
    box-sizing: border-box;
    margin-bottom: 150px;

    @media (max-width: ${dimensions.md}){
        min-height: 0px;
    }

    h1 {
        font-size: clamp(60px, 8vw, 90px);
        margin: 0px;
        margin-bottom: 20px;
        color: ${props => props.color};
    }

    p {
        width: 40%;
        max-width: ${middleWidth};
        font-size: 18px;
        margin: 0px;
        flex: 1;
        font-weight: 400;
    }

    img {
        width: 100%;
        max-width: ${props => props.degree != 40 ? (middleWidth) : "1100px"};
        margin: auto;
        margin: 0px;
        display: block;
        transition: all .3s ease;
        transform-style: preserve-3d;
        transform: ${props => "rotate3d(1, 0, 0, " + props.degree + "deg)"};
        /* transform: rotate3d(0, 0,0,0deg); */

        
    }

    @media (max-width: ${dimensions.md}){

        p {
            width: 90%;
        }

        img {
            transform: translateY(50px);
            width: 90%;
        }
            
    }
`;

const Description = styled.section`
    width: 100%;
    max-width: ${middleWidth};
    margin: 50px auto 200px auto;
    display: block;
    color: ${props => props.secundary};

    @media (max-width: ${dimensions.md}){
        padding: 0px 30px;
        box-sizing: border-box;
    }
    
    h2 {
        font-size: 60px;
        margin-bottom: 100px;
        position: relative;
        display: inline-block;

        @media (max-width: ${dimensions.md}){
            display: none;
        }

        &:before {
            content: " ";
            width: 80%;
            height: 20px;
            background-color: ${props => props.primary};
            position: absolute;
            left: 0;
            top: 100px;
        }
    }

    .row {
        display: flex;
        justify-content: space-between;
        
        gap: 100px;

        @media (max-width: ${dimensions.md}){
            gap: 0px;
            flex-wrap: wrap;
        }
      
        .column {
            width: 50%;
            font-size: 18px;

            @media (max-width: ${dimensions.md}){
                width: 100%;
            }

            h3 {
                color: ${props => props.primary};
            }

            a {
                color: ${props => props.primary};
                text-decoration: underline;
                margin-top: auto;
                font-weight: bold;
                font-size: 20px;
            }
        }
    }
`;

const Image = styled.img`
    width: 100%;
    max-width: ${middleWidth};
    margin: 100px auto 100px auto;
    display: block;
    box-shadow: 0px 0px 45px 0px rgba(0,0,0,.1);
    border-radius: 12px;

    @media (max-width: ${dimensions.md}){
        margin: 50px auto 50px auto;
        width: 90%;
        box-shadow: 0px 0px 25px 0px rgba(0,0,0,.1);
        box-sizing: border-box;
    }
`;

const Mockup = styled.img`
    width: 80%;
    max-width: ${middleWidth};
    margin: 100px auto 100px auto;
    display: block;

    @media (max-width: ${dimensions.md}){
        margin: 50px auto 50px auto;
        width: 90%;
        box-shadow: 0px 0px 25px 0px rgba(0,0,0,.1);
        box-sizing: border-box;
    }
`;

const Back = styled(Link)`
    position: absolute;
    top: 50px;
    left: 50px;
    color: ${props => props.color};
    width: 100%;
    max-width: ${middleWidth};
    cursor: pointer;
    font-size: 24px;
    text-align: left;
    text-decoration: none;
`;


function ProjectPage({ title, subtitle, imageSrc, motivation, theme, color }) {
    const [degree, setDegree] = useState(40)

    const handleScroll = useCallback(() => {
        var treshold = Math.round((document.documentElement.scrollTop / window.innerHeight) * 100) / 100;

        if (treshold > .25) {
            if (degree == 40) {
                setDegree(0)
            }
        } else {
            if (degree == 40) {
                setDegree(40)
            }
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, true);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll])

    return (
        <Container>
            <Background />
            <Header degree={degree} color={theme.primary} id="header-container">
                <Back color={theme.primary} to="/">back</Back>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <img src={imageSrc + "1.jpg"} alt="" />
            </Header>
            <Description primary={color} secundary={theme.background}>
                <h2>{title}</h2>
                {motivation}
            </Description>

            <Image loading='lazy' alt="project" src={imageSrc + "2.jpg"} />
            <Mockup loading='lazy' alt="project" src={imageSrc + "3.webp"} />
        </Container>
    )
}

export default withTheme(ProjectPage);