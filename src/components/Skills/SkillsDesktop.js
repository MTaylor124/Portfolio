import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { includedSkills } from "./SkillsData"

export const SkillsDesktop = () => {
    const accordion = { backgroundColor: 'rgba(0, 118, 133, 0)', width: '65%', boxShadow: 'none', border: 'none', minHeight: '0px' }
    const summary = { padding: '0px',  minHeight: '10px', fontSize: '1.8rem', textDecorationColor: 'rgb(0, 69, 133)', backgroundColor: 'rgba(255, 255, 255, 0.25)' }
    const details = { boxShadow: 'none', border: 'none', paddingTop: '0' }

    const skillUnderlineList = includedSkills.map(item => false)

    const handleToggleUnderline = (i, id) => {
        const nodeStyle = document.getElementById(`${id}-header`).style
        if (!skillUnderlineList[i]) nodeStyle.textDecoration = 'underline'
        else nodeStyle.textDecoration = 'none'
        skillUnderlineList[i] = !skillUnderlineList[i]
    }

    return (
        <div className='d-section-container'>
            <div className="d-skills-container">
                <header>Skills</header>
                <p>Click to Expand</p>
                {includedSkills.map((skill, i) => (
                    <Accordion style={accordion} key={skill.id} onChange={() => handleToggleUnderline(i, skill.id)} sx={{ '&:before': { display: 'none' }}} disableGutters TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary style={summary} aria-controls={`panel${i}-content`} id={`panel${i}-header`}>
                            <div className='skill-underline'><header id={`${skill.id}-header`}>{skill.buttonText}</header></div>
                        </AccordionSummary>
                        <AccordionDetails style={details}>
                            {skill.about ? <h2>{skill.about}</h2> : <></>}
                            {skill.sections.map(section => (
                                <section key={section.id}>
                                    <h3>{section.header}</h3>
                                    {section.points.map(point => <h4 key={point.id}>{point.body}</h4>)}
                                </section>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}