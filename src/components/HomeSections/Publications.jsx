import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components';
import { dimensions, middleWidth } from '../../helper';
import { SeeMore } from '../../icons';


const Container = styled.section`
    padding: 50px 0px;
    width: 100%;
    max-width: ${middleWidth};
    margin: auto;

    @media (max-width: ${dimensions.xl}) {
        width: 80%;
    }


    @media (max-width: ${dimensions.lg}) {
        width: 90%;
        padding: 20px 0px;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

const Title = styled.div`
    padding: 20px;
    box-sizing: border-box;
    text-align: center;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        position: relative;
    }

    h2 {
        font-size: 34px;
        color: ${props => props.primary};
        letter-spacing: 5px;
    }

    p {
        width: 60%;
        margin: auto;
        display: block;
        font-size: 20px;
    }

    div {
        font-size: 20px;
        margin-top: 30px;
        color: ${props => props.primary};
        cursor: pointer;
    }
`;

const Papers = styled.div`
    width: 100%;
    margin: 100px 0px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

const Paper = styled.div`
    width: 33%;
    margin: 50px 0px;
    padding-left: 50px;
    padding-right: 10px;
    box-sizing: border-box;
    border-left: 1px solid;
    border-color: ${props => props.primary};
    display: flex;
    flex-direction: column;

    h4 {
        margin: 0;
        font-size: 24px;
    }

    p {
        margin-top: 5px;
        opacity: .6;
        font-size: 16px;
        flex: 1;
    }

    a {
        margin-top: 30px;
        font-size: 24px;
        color: ${props => props.primary};
        text-decoration: none;
        display: flex;
        gap: 10px;

        div {
            background-color: ${props => props.primary};
            border-radius: 40px;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                width: 23px;
                height: 23px;
                margin: auto;
                display: block;
                transition: all .5s ease;
            }
        }

        &:hover {
            svg {
                width: 35px;
                height: 35px;
            }
        }

        
    }
    
`;


const items = [
    {
        title: "Dive Reporter-Mobile App for Counting Underwater Marine Biodiversity",
        description: "Tablet application designed for scuba divers and dive operators to report species during post-dive surveys.",
        year: "2022",
        to: "https://www.authorea.com/doi/full/10.22541/au.166516587.77115447"
    },
    {
        title: "Deep Learning and the Oceans",
        description: "Research vision for DL in the oceans, collating applications and use cases, identifying opportunities, constraints, and open research challenges.",
        year: "2022",
        to: "https://ieeexplore.ieee.org/abstract/document/9771134"
    },
    {
        title: "Web-based interface for environmental niche modelling",
        description: "A web-based user interface is proposed using Ecological Niche Modelling (ENM) as an automated alerting mechanism towards ecological awareness.",
        year: "2021",
        to: "https://digituma.uma.pt/handle/10400.13/3980"
    },
    {
        title: "A New Signal of Tropicalization in the Northeast Atlantic: The Spread of the Spotfin Burrfish",
        description: "Analysing occurrences of the spotfin burrfish, Chilomycterus reticulatus (Linnaeus, 1958), in the Madeira Archipelago (NE Atlantic) between 1898 and 2021.",
        year: "2021",
        to: "https://www.mdpi.com/1424-2818/13/12/639"
    },
    {
        title: "Virtual Reality Exposure Treatment in Phobias: a Systematic Review",
        description: "Comparison between the relative efficacy of virtual reality therapy exposure versus in vivo therapy exposure among individuals suffering from phobias.",
        year: "2021",
        to: "https://dl.acm.org/doi/abs/10.1145/3391614.3399395"
    },
    {
        title: "INTERAQUATICA: Designing Interactive Aquatic Experiences with Geodesic Domes",
        description: "Explore further the Human Computer Biosphere Interaction concept in aquatic settings, based on existing techniques for prototyping geodesic domes, and designing them as five marine megafauna species, for the on-and off-shore locations.",
        year: "2020",
        to: "https://link.springer.com/article/10.1007/s11126-021-09935-6"
    },
];


function Publications({ theme }) {
    const [visible, setVisible] = useState(3);

    const handleViewMore = () => {
        if (visible === 3) {
            setVisible(items.length);
        } else setVisible(3);

    }
    return (

        <Container>
            <Title primary={theme.primary}>
                <h2>Scientific Publications.</h2>
                <p>Over the years, I have been in practical research activities, resulting in several scientific publications involving interactive web-based systems, human-centered ML and interactive ENM.</p>

                <div onClick={handleViewMore}>view all articles</div>
            </Title>
            <Papers >
                {items.slice(0, visible).map((item, index) => (
                    <Paper primary={theme.primary} key={index}>
                        <h4>{item.title}, {item.year}</h4>
                        <p>{item.description}</p>

                        <a href={item.to} target="_blank">read more <div><SeeMore /></div></a>
                    </Paper>
                ))}
            </Papers>
        </Container>
    )
}

export default withTheme(Publications)