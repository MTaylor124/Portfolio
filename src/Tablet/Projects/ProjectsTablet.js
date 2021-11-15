import React, {
    useContext
} from 'react'

import Button from '@material-ui/core/Button'

import ProjectBackdropTablet from './ProjectBackdropTablet'

import LotBrokerPic from './previews/thelotbrokerpreview.png'
import SpikeRushPreview from './previews/spikerushpreview.png'
import PortfolioPreview from './previews/portfoliopreview.png'
import MattcersizePreview from './previews/mattcersizepreview.png'


import {ProjectContext} from './ProjectContext'

export default function ProjectsTablet() {

    let {
        openProject
    } = useContext(ProjectContext)

    return (
        <div className='t-section-container'>
            <ProjectBackdropTablet />
            <div className='t-projects-container'>
                <div className="d-project-header">
                    Projects
                </div>
                <div className="d-projects-subheader">
                    Click on a project for more details
                </div>
                <Button onClick={() => { openProject(1) }}>
                    <div className='t-individual-project-container'>

                        <img src={ LotBrokerPic} alt='the lot broker preview' className='t-projects-image-preview'/>
                        <div className='t-project-info-container'>
                            <div className="d-project-info-header">
                                TheLotBroker.com
                            </div>
                            <div className="d-project-info-type-header">
                                Type: 
                            </div>
                            <div className="d-project-info-type">
                                Freelance
                            </div>
                            <div className="d-project-tech-header">
                                Tech used:
                            </div>
                            <div className="d-project-tech">
                                React.js, Google Firebase, Material-UI
                            </div>
                        </div>
                    </div>
                </Button>
                <Button onClick={() => { openProject(2) }} >
                    <div className='t-individual-project-container'>
                        <div className='t-project-info-container'>
                            <div className="d-project-info-header">
                                RankedSpikeRush.gg
                            </div>
                            <div className="d-project-info-type-header">
                                Type: 
                            </div>
                            <div className="d-project-info-type">
                                Personal
                            </div>
                            <div className="d-project-tech-header">
                                Tech used:
                            </div>
                            <div className="d-project-tech">
                                React.js, Google Firebase, Material-UI
                            </div>
                        </div>
                        <img src={SpikeRushPreview} alt='spike rush preview' className='t-projects-image-preview'/>
                    </div>
                </Button>
                <Button onClick={() => { openProject(3) }} >
                    <div className='t-individual-project-container'>
                        <img src={MattcersizePreview} alt='mattcersize preview' className='t-projects-image-preview'/>
                        <div className='t-project-info-container'>
                            <div className="d-project-info-header">
                                Mattcersize
                            </div>
                            <div className="d-project-info-type-header">
                                Type: 
                            </div>
                            <div className="d-project-info-type">
                                Capstone Project
                            </div>
                            <div className="d-project-tech-header">
                                Tech used:
                            </div>
                            <div className="d-project-tech">
                                React.js, Express.js, MongoDB
                            </div>
                        </div>
                    </div>
                </Button>
                <Button onClick={() => { openProject(4) }} >
                    <div className='t-individual-project-container'>
                        <div className='t-project-info-container'>
                            <div className="d-project-info-header">
                                Portfolio
                            </div>
                            <div className="d-project-info-type-header">
                                Type: 
                            </div>
                            <div className="d-project-info-type">
                                Personal
                            </div>
                            <div className="d-project-tech-header">
                                Tech used:
                            </div>
                            <div className="d-project-tech">
                                React.js, Google Firebase, Material-UI
                            </div>
                        </div>
                        <img src={PortfolioPreview} alt='spike rush preview' className='t-projects-image-preview'/>
                    </div>
                </Button>
            </div>
        </div>
    )
}