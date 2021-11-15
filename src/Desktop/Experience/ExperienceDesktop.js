import React, { useState } from 'react'
import ExperienceBackdrop from './ExperienceBackdrop'
import Button from '@material-ui/core/Button'
import { experienceData } from '../../Data/ExperienceData'
import disableScroll from 'disable-scroll'

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

    const [expInfo, setExpInfo] = useState({ open: false, current: null })

    const exp = experienceData.filter(x => x.name === expInfo.current)[0]

    const showExp = (name) => {
        disableScroll.on()
        setExpInfo({ open: true, current: name})
    }

    return (
        <div className='d-section-container'>
            <ExperienceBackdrop exp={exp} setExpInfo={setExpInfo} expInfo={expInfo}/>
            <div className="d-experience-container">
                <header>Experience</header>
                <p>Click for more Details</p>
                {experienceData.map(exp => (
                    <Button style={experienceButton} onClick={() => showExp(exp.name)} key={exp.id}>
                        <div className="left">
                            <header>{exp.buttonHeader}</header>
                            <p>{exp.buttonSubHeader}</p>
                        </div>
                        <div className="right">
                            <img src={exp.preview} alt={exp.name} className='exp-preview'/>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}