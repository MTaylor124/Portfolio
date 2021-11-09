import React, {useContext} from 'react'
import {GlobalContext} from './../../../GlobalContext'

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import WallpaperIcon from '@material-ui/icons/Wallpaper'
import SpeedIcon from '@material-ui/icons/Speed'

export default function TheLotBrokerProject() {

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
                    Several fellow Rocket League players and I decided to make what 
                    was originally intended to be a joke for a temporary game mode 
                    ended up exploding into a community of over 150+ players. RankedSpikeRush.gg has already hosted 
                    several tournaments including a crowd-funded $175 Prize Tourney that attracted over 50 
                    teams to compete in.
                </div>
            </div>
            <div className="m-p-b-features-container">

                    <div className="m-p-b-features-item-container">
                        <div className="m-b-b-features-label">
                            <div className="m-p-b-feature-name">
                                Mobile Friendly
                            </div>
                            <div className="m-p-b-feature-description">
                                Web application was built from the ground-up to 
                                be optimized on both desktop and mobile platforms.
                            </div>
                        </div>
                        <div className="m-p-b-features-icon">
                            <PhoneAndroidIcon style={icons}/>
                        </div>
                    </div>



                    <div className="m-p-b-features-item-container">
                        <div className="m-b-b-features-label">
                            <div className="m-p-b-feature-name">
                                Animated background
                            </div>
                            <div className="m-p-b-feature-description">
                                Smooth and exciting animated background featuring 
                                highlights from several Spike Rush games. 
                            </div>
                        </div>
                        <div className="m-p-b-features-icon">
                            <WallpaperIcon style={icons}/>
                        </div>
                    </div>
                    <div className="m-p-b-features-item-container">
                        <div className="m-b-b-features-label">
                            <div className="m-p-b-feature-name">
                                Built in 24 Hours
                            </div>
                            <div className="m-p-b-feature-description">
                                The entire multi-platform web application was 
                                successfully planned, developed and built in 
                                less than 24 hours.
                            </div>
                        </div>
                        <div className="m-p-b-features-icon">
                            <SpeedIcon style={icons}/>
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
                        Google Firebase
                    </div>
                    <div className="m-p-b-item-info">
                        Utilized for Hosting
                    </div>
                </div>
                <div className="m-p-b-tech-item">
                    <div className="m-p-b-item-header">
                        Material-UI
                    </div>
                    <div className="m-p-b-item-info">
                        Used for Stylized and Reusable Components
                    </div>
                </div>
                </div>
            </div>
    )
}