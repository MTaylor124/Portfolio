import React from 'react'
import ExperienceBackdrop from './Desktop/ExperienceBackdrop'
import Button from '@material-ui/core/Button'
import { experienceData } from './ExperienceData'

export const ExperienceDesktop = () => {

    const experienceButton = {
        display: 'flex',
        flexDirection: 'row',
        justifyContext: 'flex-start',
        alignItems: 'center',
        textTransform: 'none',
        width: '96%',
        marginBottom: '5px',
        paddingTop: '7px',
        paddingBottom: '7px'
    }

    return (
        <div className='d-section-container'>
            <ExperienceBackdrop />
            <div className="d-experience-container">
                <header>Experience</header>
                <p>Click for more Details</p>

                {experienceData.map(exp => {
                    return (
                        <Button style={experienceButton} onClick={() => console.log('click')} key={exp.id}>
                            <div className="left">
                                <header>{exp.buttonHeader}</header>
                                <p>{exp.buttonSubHeader}</p>
                            </div>
                            <div className="right">
                                <img src={exp.preview} alt={exp.name} className='exp-preview'/>
                            </div>
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}