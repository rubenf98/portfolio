import React from 'react'
import styled, { keyframes } from 'styled-components';

const empty = keyframes`
  0%{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  } 
  30%{
    clip-path: polygon(0 16%, 100% 12%, 100% 100%, 0% 100%);
  }
  50%{
    clip-path: polygon(0 40%, 100% 44%, 100% 100%, 0% 100%);
  }
  70%{
    clip-path: polygon(0 69%, 100% 66%, 100% 100%, 0% 100%);
  }
  100%{
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  }
`;

const Container = styled.div`
	  width: 100%;
    margin: auto;
    position: relative;
  svg {
		height: 100%;
    max-height: 50vh;
    color: #fff;
    margin : auto;
    display: block;
    z-index: 3;
      position: relative;

    g {
      fill: #ffffff; 
    }

		.beer {
			animation-name: ${empty};
			animation-fill-mode: forwards;
			animation-duration: 4s;
			animation-timing-function: linear;
			fill: #F8A928;
      
		}
	}
`;

const Text = styled.div`
	  position: absolute;
    width: 8vw;
    top: 2vh;
    color: #fff;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    h2 {
      margin-bottom: 5vh;
      font-size: 30px;
    }

    p {
      font-size: 18px;
      text-transform: capitalize;
    }
`;


function PageNotFound() {
  return (
    <Container>
      <Text>
        <h2>404</h2>
        <p>page not found, enjoy a fresh beer before you go back</p>
      </Text>
      <svg height="70vh" version="1.1" viewBox="0 0 182.93 341.06" xmlns="http://www.w3.org/2000/svg">

        <g transform="matrix(1.3333 0 0 1.3333 -374.99 -202.44)">
          <path d="m384.21 156.42-64.999-1.0783c-9.5734 2.512-13.856 5.4508-13.856 5.4508s1.7932 24.581-17.155 72.461c-11.267 28.934-12.034 59.659 22.02 86.288 15.106 12.034 28.421 24.069 29.189 37.126 1.0234 16.642 1.536 30.983-17.923 38.92s-24.324 7.937-25.092 12.034h106.77c-1.0252-3.8418-5.8886-3.8418-25.092-11.779v-9.1e-4c-19.459-7.937-18.691-22.02-17.923-38.92 0.76801-13.315 14.083-25.349 29.189-37.126 34.053-26.885 33.542-57.611 22.018-86.544-18.948-47.881-17.155-72.461-17.155-72.461 0 9.8e-4 -3.0976-2.1671-9.9936-4.3706 0.37695 13.491 12.537 55.409 20.27 91.341 7.6819 19.459-3.8605 46.649-27.161 65.084-6.9138 5.3779-10.498 9.2177-16.642 16.387 0 0-2.0486 2.8166-10.241 2.8166-8.2018 0-10.248-2.8166-10.248-2.8166h-9e-5c-6.1456-7.4245-9.9859-11.009-16.642-16.387-23.301-18.18-32.788-47.009-25.106-66.725 12.962-48.894 18.979-83.099 20.772-90.779" stroke-width=".45723" />
          <path style={{zIndex: 3}} className='beer' d="m340.58 323.86c-6.2274-3.5948-11.455-10.727-18.551-16.756-24.838-20.382-28.241-47.228-20.052-69.332 13.817-54.816 18.36-73.867 20.272-82.477 6.8235-2.2967 13.024-2.0127 28.036-2.0127h1.0928c15.012 0 22.112 0.0493 28.936 2.6322 1.9115 8.8984 10.588 42.758 18.831 83.043 8.1886 21.816 5.0443 47.478-19.794 68.147-7.3698 6.0293-11.783 13.285-18.008 16.756 0 0-2.0759 1.3638-10.377 1.3638-8.3109 0-10.385-1.3638-10.385-1.3638z" />
        </g>
      </svg>
    </Container>
  )
}

export default PageNotFound