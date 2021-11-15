import React from 'react'

import SpeedIcon from '@material-ui/icons/Speed'
import TabletMacIcon from '@material-ui/icons/TabletMac'
export default function PortfolioProject() {

    const iconStyle = {
        color: 'teal',
        fontSize: '40px'
    }

    return (
        <div className='t-backdrop-body'>
                <div className="t-b-b-header">
                        <div className='t-b-b-header-style'>
                            My Portfolio
                        </div>
                </div>
                <div className="t-b-b-body">
                    <div className="t-b-b-about-container">
                        <div className="t-b-b-about-header">
                            About:
                        </div>
                        <div className="t-b-b-about-body">
                            My portfolio was built in a very short time and is my first 
                            project that was entirely focused around being fully 
                            optimized for all viewports. Be sure to check out the page on 
                            your phone!
                        </div>
                    </div>
                    <div className="t-b-b-features-container">
                        <div className="t-b-b-features-header">
                            Key Features:
                        </div>
                        <div className="t-b-b-features-list">
                            <div className="t-b-b-features-item-container">
                                <div className="t-b-b-features-icon">
                                    <TabletMacIcon style={iconStyle}/>
                                </div>
                                <div className="t-b-b-features-label">
                                    <div className="t-b-b-feature-name">
                                        Optimized for All Platforms
                                    </div>
                                    <div className="t-b-b-feature-description">
                                        Web application was built from the ground-up to 
                                        be optimized on desktop, mobile and tablet platforms.
                                    </div>
                                </div>
                            </div>
                            <div className="t-b-b-features-item-container">
                                <div className="t-b-b-features-icon">
                                    <SpeedIcon style={iconStyle}/>
                                </div>
                                <div className="t-b-b-features-label">
                                    <div className="t-b-b-feature-name">
                                        Built in 72 Hours
                                    </div>
                                    <div className="t-b-b-feature-description">
                                        The entire multi-platform web application was 
                                        fully developed and built in 
                                        less than 3 days.
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
                            <div className="t-b-b-item-info">
                                Utilized React Context for State Management allowing for more Complex Functionality
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