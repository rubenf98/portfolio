import React from 'react';
import styled from 'styled-components';
import { dimensions } from '../helper';
import Header from './HomeSections/Header';
import About from './HomeSections/About';
import Sentence from './HomeSections/Sentence';
import Projects from './HomeSections/Projects';
import Publications from './HomeSections/Publications';
import Keywords from './HomeSections/Keywords';


function Homepage() {

    return (
        <div>
            <Header />
            {/* <Keywords /> */}
            <Sentence />
            <About />
            <Projects />
            <Publications />
            {/* 
            <Keywords />
            <About />
            

            
            <Contact /> */}
        </div>
    );
}

export default Homepage;
