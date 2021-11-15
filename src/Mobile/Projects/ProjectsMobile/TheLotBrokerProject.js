import React, {useContext} from 'react'
import {GlobalContext} from './../../../GlobalContext'

import PhotoSizeSelectActualTwoToneIcon from '@material-ui/icons/PhotoSizeSelectActualTwoTone'
import FormatListBulletedTwoToneIcon from '@material-ui/icons/FormatListBulletedTwoTone'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'

import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone'

export default function TheLotBrokerProject() {

    let {
        colors
    } = useContext(GlobalContext)

    const icons = {
        color: colors.secondaryDark,
        fontSize: '40px'
    }

    return (
        <div className="m-p-backdrop-body">
            <div className="m-p-b-about-container">
                <div className="m-p-b-about-body">
                TheLotBroker.com is a freelance project I picked up in 
                early February 2020. I built an 
                entirely new web app that would allow his colleagues 
                to easier view his current inventory of Lots and to 
                allow clients to easily contact him. 
                </div>
            </div>
            <div className="m-p-b-features-container">
                <div className="m-p-b-features-item-container-first">
                    <div className="m-b-b-features-label">
                        <div className="m-p-b-feature-name">
                            Mobile Optimized
                        </div>
                        <div className="m-p-b-feature-description">
                            The entire application was built from the 
                            ground up to be optimized for Mobile and Tablet 
                            viewports
                        </div>
                    </div>
                    <div className="m-b-b-features-icon">
                        <PhoneAndroidIcon style={icons}/>
                    </div>
                </div>
                <div className="m-p-b-features-item-container-first">
                    <div className="m-b-b-features-label">
                        <div className="m-p-b-feature-name">
                            Current Inventory System
                        </div>
                        <div className="m-p-b-feature-description">
                            Full CRUD control for Admin and allows users to
                            filter inventory for quick searching
                        </div>
                    </div>
                    <div className="m-b-b-features-icon">
                        <FormatListBulletedTwoToneIcon style={icons}/>
                    </div>
                </div>
                <div className="m-p-b-features-item-container">
                    <div className="m-b-b-features-label">
                        <div className="m-p-b-feature-name">
                            Image Galleries
                        </div>
                        <div className="m-p-b-feature-description">
                            Allows the lot broker upload/delete images for each lot 
                            at any time as well as static Lot Galleries 
                        </div>
                    </div>
                    <div className="m-b-b-features-icon">
                        <PhotoSizeSelectActualTwoToneIcon style={icons}/>
                    </div>
                </div>
                <div className="m-p-b-features-item-container">
                    <div className="m-b-b-features-label">
                        <div className="m-p-b-feature-name">
                            Messaging + Testimonials
                        </div>
                        <div className="m-p-b-feature-description">
                            In-app ability to message The Lot Broker directly 
                            and leave contact details in regards to a Lot or 
                            write a testimonial
                        </div>
                    </div>
                    <div className="m-b-b-features-icon">
                        <ChatTwoToneIcon style={icons}/>
                    </div>
                </div>
            </div>







            <div className="m-p-b-tech-container">
                <div className="m-p-b-tech-item">
                    <div className="m-p-b-item-header">
                        React + Context
                    </div>
                    <div className="m-p-b-item-info">
                        Created Custom and Reusable Components
                    </div>
                    <div className="m-p-b-item-info">
                        Managed State using React Context allowing for more complex functionality 
                        and storing global values
                    </div>
                </div>
                <div className="m-p-b-tech-item">
                    <div className="m-p-b-item-header">
                        Google Firebase
                    </div>
                    <div className="m-p-b-item-info">
                        Utilized for Hosting, Databases, Storage, and Authentication
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