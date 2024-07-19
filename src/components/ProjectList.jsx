import React from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme, keyframes } from 'styled-components';
import { dimensions, middleWidth } from '../helper';
import { connect } from 'react-redux';

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
            font-size: clamp(36px, 3vw, 50px);
            margin: 0px;
            line-height: 100%;
            position: relative;
            display: inline-block;
        }

        h3 {
            font-size: 24px;
            font-weight: 100;
            margin-bottom: 60px;
            line-height: 100%;
            margin-top: 10px;
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

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        padding: 10px 30px;
        box-sizing: border-box;
        margin: 100px auto;

        .info {
            width: 100%;
            order: 1;

            h3, p, h4 {
                line-height: 100%;
                text-align: ${props => props.index % 2 ? "left" : "right"};
            }

            h2 {
                text-align: center;
                margin: auto;
                display: block;
            }

            a {
                float: ${props => props.index % 2 ? "left" : "right"};
            }
        }

        img {
            width: 100%;
            order: 2;
        }
    }
        
    
`;

function ProjectList({ theme, language }) {
    const { text } = require('../assets/' + language + "/projects");


    return (
        <Container color={theme.primary}>
            <h1>All projects</h1>
            {Object.entries(text).map((item, index) => (
                <Project index={text} color={theme.primary} key={index}>
                    <div className='info'>
                        <h2>{item[1].title} </h2>
                        <h3>{item[1].category}</h3>

                        <h4>About</h4>
                        <p>{item[1].subtitle}</p>
                        <Link to={item[1].to}>view website</Link>
                    </div>

                    <img src={"/image/projects/" + item[1].image + "/1.jpg"} alt={item[1].title + " homepage"} />

                </Project>
            ))}

        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(
    mapStateToProps,
    null
)(withTheme(ProjectList));