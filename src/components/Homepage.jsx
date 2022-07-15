import React from 'react';
import styled from 'styled-components';
import { dimensions } from '../helper';
import Header from './HomeSections/Header';
import About from './HomeSections/About';
import Sentence from './HomeSections/Sentence';
import Projects from './HomeSections/Projects';


function Homepage() {

    return (
        <div>
            <Header />
            <Sentence />
            <About />
            <Projects />
            {/* 
            <Keywords />
            <About />
            

            <Publications />
            <Contact /> */}
        </div>
    );
}

export default Homepage;
