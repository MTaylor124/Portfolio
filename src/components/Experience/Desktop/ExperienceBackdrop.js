import React, { useContext } from 'react'

import Backdrop from '@material-ui/core/Backdrop'
import Button from '@material-ui/core/Button'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { GlobalContext } from '../../../GlobalContext'

export default function ExperienceBackdrop() {
    let {
        experience
    } = useContext(GlobalContext)

    const experienceBackdrop = {
        zIndex: 500,
        backgroundColor: 'rgba(255,255,255,0.4)'
    }
    const closeIcon = {
        color: 'white',
        fontSize: '40px',
        alignSelf: 'end',
        width: '5vw',
        height: '8vh',
        marginLeft: '5vw',
    }
    const closeButton = {
        padding: 0,
        minHeight: 0,
        minWidth: 0,
        width: '10vw',
        display: 'flex',
        borderRadius: '0 15px 0 0'
    }
    // const testimonialButton = {
    //     zIndex: 510,
    //     color: 'white',
    //     textTransform: 'none',
    //     marginLeft: '30px',
    //     // fontSize: '1.8rem',
    //     // fontWeight: '600',
    //     marginTop: '-10px',
    //     padding: '0'
    // }

    let experienceHeader, experienceBody, experienceDate, eventCheck, testimonialContent

    if (experience.showingBackdrop) {
        eventCheck = 'onClick'
    } else {
        eventCheck = false
    }
    if (experience.experienceID) {
        if (experience.experienceID === 'Hack') {
            testimonialContent = ''
            experienceHeader = 'Hackathon Team Leader'
            experienceDate = 'December 28-30 2020'
            experienceBody = (
                <div className='d-e-b-body'>
                    <div className="d-e-b-body-left mynewcolorandweight d-e-b-body-color">
                        <div className="d-e-b-body-left-header">
                            Led Team of 5
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            Our team included UI/UX developers as well as a couple fellow software developers. I 
                            worked closely with the UI devs during prototyping and development. I led our team during discussion 
                            regarding design and function and made sure everyone in the group had time to voice their input.
                        </div>
                        <div className="d-e-b-body-left-header">
                            Delegated Workload
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            I successfully planned out time during development for each team member to write code as well 
                            as guided the group through mob-coding sessions. Before the team would break off we would all 
                            acknoledge what we would be working on to evenly distribute the workload.
                        </div>
                        <div className="d-e-b-body-left-header">
                            Guided Brainstorming
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            Our team had several brainstorming sessions led by the Lead UI dev and myself. We 
                            used several collaboration apps including Adobe XD and ensured everyone's input had an impact on 
                            the final product.
                        </div>
                        <div className="d-e-b-body-left-header">
                            Had Fun!
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            Everyone in the group seemed to have a great time. I was able to teach some recent GA grads 
                            some of my technology as well as gain invaluable experience with working with teams of varied experience and professions. 
                        </div>
                    </div>
                    <div className="d-e-b-body-right d-e-b-body-color2">
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                React
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                React was used for the User Interface. State management was done through Hooks / Context
                            </div>
                        </div>
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                Google Firebase
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                The GCP was used for hosting, authentication and databases
                            </div>
                        </div>
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                Discord
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                I created and organized our Discord channel-our primary method of communication during development
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (experience.experienceID === 'Lot') {
            testimonialContent = (
                ''
                // <Button 
                //     style={testimonialButton}>
                //         <div className="d-e-b-testimonial-text-container">
                //             <div className="d-e-b-testimonial-text">
                //                 Testimonial
                //             </div>
                //         </div>
                // </Button>
            )
            experienceHeader = 'Full Stack Web Developer'
            experienceDate = 'February 2019 - Present'
            experienceBody = (
                <div className='d-e-b-body'>
                    <div className="d-e-b-body-left mynewcolorandweight d-e-b-body-color">
                        <div className="d-e-b-body-left-header">
                            Built From Scratch
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            I handled all stages of the web development life cycle including wireframing, prototyping, and testing all the way through production and maintenance.
                        </div>
                        <div className="d-e-b-body-left-header">
                            Focus on UI
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            The entire web application was built to be optimized for the user experience including appropriate scaling for all mobile and tablet devices. Every action 
                            has visible feedback and loading/transitions have animations. 
                        </div>
                        <div className="d-e-b-body-left-header">
                            Collaborated with Client
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            Throughout development I worked closely with the client with a focus on their vision of the site. I recommended several features which the 
                            client enthusiastically received and were incorporated including the Testimonials, Messaging, and Current Inventory systems with filters.
                        </div>
                        <div className="d-e-b-body-left-header">
                            Image Upload
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            I created a smooth user interface for the client to upload images in app with immediate and fluid feedback showing how the image will look to guests. Our recent 
                            phone call he mentioned that he enjoys the image upload and that the feature saves him time when he has to photograph multiple lots. 
                        </div>
                    </div>
                    <div className="d-e-b-body-right d-e-b-body-color2">
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                React
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                The User Interface was built with React and Context was used for State management 
                            </div>
                        </div>
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                Google Firebase
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                The GCP was used for Hosting, Authentication, Databases and Media Storage
                            </div>
                        </div><div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                CSS3
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                CSS was used alongside Object Oriented CSS for Material-UI
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (experience.experienceID === 'GA') {
            testimonialContent = ''
            experienceHeader = 'Software Engineering Immersive'
            experienceDate = 'June 10 - August 30 2019'
            experienceBody = (
                <div className='d-e-b-body'>
                    <div className="d-e-b-body-left mynewcolorandweight d-e-b-body-color">
                        <div className="d-e-b-body-left-header">
                            JavaScript / Node
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            I built several small apps using html and added user events with jQuery. All my apps use the Node runtime and all commands are ran in the CLI.
                        </div>
                        <div className="d-e-b-body-left-header">
                            Relational and Non-relational Databases
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            Several different databases were used throughout my apps including MongoDB and PostreSQL. Backend interaction was handled using Axios, Express.js and Ruby on Rails.
                        </div>
                        <div className="d-e-b-body-left-header">
                            React
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            My Capstone(final) project was built using React and Bootstrap in the front with Express on the back. The project titled Mattcersize has more info and link in Projects section.
                        </div>
                        <div className="d-e-b-body-left-header">
                            Team Project
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            I worked with 3 other developers for my third project and our team was incredibly successful. We collaborated together, divided work evenly and all 
                            participated in solo coding, pair programming and mob sessions and our project had no visible flaws or malfunctions.
                        </div>
                    </div>
                    <div className="d-e-b-body-right d-e-b-body-color2">
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                React/JS
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                Web pages were built using HTML and JavaScript for event handling
                            </div>
                        </div>
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                CSS and SASS
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                All 4 of my projects were styled using CSS
                            </div>
                        </div>
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                Express
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                I built and tested several backends using Express.js and Heroku
                            </div>
                        </div>
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                Ruby on Rails
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                Relational databases were created using the Ruby on Rails framework
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (experience.experienceID === 'NU') {
            testimonialContent = ''
            experienceHeader = 'Nucamp Coding Bootcamp'
            experienceDate = 'April 2021 - Present'
            experienceBody = (
                <div className='d-e-b-body'>
                    <div className="d-e-b-body-left mynewcolorandweight d-e-b-body-color">
                        <div className="d-e-b-body-left-header">
                            Web Development Instructor
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            I teach web development fundamental courses for groups of 10-14 students. 
                        </div>
                        <div className="d-e-b-body-left-header">
                            HTML5
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            I teach and review HTML fundamentals including common elements, attributes, HTML hierarchy best practice coding structure.
                        </div>
                        <div className="d-e-b-body-left-header">
                            CSS3
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            I teach CSS fundamentals including creating internal/importing external stylesheets, best practice ruleset structure, 
                        </div>
                        <div className="d-e-b-body-left-header">
                            Team Project
                        </div>
                        <div className="d-e-b-body-left-info myfont">
                            I worked with 3 other developers for my third project and our team was incredibly successful. We collaborated together, divided work evenly and all 
                            participated in solo coding, pair programming and mob sessions and our project had no visible flaws or malfunctions.
                        </div>
                    </div>
                    <div className="d-e-b-body-right d-e-b-body-color2">
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                React/JS
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                Web pages were built using HTML and JavaScript for event handling
                            </div>
                        </div>
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                CSS and SASS
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                All 4 of my projects were styled using CSS
                            </div>
                        </div>
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                Express
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                I built and tested several backends using Express.js and Heroku
                            </div>
                        </div>
                        <div className="d-e-b-tech-group">
                            <div className="d-e-b-tech-header">
                                Ruby on Rails
                            </div>
                            <div className="d-e-v-tech-subheader myfont">
                                Relational databases were created using the Ruby on Rails framework
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            experienceHeader = 'wrong code'
            experienceBody = 'wrong code' 
        }
    } else {
        experienceHeader = ''
        experienceBody = ''
    }
    return (
        <Backdrop
            open={experience.showingBackdrop}
            style={experienceBackdrop}
            transitionDuration={300}>
            <ClickAwayListener 
                mouseEvent={eventCheck}
                onClickAway={() => experience.hideBackdrop()}>

            <div className="d-experience-backdrop-container">
                <div className="d-e-b-header">
                    <div className="d-u-header-center myfont">
                        {testimonialContent}
                    </div>
                    <div className="d-e-b-brand">
                        {experienceHeader}
                    </div>
                    <Button style={closeButton} onClick={() => experience.hideBackdrop()}>
                        <CloseRoundedIcon style={closeIcon}/>
                    </Button>
                </div>
                <div className="d-e-b-date">
                    {experienceDate}
                </div>
                {experienceBody}
            </div>
            </ClickAwayListener>
        </Backdrop>
    )
}
