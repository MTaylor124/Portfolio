import React, {
    // useContext
} from 'react'
// import {GlobalContext} from './../../../GlobalContext'

// import SpeedIcon from '@material-ui/icons/Speed'
import EditIcon from '@material-ui/icons/Edit'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import TouchAppIcon from '@material-ui/icons/TouchApp'

export default function PortfolioProject() {
    // let {
    //     colors
    // } = useContext(GlobalContext)

    const icons = {
        // color: colors.secondaryDark,
        color: 'rgb(0, 69, 133)',
        fontSize: '40px'
    }
    return (
        <div className='d-backdrop-body myfont'>
                <div className="d-b-b-body">
                    <div className="d-b-b-about-container">
                        <div className="d-b-b-about-header myfont">
                            About
                        </div>
                        <div className="d-b-b-about-body">
                            My blog is currently a personal project of mine that I plan to include as an extension of my portfolio. 
                            The blog interface currently allows users to write their own blogs that are divided into several sections and 
                            can view or edit them while interacting with a smooth yet elegant user interface.
                        </div>
                    </div>
                        <div className="d-b-b-features-list">
                            <div className="d-b-b-features-header">
                                Highlights
                            </div>

                            <div className="d-b-b-features-item-container">
                                <div className="d-b-b-features-icon">
                                    <PhoneAndroidIcon style={icons}/>
                                </div>
                                <div className="d-b-b-features-label">
                                    <div className="d-b-b-feature-name">
                                        Mobile Optimized
                                    </div>
                                    <div className="d-b-b-feature-description">
                                        Web application was built from the ground-up to 
                                        be optimized on Mobile viewports
                                    </div>
                                </div>
                            </div>

                            <div className="d-b-b-features-item-container">
                                <div className="d-b-b-features-icon">
                                    <EditIcon style={icons}/>
                                </div>
                                <div className="d-b-b-features-label">
                                    <div className="d-b-b-feature-name">
                                        Creative Control
                                    </div>
                                    <div className="d-b-b-feature-description">
                                        I built the blog interface to be efficient and responsive for users to create and edit Blog Posts
                                    </div>
                                </div>
                            </div>
                            <div className="d-b-b-features-item-container">
                                <div className="d-b-b-features-icon">
                                    <TouchAppIcon style={icons}/>
                                </div>
                                <div className="d-b-b-features-label">
                                    <div className="d-b-b-feature-name">
                                        Responsive Feedback
                                    </div>
                                    <div className="d-b-b-feature-description">
                                        Every action has immediate user feedback as well as loading animations and transitions for a smooth mobile experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="d-b-b-tech-container">
                        <div className="d-b-b-tech-header">
                            Tech
                        </div>
                        <div className="d-b-b-tech-item">
                            <div className="d-b-b-item-header">
                                React
                            </div>
                            <div className="d-b-b-item-info">
                                Created Custom and Reusable Components and utilized Context for State Management
                            </div>
                        </div>
                        <div className="d-b-b-tech-item">
                            <div className="d-b-b-item-header">
                                MySQL
                            </div>
                            <div className="d-b-b-item-info">
                                Utilized Google Firebase for non-relational databases for Blog Data
                            </div>
                        </div>
                        <div className="d-b-b-tech-item">
                            <div className="d-b-b-item-header">
                                CSS3
                            </div>
                            <div className="d-b-b-item-info">
                                Used CSS and Object Oriented CSS with Material-UI
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}