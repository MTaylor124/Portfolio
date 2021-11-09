import React, {
    useContext
} from 'react'

import Button from '@material-ui/core/Button'

import ProjectBackdropMobile from './ProjectBackdropMobile'

import LotBrokerPic from './../previews/newlotbrokerpreview.png'
// import SpikeRushPreview from './../previews/spikerushpreview.png'
import NewSpikeRushPreview from './../previews/newspikerushpreview.png'
// import PortfolioPreview from './../previews/portfoliopreview.png'
import BlogPreview from './../previews/blogpreview.png'
import MattcersizePreview from './../previews/mattcersizepreview.png'


import {GlobalContext} from '../../../GlobalContext'

export default function ProjectsMobile() {

    let {
        projects,
        colors
    } = useContext(GlobalContext)

    let {
        openProject
    } = projects

    const projectButton = {
        backgroundColor: colors.primary,
        marginBottom: '15px',
        width: '97vw',
        padding: 0
    }
    return (
        <div className='m-section-container'>
            <ProjectBackdropMobile />
            <div className='m-projects-container'>
                <div className="m-project-header">
                    Projects
                </div>
                <div className="m-projects-subheader">
                    Click for more details
                </div>
                <Button 
                    style={projectButton}
                    onClick={() => { openProject('tlb') }}>
                    <div className='m-individual-project-container'>

                        <img src={ LotBrokerPic} alt='the lot broker preview' className='m-projects-image-preview'/>

                        <div className="m-project-info-header">
                            TheLotBroker.com
                        </div>
                    </div>
                </Button>
                <Button 
                    style={projectButton}
                    onClick={() => { openProject('rsr') }}>
                    <div className='m-individual-project-container'>
                        <img src={NewSpikeRushPreview} alt='spike rush preview' className='m-projects-image-preview'/>
                        <div className="m-project-info-header">
                            RankedSpikeRush.gg
                        </div>
                    </div>
                </Button>
                <Button 
                    style={projectButton}
                    onClick={() => { openProject('blg') }}>
                    <div className='m-individual-project-container'>
                        <img src={BlogPreview} alt='blog' className='m-projects-image-preview'/>
                        <div className="m-project-info-header">
                            Blog (in development)
                        </div>
                    </div>
                </Button>
                <Button 
                    style={projectButton}
                    onClick={() => { openProject('mat') }}>
                    <div className='m-individual-project-container'>
                        <img src={MattcersizePreview} alt='mattcersize preview' className='m-projects-image-preview'/>
                        <div className="m-project-info-header">
                            Mattcersize
                        </div>
                    </div>
                </Button>
            </div>
        </div>
    )
}