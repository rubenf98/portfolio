import React from 'react'
import ProjectPage from '../ProjectPage'

function Wave() {
    return (
        <ProjectPage
            title="Wave Labs"
            subtitle="Interaquatic dashboard that tries to understand how the ocean works, through Mobile Apps, IoT devices, AI algorithms and interactive environments."
            imageSrc="/images/projects/wave/"
            galleryText={[
                "Explore underwater, surface and aerial aquatic assessments by citizen scientists",
                "Survive sensing in harsh aquatic environments",
                "Identify marine species or debris with deep learning"
            ]}
            motivation={(
                <div className='row'>
                    <div className='column'>
                        <p>People and wildlife are at serious risks, unless urgent action is taken to mitigate and hopefully reverse the loss of plants and animals on which our ecosystems depends for food, clean water and a stable climate.</p>
                        <p>Oceans are a crucial driver of Earth ecosystems. They cover three-quarters of the planet's surface, contain 97% of the Earth's water and absorb 30% of the carbon emissions acting as a buffer for global warming.</p>
                    </div>
                    <div className='column'>
                        <p>Careful management of this essential global resource is a key feature of a sustainable future recognized by the United Nations (UN) Sustainable Development Goal (SDG) 14 - Life Below Water, targeting the conservation and sustainable use of oceans, seas and marine resources.</p>
                    </div>
                </div>
            )}
            solution={(
                <div className='row'>
                    <div className='column'>
                        <p>Wave is an interactive dashboard which directly contributes to motivation by understanding the impact of human presence on marine environment.</p>
                        <p>It provides an insight to recent cetacean sightings, underwater taxa, marine litter, sea vessels, including the acoustics and footage of marine flora and fauna near Madeira island.</p>
                    </div>
                    <div className='column'>
                        <p>It uses latest cutting edge algorithms and machine learning for estimating the location as well as passive acoustic monitoring, ubiquitous computing, long-range radio communication and Internet of Things.</p>
                    </div>
                </div>
            )}
        />
    )
}

export default Wave