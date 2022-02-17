import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: block;
`;

const Header = styled.div`
    width: 100%;
    color: #fff;
    text-align: center;

    h1 {
      font-size: 80px;
    }

    p {
      width: 50%;
      font-size: 20px;
      margin: auto;
    }

    img {
      max-width: 1200px;
      width: 50%;
      transform: ${props => "scale(" + props.imageWidth + ")"};
      margin: 100px auto;
      transition: transform .2s ease;
      margin-bottom: 300px
    }
`;

const Section = styled.section`
    color: #fff;
    width: 80%;
    margin: auto;
    display: block;
    font-family: 'Gideon Roman', cursive;
    
    h3 {
      font-size: 32px;
      margin: 10px 0px 0px 20px;
    }

    .row {
      display: flex;
      color: #d8d8d8;
      
      .column {
        padding: 22px;
        box-sizing: border-box;    
        width: 50%;
      }
    }
`;

const GalleryContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;

    img {
      width: 50%;
    height: auto;
    padding: 20px;
    box-sizing: border-box;
    }
`;

function ProjectPage({ title, subtitle, imageSrc, motivation, solution }) {
  const [imageWidth, setImageWidth] = useState(1)

  const handleScroll = useCallback(event => {
    var treshold = event.srcElement.scrollTop / (window.innerHeight / 3);
    setImageWidth(treshold > 1 ? (treshold > 1.5 ? 1.5 : treshold) : 1);
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
      <Header id="header-container" imageWidth={imageWidth}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <img src={imageSrc + "main.png"} alt="" />
      </Header>
      <Section>
        <h3>Motivation</h3>
        {motivation}
      </Section>
      <GalleryContainer>
        <img loading='lazy' alt="project" src={imageSrc + "1.png"} />
        <img loading='lazy' alt="project" src={imageSrc + "2.png"} />
        <img loading='lazy' alt="project" src={imageSrc + "3.png"} />
        <img loading='lazy' alt="project" src={imageSrc + "4.png"} />
      </GalleryContainer>

      <Section>
        <h3>Solution</h3>
        {solution}
      </Section>
    </Container>
  )
}

export default ProjectPage