import React, {useContext} from 'react'
import {GlobalContext} from './../../../GlobalContext'

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import EditIcon from '@material-ui/icons/Edit'

export default function MattcersizeProject() {

    let {
        colors
    } = useContext(GlobalContext)
    
    const icons = {
        color: colors.secondaryDark,
        fontSize: '40px'
    }

    return (
        <div className='m-p-backdrop-body'>
            <div className="m-p-b-about-container">
                <div className="m-p-b-about-body">
                    Mattcersize is a mobile-friendly Workout + Exercise tracker 
                    that was my final project during my time at General Assembly. 
                    This SPA was inteded to solve a real-world problem for me which 
                    was not having a record of my exercise progression over time. I plan 
                    to revisit Mattcersize down the road and to convert it into a 
                    fully fledged native application for Android and IOS.
                </div>
            </div>
            <div className="m-p-b-features-container">
                <div className="m-p-b-features-item-container">
                    <div className="m-v-b-features-label">
                        <div className="m-p-b-feature-name">
                            Mobile Friendly
                        </div>
                        <div className="m-p-b-feature-description">
                            Web application was built from the ground-up to 
                            be optimized on mobile platforms.
                        </div>
                    </div>
                    <div className="m-p-b-features-icon">
                        <PhoneAndroidIcon style={icons}/>
                    </div>
                </div>
                <div className="m-p-b-features-item-container">
                    <div className="m-v-b-features-label">
                        <div className="m-p-b-feature-name">
                            Resource Control
                        </div>
                        <div className="m-p-b-feature-description">
                            Full CRUD control for users for their own workouts 
                            and exercises.
                        </div>
                    </div>
                    <div className="m-p-b-features-icon">
                        <EditIcon style={icons}/>
                    </div>
                </div>
            </div>
            <div className="m-p-b-tech-container">
                <div className="m-p-b-tech-item">
                    <div className="m-p-b-item-header">
                        React.js
                    </div>
                    <div className="m-p-b-item-info">
                        Created Custom and Reusable Components
                    </div>
                </div>
                <div className="m-p-b-tech-item">
                    <div className="m-p-b-item-header">
                        Express.js
                    </div>
                    <div className="m-p-b-item-info">
                        Wrote custom security features for authentication 
                        and to CRUD resources.
                    </div>
                </div>
                <div className="m-p-b-tech-item">
                    <div className="m-p-b-item-header">
                        Heroko / MongoDB
                    </div>
                    <div className="m-p-b-item-info">
                        Utilized for databases
                    </div>
                </div>
            </div>
        </div>
    )
}