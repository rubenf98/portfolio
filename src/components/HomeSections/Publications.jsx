import React from 'react'
import styled from 'styled-components';
import { dimensions } from '../../helper';

const Container = styled.div`
    padding: 50px 0px;
    width: 70%;
    margin: auto;
    display: flex;
    box-sizing: border-box;
    align-items: start;
    flex-wrap: wrap;

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
    width: 50%;
    position: sticky;
    top: 25%;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        position: relative;
    }

    h2 {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 22px;
        line-height: 1.2;
        color: #8d8d8d;
    }

    p {
        margin-top: 0px;
        font-size: 24px;
    }
`;

const Papers = styled.div`
    width: 50%;
    padding: 20px;
    color: #292929;
    box-sizing: border-box;
    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    div {
        margin: 50px 0px;

        h4 {
            margin: 0;
            font-size: 24px;
        }

        p {
            margin-top: 5px;
            
            font-size: 16px;
        }
    }
`;


const items = [
    {
        title: "Deep Learning and the Oceans",
        description: "Research vision for DL in the oceans, collating applications and use cases, identifying opportunities, constraints, and open research challenges.",
        year: "2022"
    },
    {
        title: "Web-based interface for environmental niche modelling",
        description: "A web-based user interface is proposed using Ecological Niche Modelling (ENM) as an automated alerting mechanism towards ecological awareness.",
        year: "2021"
    },
    {
        title: "A New Signal of Tropicalization in the Northeast Atlantic: The Spread of the Spotfin Burrfish Chilomycterus reticulatus in Madeira Archipelago and Its Invasion Risk",
        description: "Analysing occurrences of the spotfin burrfish, Chilomycterus reticulatus (Linnaeus, 1958), in the Madeira Archipelago (NE Atlantic) between 1898 and 2021.",
        year: "2021"
    },
    {
        title: "Virtual Reality Exposure Treatment in Phobias: a Systematic Review",
        description: "Comparison between the relative efficacy of virtual reality therapy exposure versus in vivo therapy exposure among individuals suffering from phobias.",
        year: "2021"
    },
    {
        title: "INTERAQUATICA: Designing Interactive Aquatic Experiences with Geodesic Domes In-the-Wild",
        description: "Explore further the Human Computer Biosphere Interaction concept in aquatic settings, based on existing techniques for prototyping geodesic domes, and designing them as five marine megafauna species, for the on-and off-shore locations.",
        year: "2020"
    },
];


function Publications() {
    return (
        <Container>
            <Title>
                <h2>Scientific Publications.</h2>
                <p>Over the years, I have been in practical research activities, resulting in several scientific publications involving interactive web-based systems, human-centered ML and interactive ENM.</p>
            </Title>
            <Papers>
                {items.map((item, index) => (
                    <div
                        key={index}
                    >
                        <h4>{item.title}, {item.year}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </Papers>
        </Container>
    )
}

export default Publications