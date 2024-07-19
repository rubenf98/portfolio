import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes, withTheme } from 'styled-components';
import { dimensions, maxWidth, middleWidth } from '../../helper';
import AnimationContainer from '../AnimationContainer';

const zoom = keyframes`
  0% {
    scale: 1;
  }

  100% {
    scale: 1.05;
  }
`;

const transition = keyframes`
  0% {
    width: 100%;
    height: 50vh;
  }

  45% {
    width: 0%;
    height: 50vh;
  }
  60% {
    width: 0%;
    height: 50vh;
  }

  100% {
    width: 100%;
    height: 50vh;
  }
`;

const Container = styled.div`
    width: 100%;
    max-width: ${middleWidth};
    margin: 100px auto;
    display: block;
    padding: 0px 20px;
    box-sizing: border-box;
`;

const Title = styled.h3`
    line-height: 94%;
    font-size: 24px;
    letter-spacing: 3px;
    color: ${props => props.color};
    margin: 0px 0px 30px 0px;
    display: block;
    width: 100%;

`;

const More = styled(Link)`
    line-height: 94%;
    font-size: 24px;
    letter-spacing: 3px;
    max-width: ${maxWidth};
    color: ${props => props.color};
    margin: 30px 0px;
    text-align: right;
    display: block;
    width: 100%;
    font-weight: bold;
    text-decoration: none;
`;


const Content = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    gap: 50px;
    

    @media (max-width: ${dimensions.lg}) {
        flex-wrap: wrap;
    }
`;


const ProjectList = styled.ul`
    list-style-type: none;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    width: 30%;
    position: relative;
    overflow: visible;
    
    li {
        position: inherit;
        font-weight: 600;
        padding: 10px 0px;
        cursor: pointer;
        white-space: nowrap;
        text-align: right;
    }

    @media (max-width: ${dimensions.lg}) {
            width: 100%;

            li {
                text-align: left;
            }

    }
`;


const Project = styled.div`
    width: 100%;

    .title {
        display: block;
        color: inherit;
        text-decoration: none;
        line-height: 120%;
        font-size: ${props => props.active ? "55px" : "50px"};
        box-sizing: border-box;
        margin-bottom: 0px;
        opacity: ${props => props.active ? 1 : .7};
        transition: all .3s ease;
    }

    span {
        color: inherit;
        margin-bottom: 140px;
        opacity: ${props => props.active ? 1 : .3};
        font-size: ${props => props.active ? "22px" : "18px"};
        transition: all .3s ease;
    }   

    @media (max-width: ${dimensions.lg}) {
        .title {
            font-size: clamp(30px, 2vw, 50px);
            opacity: 1;
        }

        span {
            font-size: clamp(16px, 2vw, 20px);
            opacity: 1;
            
        }
    }

    
`;





const ProjectVideo = styled.div`
    box-sizing: border-box;
    pointer-events: none;
    border-radius: 0px;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 8;

    .wrapper {
        overflow: hidden;
        border-radius: inherit;
        height: 50vh;
        animation: ${transition} 1s cubic-bezier(.21,1.03,.7,1) forwards;
        position: relative;
        box-shadow: 0 0 20px 0px rgba(0,0,0,.2);
        border-top-right-radius: 60px;
        border-bottom-left-radius: 60px;
    }

    img {
        border-radius: inherit;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        margin: auto;
        animation: ${zoom} 3s ease-out forwards;
        animation-delay: 1s;
    }

    @media (max-width: ${dimensions.lg}) {
        display: none;
    }
`;


const ProjectImg = styled(ProjectVideo)`
    display: none;
    width: 100%;

    img {
        animation: none;
    }

    @media (max-width: ${dimensions.lg}) {
        display: block;

        img {
            margin-top: 20px;
            margin-bottom: 50px;
        }
    }
`;


function Projects({ theme, text }) {
    const [active, setActive] = useState(text.items[0])
    const [source, setSource] = useState("dom")

    function handleMouseOver(item) {
        setActive(item)

        setTimeout(() => {
            setSource(item.video)
        }, 400);

    }

    return (
        <Container >
            <Title color={theme.primary}>{text.title}</Title>
            <Content >
                <ProjectList >

                    {text.items.map((item, index) => (
                        <Project
                            active={item.id == active.id}
                            key={index}
                            onMouseOver={() => handleMouseOver(item)}
                        >
                            <li>
                                <Link className='title' to={"/projects/" + item.name.replace(/\s/g, "").toLowerCase()}>
                                    {item.name}
                                </Link>
                                <span>{item.description}</span>

                                <ProjectImg key={active.id}>

                                    <img src={"/image/projects/thumbnail/" + item.video + ".jpg"} />


                                </ProjectImg>
                            </li>
                        </Project>
                    ))}
                </ProjectList>

                <ProjectVideo key={active.id}>
                    <div className="wrapper">
                        <img src={"/image/projects/thumbnail/" + source + ".jpg"} />
                    </div>

                </ProjectVideo>

            </Content>
            <More to="/projects" color={theme.primary}>{text.link}</More>
        </Container>
    );
}

export default withTheme(Projects);
