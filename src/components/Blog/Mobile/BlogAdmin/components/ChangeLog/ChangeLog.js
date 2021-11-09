import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import Button from '@material-ui/core/Button'

import UpcomingFeatures from './UpcomingFeatures'
import ChangeLogList from './ChangeLogList'

export default function ChangeLog() {
    let {
        changeLog
    } = useContext(BlogContext)

    let {
        exitChangeLog,
        showingUpcomingFeatures,
        toggleShowingUpcomingFeatures
    } = changeLog

    const backArrowStyle = {

    }
    const backButtonStyle = {
        fontSize: '1.1rem',
        padding: '0',
        minHeight: '0',
        minWidth: '0'
    }
    const toggleButton = {
        textTransform: 'none',
        // marginBottom: '20px'
    }
    let buttonMessage, changeLogContent, headerContent
    if (showingUpcomingFeatures) {
        buttonMessage = 'View Changelog'
        changeLogContent = <UpcomingFeatures />
        headerContent = 'Upcoming Features'
    } else {
        buttonMessage = 'View Upcoming Features'
        changeLogContent = <ChangeLogList />
        headerContent = 'Changelog'
    }
    return (
        <div className='m-blog-changelog-container'>
            <div className="m-bc-header">
            <Button
                style={toggleButton}
                variant='contained'
                color='default'
                disableElevation
                onClick={() => toggleShowingUpcomingFeatures() }>
                {buttonMessage}
            </Button>
            <Button
                style={backButtonStyle}
                onClick={() => exitChangeLog()}>
                <div className="primary-theme-color m-blog-view-single-exit">
                    <ArrowBackIosRoundedIcon color='primary' style={backArrowStyle}/>
                    <div className="m-blog-back-button-style2">
                        Back
                    </div> 
                </div>
            </Button>
            </div>
            <div className="m-bc-brand">
                {headerContent}
            </div>
            {changeLogContent}
        </div>
    )
}
