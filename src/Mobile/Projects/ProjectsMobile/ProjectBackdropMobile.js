import React, {useContext} from 'react'

import Backdrop from '@material-ui/core/Backdrop'


import Header from './Header'
// import BackdropFooter from './BackdropFooter'
import TheLotBrokerProject from './TheLotBrokerProject'
import RankedSpikeRushProject from './RankedSpikeRushProject'
import MattcersizeProject from './MattcersizeProject'
import PortfolioProject from './PortfolioProject'

import {GlobalContext} from '../../../GlobalContext'

export default function ProjectBackdropMobile() {

    let {
       projects
    } = useContext(GlobalContext)

    let {
        project,
        viewingProject
    } = projects

    const backdrop = {
        zIndex: 100, 
        height: '105vh', 
        width: '100vw', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

    let projectContent

    if (project === 'tlb') {
        projectContent = (
            <TheLotBrokerProject />
        )
    } else if (project === 'rsr') {
        projectContent = (
            <RankedSpikeRushProject />
        )
    } else if (project === 'mat') {
        projectContent = (
            <MattcersizeProject />
        )
    } else if (project === 'blg') {
        projectContent = (
            <PortfolioProject />
        )
    } 

    return (
        <Backdrop 
            open={viewingProject} 
            style={backdrop} 
            transitionDuration={300}>
            <div className='m-backdrop-container'>
                <Header />
                {projectContent}
            </div>
            <div className="m-scroll-fix-large"></div>
        </Backdrop>
        
    )
}