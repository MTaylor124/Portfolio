import React from 'react'

import GALogo from './generalAssembly.png'

export default function ExperienceMobile() {

    return (
        <div className='m-overview-container'>
            <div className='m-section-container'>
                <div className="m-experience-container">
                    <div className="m-experience-header">
                        Experience
                    </div>
                    <img src={GALogo} alt='general assembly' className='m-experience-ga-pic'/>
                    <div className='m-experience-sei'>
                        Software Engineering Immersive
                    </div>
                    <div className="m-experience-date">
                        SEI03 · 2019 · June 10 - August 28th
                    </div>
                    <div className="m-experience-body">
                        I learned and built 3 full stack projects with various 
                        technologies including HTML5/CSS3, JavaScript, Ruby on 
                        Rails, and React.js during this 500+ hour immersive. 
                        Each project had a 4 day development period and features 
                        a fully functional front-end with a bug-free UI in 
                        addition to a CRUD-ready back-end with at least one 
                        resource with varying relationships to the user(s) and 
                        each other. Of the 3 projects, one was developed in a 
                        team of 4 and resulted in success throughout our 
                        sprint-focused development timeline.
                    </div>
                </div>
            </div>
        </div>
    )
}