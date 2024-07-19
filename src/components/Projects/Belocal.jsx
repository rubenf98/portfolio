import React from 'react'
import ProjectPage from '../ProjectPage'
import { connect } from 'react-redux';

function Belocal(props) {
    const { text, fields } = require('../../assets/' + props.language + "/projects");
    const content = text.belocal

    return (
        <ProjectPage
            color={content.color}
            title={content.title}
            subtitle={content.subtitle}
            imageSrc={"/image/projects/" + content.image + "/"}
            motivation={(
                <div className='row'>
                    <div className='column'>
                        <h3>{fields.about}</h3>
                        <p>{content.about}</p>

                        <a href={content.url} target="_blank">{fields.link}</a>
                    </div>
                    <div className='column'>
                        <h3>{fields.client}</h3>
                        <p>{content.title}</p>

                        <h3>{fields.focus}</h3>
                        <p>{content.focus} </p>
                    </div>
                </div>
            )}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(
    mapStateToProps,
    null
)(Belocal);