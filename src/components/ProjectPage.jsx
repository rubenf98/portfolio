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
      }
    }
`;

const GalleryContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

const GallerySection = styled.div`
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      color: white;
      font-size: 25px;
      margin: 50px 0px;
      text-transform: uppercase;
    }

    &:nth-child(1), 
    &:nth-child(2), 
    &:nth-child(3) {
      width: 33%;
    }

    &:nth-child(4) {
      width: 40%;
    }

    &:nth-child(5) {
      width: 60%;
    }

    &:nth-child(6){
      width: 25%;
    }

    &:nth-child(7) {
      width: 35%;
    }

    &:nth-child(8) {
      width: 40%;
    }
`;

const GalleryImage = styled.img`
    width: ${props => props.width + "%"};
    margin: ${props => props.center ? "0px auto 40px auto" : "0px 0px 40px 0px"};
`;

function ProjectPage() {
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
        <h1>Wave</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vero deleniti consectetur dolores saepe doloremque illum eveniet soluta, eius deserunt similique hic asperiores nemo, impedit, voluptatum id reprehenderit ex accusantium.</p>
        <img src="/images/projects/wave.png" alt="" />
      </Header>
      <Section>
        <h3>Motivation</h3>
        <div className='row'>
          <div className='column'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure saepe atque expedita possimus, accusantium dignissimos itaque aliquam totam eligendi iste harum error. Minima culpa sapiente fuga dolore molestiae ullam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, culpa. Cupiditate, libero. Totam tempora commodi eaque! Beatae repellendus quisquam odio ratione a dolorum necessitatibus molestiae, similique sed voluptatem, impedit sint.</p>
          </div>
          <div className='column'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure saepe atque expedita possimus, accusantium dignissimos itaque aliquam totam eligendi iste harum error. Minima culpa sapiente fuga dolore molestiae ullam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, culpa. Cupiditate, libero. Totam tempora commodi eaque! Beatae repellendus quisquam odio ratione a dolorum necessitatibus molestiae, similique sed voluptatem, impedit sint.</p>
          </div>
        </div>
      </Section>
      <GalleryContainer>
        <GallerySection>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <GalleryImage loading='lazy' alt="project" width={100} src="/images/projects/wave/1.png" />
          <GalleryImage loading='lazy' alt="project" width={90} src="/images/projects/wave/2.png" />
        </GallerySection>
        <GallerySection>
          <GalleryImage loading='lazy' alt="project" center width={80} src="/images/projects/wave/2.png" />
          <GalleryImage loading='lazy' alt="project" width={130} src="/images/projects/wave/2.png" />
          <GalleryImage loading='lazy' alt="project" width={100} src="/images/projects/wave/2.png" />
        </GallerySection>
        <GallerySection>
          <GalleryImage loading='lazy' alt="project" center width={40} src="/images/projects/wave/3.png" />
          <GalleryImage loading='lazy' alt="project" center width={40} src="/images/projects/wave/3.png" />
          <span></span>
          <span></span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <GalleryImage loading='lazy' alt="project" width={90} src="/images/projects/wave/2.png" />
        </GallerySection>
        <GallerySection>
          <GalleryImage loading='lazy' alt="project" width={100} src="/images/projects/wave/3.png" />
        </GallerySection>
        <GallerySection>
          <GalleryImage loading='lazy' alt="project" width={100} src="/images/projects/wave/2.png" />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </GallerySection>
        <GallerySection>
          <GalleryImage loading='lazy' alt="project" width="100%" src="/images/projects/wave/2.png" />
        </GallerySection>
        <GallerySection>
          <GalleryImage loading='lazy' alt="project" width="100%" src="/images/projects/wave/2.png" />
        </GallerySection>
        <GallerySection>
          <GalleryImage loading='lazy' alt="project" width="100%" src="/images/projects/wave/2.png" />
        </GallerySection>
      </GalleryContainer>
      <Section>
        <h3>Solution</h3>
        <div className='row'>
          <div className='column'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure saepe atque expedita possimus, accusantium dignissimos itaque aliquam totam eligendi iste harum error. Minima culpa sapiente fuga dolore molestiae ullam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, culpa. Cupiditate, libero. Totam tempora commodi eaque! Beatae repellendus quisquam odio ratione a dolorum necessitatibus molestiae, similique sed voluptatem, impedit sint.</p>
          </div>
          <div className='column'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure saepe atque expedita possimus, accusantium dignissimos itaque aliquam totam eligendi iste harum error. Minima culpa sapiente fuga dolore molestiae ullam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, culpa. Cupiditate, libero. Totam tempora commodi eaque! Beatae repellendus quisquam odio ratione a dolorum necessitatibus molestiae, similique sed voluptatem, impedit sint.</p>
          </div>
        </div>
      </Section>
    </Container>
  )
}

export default ProjectPage