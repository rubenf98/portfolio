import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const squares = keyframes`
  0% {
    bottom: -1%;
  }

  5% {
    opacity:1;
  }

  100% {
    transform: rotate(360deg);
    bottom: 100%;
    opacity: 0;
  }
`;

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    align-items: start;
    padding: 150px 50px;
    box-sizing: border-box;
    max-width: 3000px;
    position: relative;
`;


const ProjectList = styled.ul`
    list-style-type: none;
    z-index: 2;
    
    li {

        position: inherit;
        font-weight: 600;
        padding: 40px 20px;
        font-family: 'Unna', serif;
        cursor: pointer;
        white-space: nowrap;
        text-align: right;

        .title {
            display: block;
            text-decoration: none;
            font-size: 90px;
            margin-bottom: 0px;
            color: #c3c3c3;
            transition: color .3s cubic-bezier(.645,.045,.355,1);

                &:hover {
                    color: #ffffff; 
                }
        }

        span {
            color: #616161;
            margin-bottom: 140px;
            font-size: 22px;
            font-family: 'Zen Kurenaido', sans-serif;  
        }   
    }
`;


const Project = styled.div`
    width: 100%;

    &:hover {
        .video-container {
            z-index: 2;
        }
    }
`;


const ProjectVideo = styled.div`
    z-index: 2 ;
    padding: 3%;
    margin: 0px 100px;
    box-sizing: border-box;
    pointer-events: none;
    opacity: 1;
    will-change: transform;
    background: ${props => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 50px;
    border-radius: 0px;
    flex:1;
    width: 50%;

    video {
        margin: auto;
        border-radius: inherit;
        width: 100%;
        height: auto;
        display: block;
        margin: auto;
        box-shadow: 0 0 20px 0px rgba(0,0,0,.3);2
    }
`;

const Background = styled.div`
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;


    .square {
        position: absolute;
        animation: ${squares} 9.5s linear infinite;
        align-self: flex-end;
        background: #5a5a5a65;  
        opacity:0;
        

        &:nth-child(2) { 
            height: 1.5em;  
            width: 3em;   
            animation-delay: 1s;
            animation-duration: 17s; 
            filter: blur(5px);
            left: 10%;
        }
        &:nth-child(3) { 
            height: 2em;    
            width: 1em;   
            animation-delay: 1.5s;
            animation-duration: 8s; 
            filter: blur(1px) ;
            left: 20%;
        }
        &:nth-child(4) { 
            height: 1em;    
            width: 1.5em; 
            animation-delay: 0.5s;
            filter: blur(3px);
            animation-duration: 13s ;
            left: 30%;
        }
        &:nth-child(5) { 
            height: 1.25em; 
            width: 2em;   
            animation-delay: 4s;
            filter: blur(2px);
            animation-duration: 11s ;
            left: 40%;
        }
        &:nth-child(6) { 
            height: 2.5em;  
            width: 2em;   
            animation-delay: 2s;
            filter: blur(1px);
            animation-duration: 9s ;
            left: 50%;
        }
        &:nth-child(7) { 
            height: 5em;    
            width: 2em;   
            filter: blur(2.5px);
            animation-duration: 12s ;
            left: 60%;
        }
        &:nth-child(8) { 
            height: 1em;    
            width: 3em;   
            animation-delay: 5s;
            filter: blur(6px);
            animation-duration: 18s ;
            left: 70%;
        }
        &:nth-child(9) {
            height: 1.5em; 
            width: 2em; 
            filter: blur(0.5px);
            animation-duration: 9s ;
            left: 80%;
        }
        &:nth-child(9) {
            height: 3em;
            width: 2.4em;
            animation-delay: 6s;
            filter: blur(0.5px);
            animation-duration: 12s ;
            left: 90%;
        }
    }
`;

const items = [
    { name: "Wave Labs", description: "Interaquatic Dashboard", video: "wave", background: "#6379b4" },
    { name: "Marco Abreu", description: "Upholsterer & Decorator", video: "2", background: "#940000" },
    { name: "Plaza II", description: "Condominium Management", video: "3", background: "#ff9100" },
    { name: "Fast Rope Madeira", description: "Adventure Company For Outdoor Activities", video: "4", background: "#062781" },
    { name: "Educadora Sénior", description: "Senior Educator", video: "5", background: "#cfcc20" },
];

function Projects() {
    const [video, setVideo] = useState(undefined)
    return (
        <Container >
            <Background>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </Background>
            <ProjectList >
                {items.map((item, index) => (
                    <Project
                        key={index}
                        onMouseOver={() => setVideo(index)}
                        onMouseLeave={() => setVideo(undefined)}
                    >
                        <li>
                            <Link className='title' to={"projects/" + item.name}>{item.name}</Link>
                            <span>{item.description}</span>
                        </li>
                    </Project>
                ))}
            </ProjectList>
            {video !== undefined &&
                <ProjectVideo background={items[video].background} className="video-container" >

                    <video autoPlay loop>
                        <source src={"/videos/" + items[video].video + ".mp4"} type="video/mp4" />
                        <source src={"/videos/" + items[video].video + ".webm"} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>


                </ProjectVideo>
            }
        </Container>
    );
}

export default Projects;
