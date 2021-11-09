import React from 'react'


import PhotoSizeSelectActualTwoToneIcon from '@material-ui/icons/PhotoSizeSelectActualTwoTone'
import FormatQuoteTwoToneIcon from '@material-ui/icons/FormatQuoteTwoTone'
import FormatListBulletedTwoToneIcon from '@material-ui/icons/FormatListBulletedTwoTone'

import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone'

export default function TheLotBrokerProject() {

    const iconStyle = {
        color: 'teal',
        fontSize: '40px'
    }

    return (
        <div className='t-backdrop-body'>
                <div className="t-b-b-header">
                    <a href="https://thelotbroker.com/" target="_blank" rel="noopener noreferrer" className="t-b-b-header-link">
                        <div className='t-b-b-header-style'>
                            TheLotBroker.com
                        </div>
                    </a>
                </div>
                <div className="t-b-b-body">
                    <div className="t-b-b-about-container">
                        <div className="t-b-b-about-header">
                            About:
                        </div>
                        <div className="t-b-b-about-body">
                            TheLotBroker.com is an ongoing freelance project I picked up 
                            in early Februrary 2020. The original plan was to revamp his site 
                            that used HTML/CSS and needed to be manually updated 
                            every time he added or removed lots. I created a new web app that was a 
                            full-stack scalable application. I added features as requested that helped 
                            The Lot Broker attain the internet presence he seeked. I am currently adapting 
                            Mobile and Tablet friendly interfaces in my free time.
                        </div>
                    </div>
                    <div className="t-b-b-features-container">
                        <div className="t-b-b-features-header">
                            Key Features:
                        </div>
                        <div className="t-b-b-features-list">
                            <div className="t-b-b-features-item-container">
                                <div className="t-b-b-features-icon">
                                    <FormatListBulletedTwoToneIcon style={iconStyle}/>
                                </div>
                                <div className="t-b-b-features-label">
                                    <div className="t-b-b-feature-name">
                                        Lot Inventory System
                                    </div>
                                    <div className="t-b-b-feature-description">
                                        The Lot Broker can easily and securely add/update/delete and 
                                        mark lots as 'sold'
                                    </div>
                                </div>
                            </div>
                            <div className="t-b-b-features-item-container">
                                <div className="t-b-b-features-icon">
                                    <PhotoSizeSelectActualTwoToneIcon style={iconStyle}/>
                                </div>
                                <div className="t-b-b-features-label">
                                    <div className="t-b-b-feature-name">
                                        Image Upload
                                    </div>
                                    <div className="t-b-b-feature-description">
                                        Allows the lot broker upload/delete images for each lot 
                                        at any time. 
                                    </div>
                                </div>
                            </div>
                            <div className="t-b-b-features-item-container">
                                <div className="t-b-b-features-icon">
                                    <FormatQuoteTwoToneIcon style={iconStyle}/>
                                </div>
                                <div className="t-b-b-features-label">
                                    <div className="t-b-b-feature-name">
                                        Testimonials system
                                    </div>
                                    <div className="t-b-b-feature-description">
                                        Allows happy clients to send in-app testimonials 
                                        and once cleared by The Lot Broker will be published 
                                        and displayed.
                                    </div>
                                </div>
                            </div>
                            <div className="t-b-b-features-item-container">
                                <div className="t-b-b-features-icon">
                                    <ChatTwoToneIcon style={iconStyle}/>
                                </div>
                                <div className="t-b-b-features-label">
                                    <div className="t-b-b-feature-name">
                                        Messaging system
                                    </div>
                                    <div className="t-b-b-feature-description">
                                        In-app ability to message The Lot Broker 
                                        and leave contact details to 
                                        connect as soon as possible.
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
                                Utilized for Hosting, Databases, Storage, and Authentication
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