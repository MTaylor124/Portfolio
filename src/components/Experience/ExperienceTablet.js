import React from 'react'

import GALogo from './generalAssembly.png'
// import GAkitchen from './GAkitchen.jpeg'

export default function ExperienceTablet() {

    return (
        <div className='t-overview-container'>
            <div className='t-section-container'>
                <div className="t-experience-container">
                    <div className="t-experience-header">
                        Experience
                    </div>
                    <img src={GALogo} alt='general assembly' className='t-experience-ga-pic'/>
                    <div className="t-experience-middle-row">
                        <div className="t-experience-middle-left">
                            <div className='t-experience-sei'>
                                Software Engineering Immersive
                            </div>
                            <div className="t-experience-date">
                                SEI03 · 2019 · June 10 - August 28th
                            </div>
                        </div>
                        <div className="t-experience-middle-right">
                            {/* <img src={GAkitchen} alt='general assembly kitchen' className='t-experience-ga-kitchen'/> */}
                        </div>
                    </div>
                    <div className="t-experience-body">
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