import React, {useContext} from 'react'

import Button from '@material-ui/core/Button'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { Link } from 'react-router-dom'


import {GlobalContext} from './../../../GlobalContext'

export default function BackdropHeader() {

    let {
        projects,
        colors,
        theme
    } = useContext(GlobalContext)

    let {
        closeProject,
        project
    } = projects
    
    let headerLink
    if (project === 'tlb') {
        headerLink = (
            <a 
                href="https://thelotbroker.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="m-p-backdrop-header-link">
                TheLotBroker.com
            </a>
        )
    } else if (project === 'rsr') {
        headerLink = (
            <a 
                href="https://rankedspikerush.gg/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="m-p-backdrop-header-link">
                RankedSpikeRush.gg
            </a>
        )
    } else if (project === 'mat') {
        headerLink = (
            <a 
                href="https://mtaylor124.github.io/Mattcersize-Client/#/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="m-p-backdrop-header-link">
                Mattcersize
            </a>
        )
    } else if (project === 'blg') {
        headerLink = (
            <Link 
                className="m-p-backdrop-header-link"
                to='/blog'
                onClick={() => closeProject() }>
                        Blog (in development)
            </Link>
        )
    }

    const closeButton = {
        padding: 0,
        minHeight: 0,
        minWidth: 0
    }
    const closeIcon = {
        // color: colors.primary,
        color:  colors.fadedCloseIcon,
        fontSize: theme.fonts.projects.closeIcon,
        marginRight: '5px',
        marginLeft: '25px'
    }

    return (
        <div className='m-backdrop-header'>
            {headerLink}
            <Button 
                style={closeButton}
                onClick={() => closeProject()}>
                <CloseRoundedIcon style={closeIcon} />
            </Button>
        </div>
    )
}