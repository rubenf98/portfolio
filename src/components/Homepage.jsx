import React from 'react';
import styled from 'styled-components';
import { dimensions } from '../helper';
import Header from './HomeSections/Header';
import About from './HomeSections/About';
import Sentence from './HomeSections/Sentence';



function Homepage() {

    return (
        <div>
            <Header />
            <Sentence />
            <About />
            {/* 
            <Keywords />
            <About />
            <Projects />

            <Publications />
            <Contact /> */}
        </div>
    );
}

export default Homepage;
