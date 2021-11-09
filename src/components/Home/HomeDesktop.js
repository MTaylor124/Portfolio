import React from 'react'

import InfoDesktop from './Info/InfoDesktop'

import {Contact} from './../Contact/Contact'
import {Experience} from './../Experience/Experience'
// import Interests from './../Interests/Interests'
import {Projects} from './../Projects/Projects'
import {Skills} from './../Skills/Skills'

export default function HomeDesktop() {
    return (
        <div className='background-color-fix'>
            <InfoDesktop />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
        </div>
    )
}