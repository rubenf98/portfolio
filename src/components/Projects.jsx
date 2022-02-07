import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    position: relative;
`;


const ProjectList = styled.ul`
    list-style-type: none;
    
    li {
        z-index: 1;
        position: inherit;
        font-weight: 600;
        padding: 40px 20px;
        text-transform: uppercase;
        font-family: 'Contrail One', cursive;
        cursor: pointer;
        white-space: nowrap;
        transition: color .3s cubic-bezier(.645,.045,.355,1);
        text-align: right;

        .title {
            display: block;
            text-decoration: none;
            font-size: 90px;
            margin-bottom: 0px;
            color: #959595;
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
    position: relative;

    &:hover {
        .video-container {
            z-index: 2;
        }
    }
`;


const ProjectVideo = styled.div`
    z-index: -2 ;
    background: white;
    position: absolute;
    height: 400px;
    width: 700px;
    top: 0;
    pointer-events: none;
    opacity: 1;
    will-change: transform;
    right: calc(-100% - 100px);
`;



const ProjectContainer = ({ name, description }) => (
    <Project>
        <ProjectVideo className="video-container" />
        <li>
            <Link className='title' to={"projects/" + name}>{name}</Link>
            <span>{description}</span>
        </li>
    </Project>
);

function Projects() {
    return (
        <Container >
            <ProjectList >
                <ProjectContainer name="Wave Labs" description="Interaquatic Dashboard" />
                <ProjectContainer name="Marco Abreu" description="Upholsterer & Decorator" />
                <ProjectContainer name="Plaza II" description="Condominium Management" />
                <ProjectContainer name="Fast Rope Madeira" description="Adventure Company For Outdoor Activities" />
                <ProjectContainer name="Educadora Sénior" description="Senior Educator" />
                <ProjectContainer name="lorem ipsum" description="lorem ipsum" />
                <ProjectContainer name="lorem ipsum" description="lorem ipsum" />
                <ProjectContainer name="lorem ipsum" description="lorem ipsum" />
                <ProjectContainer name="lorem ipsum" description="lorem ipsum" />
                <ProjectContainer name="lorem ipsum" description="lorem ipsum" />
            </ProjectList>


        </Container>
    );
}

export default Projects;
