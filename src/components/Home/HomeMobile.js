import React from 'react'

import Contact from './../Contact/Contact'
import Experience from './../Experience/Experience'
import {Projects} from './../Projects/Projects'
import Skills from './../Skills/Skills'
import InfoMobile from './Info/InfoMobile'

export default function HomeMobile() {
    return (
        <div className='m-portfolio-home-container'>
            <InfoMobile />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
        </div>
    )
}