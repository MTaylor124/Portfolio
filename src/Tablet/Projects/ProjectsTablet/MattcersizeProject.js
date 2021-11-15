import React from 'react'

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import EditIcon from '@material-ui/icons/Edit'

export default function MattcersizeProject() {

    const iconStyle = {
        color: 'teal',
        fontSize: '40px'
    }

    return (
        <div className='t-backdrop-body'>
                <div className="t-b-b-header">
                    <a href="https://mtaylor124.github.io/Mattcersize-Client/#/" target="_blank" rel="noopener noreferrer" className="t-b-b-header-link">
                        <div className='t-b-b-header-style'>
                            Mattcersize
                        </div>
                    </a>
                </div>
                <div className="t-b-b-body">
                    <div className="t-b-b-about-container">
                        <div className="t-b-b-about-header">
                            About:
                        </div>
                        <div className="t-b-b-about-body">
                            Mattcersize is a mobile-friendly Workout + Exercise tracker 
                            that was my final project during my time at General Assembly. 
                            This SPA was inteded to solve a real-world problem for me which 
                            was not having a record of my exercise progression over time. I plan 
                            to revisit Mattcersize down the road and to convert it into a 
                            fully fledged native application for Android and IOS.
                        </div>
                    </div>
                    <div className="t-b-b-features-container">
                        <div className="t-b-b-features-header">
                            Key Features:
                        </div>
                        <div className="t-b-b-features-list">
                            <div className="t-b-b-features-item-container">
                                <div className="t-b-b-features-icon">
                                    <PhoneAndroidIcon style={iconStyle}/>
                                </div>
                                <div className="t-b-b-features-label">
                                    <div className="t-b-b-feature-name">
                                        Mobile Friendly
                                    </div>
                                    <div className="t-b-b-feature-description">
                                        Web application was built from the ground-up to 
                                        be optimized on mobile platforms.
                                    </div>
                                </div>
                            </div>
                            <div className="t-b-b-features-item-container">
                                <div className="t-b-b-features-icon">
                                    <EditIcon style={iconStyle}/>
                                </div>
                                <div className="t-b-b-features-label">
                                    <div className="t-b-b-feature-name">
                                        Resource Control
                                    </div>
                                    <div className="t-b-b-feature-description">
                                        Full CRUD control for users for their own workouts 
                                        and exercises.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="t-b-b-tech-container">
                        <div className="t-b-b-tech-header">
                            Tech Used:
                        </div>
                        <div className="t-b-b-tech-item">
                            <div className="t-b-b-item-header">
                                React.js
                            </div>
                            <div className="t-b-b-item-info">
                                Created Custom and Reusable Components
                            </div>
                        </div>
                        <div className="t-b-b-tech-item">
                            <div className="t-b-b-item-header">
                                Express.js
                            </div>
                            <div className="t-b-b-item-info">
                                Wrote custom security features for authentication 
                                and to CRUD resources.
                            </div>
                        </div>
                        <div className="t-b-b-tech-item">
                            <div className="t-b-b-item-header">
                                Heroko / MongoDB
                            </div>
                            <div className="t-b-b-item-info">
                                Utilized for databases
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}