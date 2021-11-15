import React from 'react'

import { InfoDesktop } from './InfoDesktop'
import { ContactDesktop } from '../Contact/ContactDesktop'
import { ExperienceDesktop } from '../Experience/ExperienceDesktop'
import { ProjectsDesktop } from '../Projects/ProjectsDesktop'
import { SkillsDesktop } from '../Skills/SkillsDesktop'

export const HomeDesktop = () =>  (
    <div className='background-color-fix'>
        <InfoDesktop />
        <ProjectsDesktop />
        <ExperienceDesktop />
        <SkillsDesktop />
        <ContactDesktop />
    </div>
)
