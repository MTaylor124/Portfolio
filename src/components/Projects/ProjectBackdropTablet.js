import React, {useContext} from 'react'

import Backdrop from '@material-ui/core/Backdrop'


// import BackdropHeader from './BackdropHeader'
// import BackdropFooter from './BackdropFooter'
import TheLotBrokerProject from './ProjectsTablet/TheLotBrokerProject'
import RankedSpikeRushProject from './ProjectsTablet/RankedSpikeRushProject'
import MattcersizeProject from './ProjectsTablet/MattcersizeProject'
import PortfolioProject from './ProjectsTablet/PortfolioProject'
// import HackathonProject from './ProjectsTablet/HackathonProject'

import {ProjectContext} from './ProjectContext'

export default function ProjectBackdropTablet() {

    let {
       viewProject,
       projectNumber
    } = useContext(ProjectContext)

    let projectContent

    if (projectNumber === 1) {
        projectContent = (
            <TheLotBrokerProject />
        )
    } else if (projectNumber === 2) {
        projectContent = (
            <RankedSpikeRushProject />
        )
    } else if (projectNumber === 3) {
        projectContent = (
            <MattcersizeProject />
        )
    } else if (projectNumber === 4) {
        projectContent = (
            <PortfolioProject />
        )
    } else if (projectNumber === 5) {
        // projectContent = (
        //     <HackathonProject />
        // )
    } else {
        projectContent = ''
    } 

    return (
        <Backdrop open={viewProject} style={{zIndex: 100}} transitionDuration={500}>
            <div className='d-backdrop-container'>
                {/* <BackdropHeader /> */}
                {projectContent}
                {/* <BackdropFooter /> */}
            </div>
        </Backdrop>
        
    )
}