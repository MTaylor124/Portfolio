import React, {
    // useContext
} from 'react'
// import {GlobalContext} from './../../../GlobalContext'

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import EditIcon from '@material-ui/icons/Edit'
import SpeedIcon from '@material-ui/icons/Speed'

export default function MattcersizeProject() {

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
                            Mattcersize is a mobile-friendly Workout + Exercise tracker 
                            that was built in less than 4 days. This was my first fully-fleded React App 
                            that allowed users to catalog their workouts including specific exercises, number of reps and 
                            weight.
                            {/* [Note: MongoLabs is no longer supported by heroku] */}
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
                                        Mobile Friendly
                                    </div>
                                    <div className="d-b-b-feature-description">
                                        Web application was built from the ground-up to 
                                        be optimized on mobile platforms.
                                    </div>
                                </div>
                            </div>
                            <div className="d-b-b-features-item-container">
                                <div className="d-b-b-features-icon">
                                    <EditIcon style={icons}/>
                                </div>
                                <div className="d-b-b-features-label">
                                    <div className="d-b-b-feature-name">
                                        Resource Control
                                    </div>
                                    <div className="d-b-b-feature-description">
                                        Full CRUD control for users for their own workouts 
                                        and exercises.
                                    </div>
                                </div>
                            </div>
                            <div className="d-b-b-features-item-container">
                                <div className="d-b-b-features-icon">
                                    <SpeedIcon style={icons}/>
                                </div>
                                <div className="d-b-b-features-label">
                                    <div className="d-b-b-feature-name">
                                        Built in 4 Days
                                    </div>
                                    <div className="d-b-b-feature-description">
                                        The entire project was planned and built in less than 4 days
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
                                Created Custom and Reusable Components
                            </div>
                        </div>
                        <div className="d-b-b-tech-item">
                            <div className="d-b-b-item-header">
                                Express.js
                            </div>
                            <div className="d-b-b-item-info">
                                Wrote custom security features for authentication 
                                and to CRUD resources.
                            </div>
                        </div>
                        <div className="d-b-b-tech-item">
                            <div className="d-b-b-item-header">
                                Heroko / MongoDB
                            </div>
                            <div className="d-b-b-item-info">
                                Utilized for databases
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}