import React, { useState} from 'react'
import ProjectBackdrop from './ProjectBackdrop'
import {includedProjects} from './ProjectData'
import Button from '@material-ui/core/Button'
import disableScroll from 'disable-scroll'

export const ProjectsDesktop = () => {

    const projectButton = {
        background: 'linear-gradient( 0.45turn, rgb(0, 66, 104) 0%, rgb(1, 96, 151) 15%, rgb(0, 112, 177) 32%, rgb(0, 69, 133) 37%, rgb(0, 118, 133) 95%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContext: 'flex-start',
        alignItems: 'center',
        textTransform: 'none',
        width: '100%',
        padding: '4px 0 0',
        borderRadius: '15px'
    }

    const [projInfo, setProjInfo] = useState({ open: false, current: null })

    const proj = includedProjects.filter(x => x.name === projInfo.current)[0]

    const showProj = (name) => {
        disableScroll.on()
        setProjInfo({open: true, current: name})
    }

    return (
        <div className='d-section-container'>
            <ProjectBackdrop info={projInfo} setProjInfo={setProjInfo} proj={proj}/>
            <div className='d-projects-container'>
                <div className="header">Projects</div>
                <div className="subheader">Click on a project for more details</div>
                <div className="grid-container">
                    {includedProjects.map(projectItem => {
                        return (
                            <div className="item" key={projectItem.id}>
                                <Button style={projectButton} onClick={() => showProj(projectItem.name)}>
                                    <div className="d-projects-new-container">
                                        <img src={projectItem.preview} alt={`${projectItem.name}`} className='d-projects-image-preview'/>
                                        {projectItem.buttonText}
                                    </div>
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}