import React from 'react'
import ProjectPage from '../ProjectPage'

function DomDesign() {
    return (
        <ProjectPage
            title="Dom Design"
            subtitle="Interaquatic dashboard that tries to understand how the ocean works, through Mobile Apps, IoT devices, AI algorithms and interactive environments."
            imageSrc="/image/projects/domdesign/"
            galleryText={[
                "Explore underwater, surface and aerial aquatic assessments by citizen scientists",
                "Survive sensing in harsh aquatic environments",
                "Identify marine species or debris with deep learning"
            ]}
            motivation={(
                <div className='row'>
                    <div className='column'>
                        <h3>What's this?</h3>
                        <p>Oceans are a crucial driver of Earth ecosystems. They cover three-quarters of the planet's surface, contain 97% of the Earth's water and absorb 30% of the carbon emissions acting as a buffer for global warming.</p>

                        <a href='https://domdesign.pt/' target="_blank">view website</a>
                    </div>
                    <div className='column'>
                        <h3>Client</h3>
                        <p>Dom Design</p>

                        <h3>Focus</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
            )}
        />
    )
}

export default DomDesign