import React, {useContext} from 'react'
import {GlobalContext} from './../../../GlobalContext'

// import SpeedIcon from '@material-ui/icons/Speed'
// import TabletMacIcon from '@material-ui/icons/TabletMac'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'

export default function PortfolioProject() {

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
                    After developing several projects, I wanted to catalog my 
                    progress as a developer and be able to save and share some 
                    of my experiences. To spare the linkedin community from my 
                    constant project updates I decided a blog was what I was 
                    looking for. Although there is no 
                    shortage of blog sites out there I wanted to develop 
                    my own. Blog is currently in pre-alpha and 
                    has been set up to allow guests to use the blog creation 
                    interface to build blogs as they would like. Updates and 
                    planned features can be found in the changelog.
                    </div>
                </div>
                <div className="m-p-b-features-container">
                    <div className="m-p-b-features-item-container">
                        <div className="m-b-b-features-label">
                            <div className="m-p-b-feature-name">
                                Optimized for Mobile
                            </div>
                            <div className="m-p-b-feature-description">
                                Web Application feature currently only optimized 
                                for mobile use. Desktop and tablet support coming soon
                            </div>
                        </div>
                        <div className="m-p-b-features-icon">
                            <PhoneAndroidIcon style={icons}/>
                        </div>
                    </div>

                    {/* <div className="m-p-b-features-item-container">
                        <div className="m-b-b-features-label">
                            <div className="m-p-b-feature-name">
                                feature name
                            </div>
                            <div className="m-p-b-feature-description">
                                feature description
                            </div>
                        </div>
                        <div className="m-p-b-features-icon">
                            feature icon
                        </div>
                    </div> */}
                </div>
                <div className="m-p-b-tech-container">
                    <div className="m-p-b-tech-item">
                        <div className="m-p-b-item-header">
                            React.js
                        </div>
                        <div className="m-p-b-item-info">
                            Created Custom and Reusable Components
                        </div>
                        <div className="m-p-b-item-info">
                            Utilized React Context for State Management allowing for more Complex Functionality
                        </div>
                    </div>
                    <div className="m-p-b-tech-item">
                        <div className="m-p-b-item-header">
                            Google Firebase
                        </div>
                        <div className="m-p-b-item-info">
                            Utilized for Hosting and Databases
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