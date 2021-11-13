import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { includedSkills } from "./SkillsData"

export const SkillsDesktop = () => {
    const accordion = { backgroundColor: 'rgba(0, 118, 133, 0)', width: '65%', boxShadow: 'none', border: 'none', minHeight: '0px' }
    const summary = { padding: '0px',  minHeight: '10px', fontSize: '1.8rem', textDecorationColor: 'rgb(0, 69, 133)' }
    const details = { boxShadow: 'none', border: 'none', paddingTop: '0' }

    const skillUnderlineList = includedSkills.map(item => false)

    const handleToggleUnderline = (i, id) => {
        if (!skillUnderlineList[i]) document.getElementById(`${id}-header`).style.textDecoration = 'underline'
        else document.getElementById(`${id}-header`).style.textDecoration = 'none'
        skillUnderlineList[i] = !skillUnderlineList[i]
    }

    return (
        <div className='d-section-container'>
            <div className="d-skills-container">
                <header>Skills</header>
                <p>Click to Expand</p>
                {includedSkills.map((skill, i) => (
                    <Accordion style={accordion} key={skill.id} onChange={() => handleToggleUnderline(i, skill.id)} sx={{'&:before': {display: 'none'}}} disableGutters TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary style={summary} aria-controls={`panel${i}-content`} id={`panel${i}-header`} className='skill-underline'>
                            <header id={`${skill.id}-header`}>{skill.buttonText}</header>
                        </AccordionSummary>
                        <AccordionDetails style={details}>
                            {skill.sections.map(section => (
                                <div className="d-skills-details-container" key={section.id}>
                                    <div className="d-skills-details-header">{section.header}</div>
                                    {section.points.map(point => <div key={point.id} className="d-skills-info">{point.body}</div>)}
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}