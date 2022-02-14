import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    align-items: start;
`;


const ProjectList = styled.ul`
    list-style-type: none;

    li {
        z-index: 1;
        position: inherit;
        font-weight: 600;
        padding: 40px 20px;
        font-family: 'Contrail One', cursive;
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
            {video != undefined &&
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
