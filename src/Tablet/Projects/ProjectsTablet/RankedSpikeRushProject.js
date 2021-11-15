import React from 'react'

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import WallpaperIcon from '@material-ui/icons/Wallpaper'
import SpeedIcon from '@material-ui/icons/Speed'

export default function TheLotBrokerProject() {

    const iconStyle = {
        color: 'teal',
        fontSize: '40px'
    }

    return (
        <div className='t-backdrop-body'>
                <div className="t-b-b-header">
                    <a href="https://rankedspikerush.gg/" target="_blank" rel="noopener noreferrer" className="t-b-b-header-link">
                        <div className='t-b-b-header-style'>
                            RankedSpikeRush.gg
                        </div>
                    </a>
                </div>
                <div className="t-b-b-body">
                    <div className="t-b-b-about-container">
                        <div className="t-b-b-about-header">
                            About:
                        </div>
                        <div className="t-b-b-about-body">
                            Several fellow Rocket League players and I decided to make what 
                            was originally intended to be a joke for a temporary game mode 
                            ended up exploding into a community of over 150+ players. RankedSpikeRush.gg has already hosted 
                            several tournaments including a crowd-funded $175 Prize Tourney that attracted over 50 
                            teams to compete in.
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
                                        be optimized on both desktop and mobile platforms.
                                    </div>
                                </div>
                            </div>
                            <div className="t-b-b-features-item-container">
                                <div className="t-b-b-features-icon">
                                    <WallpaperIcon style={iconStyle}/>
                                </div>
                                <div className="t-b-b-features-label">
                                    <div className="t-b-b-feature-name">
                                        Animated background
                                    </div>
                                    <div className="t-b-b-feature-description">
                                        Smooth and exciting animated background featuring 
                                        highlights from several Spike Rush games. 
                                    </div>
                                </div>
                            </div>
                            <div className="t-b-b-features-item-container">
                                <div className="t-b-b-features-icon">
                                    <SpeedIcon style={iconStyle}/>
                                </div>
                                <div className="t-b-b-features-label">
                                    <div className="t-b-b-feature-name">
                                        Built in 24 Hours
                                    </div>
                                    <div className="t-b-b-feature-description">
                                        The entire multi-platform web application was 
                                        successfully planned, developed and built in 
                                        less than 24 hours.
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
                                Google Firebase
                            </div>
                            <div className="t-b-b-item-info">
                                Utilized for Hosting
                            </div>
                        </div>
                        <div className="t-b-b-tech-item">
                            <div className="t-b-b-item-header">
                                Material-UI
                            </div>
                            <div className="t-b-b-item-info">
                                Used for Stylized and Reusable Components
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}