import React from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme, keyframes } from 'styled-components';
import { middleWidth } from '../helper';
import { items } from '../projects';

const zoom = keyframes`
  0% {
    scale: 1;
  }

  100% {
    scale: 1.05;
  }
`;


const Container = styled.div`
    width: 100%;
    margin: auto;
    display: block;
    position: relative;
    max-width: ${middleWidth};
    padding-top: 100px;

    h1 {
        font-size: clamp(60px, 10vw, 130px);
        color: ${props => props.color};
        text-align: center;
        margin-bottom: 0px;
    }
`;

const Project = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 100px auto 250px auto;
    gap: 30px;

    .info {
        order: ${props => props.index % 2 ? 1 : 2};
        width: 40%;

        h2 {
            font-size: clamp(40px, 10vw, 70px);
            margin: 0px;
            margin-bottom: 60px;
            line-height: 94%;
            position: relative;
            display: inline-block;

            span {
                position: absolute;
                right: 0;
                bottom: -70px;
                margin-top: 0px;
                font-size: 30px;
                font-weight: 100;
                text-align: right;
                white-space: nowrap;
            }
        }

        

        h4 {
            color: ${props => props.color};
        }

        p {
            letter-spacing: 2px;
            width: 100%;
            margin-bottom: 50px;
        }

        a {
            font-size: 20px;
            color: ${props => props.color};
        }
    }


        img {
            order: ${props => props.index % 2 ? 2 : 1};
            width: 50%;
            height: auto;
            object-fit: cover;
            border-radius: 6px;
            animation-delay: 1s;
            transition: scale .3s ease;

            &:hover {
                animation: ${zoom} 1s ease-out forwards;
            }
            
        }
        
    
`;

function ProjectList({ theme }) {
    return (
        <Container color={theme.primary}>
            <h1>All projects</h1>
            {items.map((item, index) => (
                <Project index={index} color={theme.primary} key={index}>
                    <div className='info'>
                        <h2>{item.title} <span>{item.category}</span></h2>

                        <h4>What's this?</h4>
                        <p>{item.subtitle}</p>
                        <Link to={item.to}>view website</Link>
                    </div>

                    <img src={"/image/projects/" + item.image + "/1.jpg"} alt={item.title + " homepage"} />

                </Project>
            ))}

        </Container>
    )
}

export default withTheme(ProjectList)