import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes, withTheme } from 'styled-components';
import AnimationContainer from '../AnimationContainer';

const zoom = keyframes`
  0% {
    scale: 1;
  }

  100% {
    scale: 1.1;
  }
`;

const transition = keyframes`
  0% {
    width: 100%;
    height: 60vh;
  }

  45% {
    width: 0%;
    height: 60vh;
  }
  60% {
    width: 0%;
    height: 60vh;
  }

  100% {
    width: 100%;
    height: 60vh;
  }
`;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    max-width: 3000px;
    margin: auto;
    display: block;

    
`;

const Title = styled.h3`
    line-height: 4.57;
    font-size: 23px;
    letter-spacing: 4.6px;
    color: ${props => props.color};
    margin: 0;
    text-align: right;
    display: block;
    width: 100%;
    position: absolute;
    top: -100px;
    right: 40px;
`;

const More = styled.h3`
    line-height: 4.57;
    font-size: 23px;
    letter-spacing: 4.6px;
    color: ${props => props.color};
    margin: 0;
    text-align: right;
    display: block;
    width: 100%;
    position: absolute;
    bottom: -90px;
    right:0 ;
`;


const Content = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: relative;
`;


const ProjectList = styled.ul`
    list-style-type: none;
    padding: 0px 40px 0px 0px;
    box-sizing: border-box;
    width: 30%;
    position: relative;
    
    li {
        position: inherit;
        font-weight: 600;
        padding: 10px 0px;
        cursor: pointer;
        white-space: nowrap;
        text-align: right;
    }
`;


const Project = styled.div`
    width: 100%;

    .title {
        display: block;
        color: inherit;
        text-decoration: none;
        line-height: 70px;
        font-size: ${props => props.active ? "65px" : "60px"};
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
`;


const ProjectVideo = styled.div`
    box-sizing: border-box;
    pointer-events: none;
    border-radius: 0px;
    width: 65%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;

    .wrapper {
        overflow: hidden;
        border-radius: inherit;
        height: 60vh;
        animation: ${transition} 1s cubic-bezier(.21,1.03,.7,1) forwards;
        position: relative;
        box-shadow: 0 0 20px 0px rgba(0,0,0,.2);
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
`;

const items = [
    { id: 1, name: "Dom Design", description: "Design Agency", video: "dom" },
    { id: 2, name: "Marco Abreu", description: "Upholsterer & Decorator", video: "marcoabreu" },
    { id: 3, name: "Plaza II", description: "Condominium Management", video: "plaza" },
    { id: 4, name: "Be Local", description: "Adventure Outdoor Activities", video: "belocal" },
];

function Projects({ theme }) {
    const [active, setActive] = useState(items[0])
    const [source, setSource] = useState("dom")

    function handleMouseOver(item) {
        setActive(item)

        setTimeout(() => {
            setSource(item.video)
        }, 400);

    }


    return (
        <Container >
            <Content >
                <ProjectList >
                    <Title color={theme.primary}>my projects</Title>
                    {items.map((item, index) => (
                        <Project
                            active={item.id == active.id}
                            key={index}
                            onMouseOver={() => handleMouseOver(item)}
                        >
                            <li>
                                <Link

                                    className='title' to={"/" + item.name.replace(/\s/g, "").toLowerCase()}
                                >
                                    {item.name}
                                </Link>
                                <span>{item.description}</span>
                            </li>
                        </Project>
                    ))}
                </ProjectList>

                <ProjectVideo key={active.id}>
                    <div className="wrapper">
                        <img src={"/image/projects/thumbnail/" + source + ".jpg"} />
                    </div>
                    <More color={theme.primary}>all projects</More>
                </ProjectVideo>

            </Content>
        </Container>
    );
}

export default withTheme(Projects);
