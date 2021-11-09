import React, {useContext} from 'react'

import GALogo from './generalAssembly.png'
import TLBLogo from './tlb.png'
import IBMLogo from './ibm.png'
import NULogo from './NULogo.png'
import ExperienceBackdrop from './Desktop/ExperienceBackdrop'
import Button from '@material-ui/core/Button'
import { GlobalContext } from '../../GlobalContext'

export default function ExperienceDesktop() {

    let {
        experience
    } = useContext(GlobalContext)

    const experienceButton = {
        display: 'flex',
        flexDirection: 'row',
        justifyContext: 'flex-start',
        alignItems: 'center',
        textTransform: 'none',
        width: '96%',
        marginBottom: '5px',
        paddingTop: '7px',
        paddingBottom: '7px'
    }
    return (
        <div className='d-section-container'>
            <ExperienceBackdrop />
            <div className="d-experience-container">
                <div className="d-experience-header myfont">
                    Experience
                </div>
                <div className="d-experience-subheader myfont">
                    Click for more Details
                </div>

                <Button
                    style={experienceButton}
                    onClick={() => experience.showBackdrop('NU')}>
                    <div className="d-experience-middle-left">
                        <div className='d-experience-entry-header myfont'>
                            Web Development Instructor
                        </div>
                        <div className="d-experience-date myfont">
                            Contract · 2021 · April 19 - Present
                        </div>
                    </div>
                    <div className="d-experience-middle-right">
                        <img src={NULogo} alt='the lot broker brand' className='d-experience-ga-kitchen'/>
                    </div>
                </Button>

                <Button
                    style={experienceButton}
                    onClick={() => experience.showBackdrop('Lot')}>
                    <div className="d-experience-middle-left">
                        <div className='d-experience-entry-header myfont'>
                            Full Stack Web Developer
                        </div>
                        <div className="d-experience-date myfont">
                            Contract · 2020 · February 10 - Present
                        </div>
                    </div>
                    <div className="d-experience-middle-right">
                        <img src={TLBLogo} alt='the lot broker brand' className='d-experience-ga-kitchen'/>
                    </div>
                </Button>

                <Button
                    style={experienceButton}
                    onClick={() => experience.showBackdrop('Hack')}>
                    <div className="d-experience-middle-left">
                        <div className='d-experience-entry-header myfont'>
                            Hackathon Team Leader
                        </div>
                        <div className="d-experience-date myfont">
                            Event · 2020 · December 28-30
                        </div>
                    </div>
                    <div className="d-experience-middle-right">
                        <img src={IBMLogo} alt='the lot broker brand' className='d-experience-ga-kitchen'/>
                    </div>
                </Button>

                <Button
                    style={experienceButton}
                    onClick={() => experience.showBackdrop('GA')}>
                    <div className="d-experience-middle-left myfont">
                        <div className='d-experience-entry-header'>
                            Software Engineering Immersive
                        </div>
                        <div className="d-experience-date">
                            SEI03 · 2019 · June 10 - August 28
                        </div>
                    </div>
                    <div className="d-experience-middle-right">
                        <img src={GALogo} alt='general assembly kitchen' className='d-experience-ga-kitchen'/>
                    </div>
                </Button>
            </div>
        </div>
    )
}