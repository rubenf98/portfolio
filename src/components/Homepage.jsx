import React from 'react';
import Header from './HomeSections/Header';
import About from './HomeSections/About';
import Projects from './HomeSections/Projects';
import Publications from './HomeSections/Publications';
import { connect } from 'react-redux';


function Homepage({ language }) {
    const { text } = require('../assets/' + language + "/homepage");
    return (
        <div>
            <Header text={text.header} />
            {/* <Keywords /> */}
            {/* <Sentence /> */}
            <About text={text.about} />
            <Projects text={text.projects} />
            <Publications text={text.publications} />
            {/* 
            <Keywords />
            <About />
            

            
            <Contact /> */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(
    mapStateToProps,
    null
)(Homepage);
