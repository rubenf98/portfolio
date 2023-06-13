import React from 'react'
import ProjectPage from '../ProjectPage'

function Plaza() {
    return (
        <ProjectPage
            color="#C49A4E"
            title="Plaza II"
            subtitle="Interaquatic dashboard that tries to understand how the ocean works, through Mobile Apps, IoT devices, AI algorithms and interactive environments."
            imageSrc="/image/projects/plaza/"
            motivation={(
                <div className='row'>
                    <div className='column'>
                        <h3>What's this?</h3>
                        <p>Oceans are a crucial driver of Earth ecosystems. They cover three-quarters of the planet's surface, contain 97% of the Earth's water and absorb 30% of the carbon emissions acting as a buffer for global warming.</p>

                        <a href='https://edificioplaza2.com/' target="_blank">view website</a>
                    </div>
                    <div className='column'>
                        <h3>Client</h3>
                        <p>Plaza II</p>

                        <h3>Focus</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
            )}
        />
    )
}

export default Plaza