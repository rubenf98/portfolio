import React, { useState, useEffect } from 'react'
import styled, { withTheme } from 'styled-components';
import { dimensions, middleWidth } from '../../helper';
import { SeeMore } from '../../icons';


const Container = styled.section`
    padding: 50px 0px;
    width: 100%;
    max-width: ${middleWidth};
    margin: auto;
    z-index: 8;

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
    background-color: ${({ theme }) => theme.background};


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
    background-color: ${({ theme }) => theme.background};


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

    @media (max-width: ${dimensions.md}) {
            width: 60%;
            margin: 20px auto ;

    }
    
`;


function Publications({ theme, text }) {
    const [visible, setVisible] = useState(3);


    const handleViewMore = () => {
        if (visible === 3) {
            setVisible(text.items.length);
        } else setVisible(3);

    }

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            if (window.innerWidth < 768) {
                setVisible(1)
            } else {
                setVisible(3)
            }

        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (

        <Container>
            <Title primary={theme.primary}>
                <h2>{text.title}</h2>
                <p>{text.description}</p>

                <div onClick={handleViewMore}>{visible > 3 ? text.less : text.more} </div>
            </Title>
            <Papers >
                {text.items.slice(0, visible).map((item, index) => (
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