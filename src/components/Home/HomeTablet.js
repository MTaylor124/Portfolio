import React from 'react'

import Contact from './../Contact/Contact'
import Experience from './../Experience/Experience'
// import Interests from './../Interests/Interests'
import {Projects} from './../Projects/Projects'
import Skills from './../Skills/Skills'
import Picture from './myface.jpg'
import Resume from './MattTaylorResume.pdf'

export default function HomeTablet() {

    return (
        <div className='t-overview-container'>
            <div className='t-section-container'>
                <div className="t-home-container">
                    <div className="t-home-header">
                            Matt Taylor
                        </div>
                        <div className="t-home-subheader">
                            Full Stack Software Engineer | BOSTON, MA
                        </div>
                        <div className="t-home-contact-list">
                            <div className="t-home-contact-item">
                                <a href='https://www.linkedin.com/in/matt-taylor525/' target='_blank' rel="noopener noreferrer">
                                    <div className="t-home-contact-item-link">
                                        LinkedIn
                                    </div>
                                </a>
                            </div>
                            <div className="t-home-contact-item">
                                (508)369-0508
                            </div>
                            <div className="t-home-contact-item">
                                <a href="mailto:m12428taylor@gmail.com">
                                    <div className="t-home-contact-item-link">
                                        m12428taylor@gmail.com
                                    </div>
                                </a>
                                
                            </div>
                            <div className="t-home-contact-item">
                                <a href={Resume} className="t-home-contact-item" target="_blank" rel="noopener noreferrer">Resume</a>

                            </div>
                        </div>
                        <div className="t-home-pic-container">
                            <img src={Picture} alt='Matt Taylor' className='t-home-pic'/>
                            <div className='t-home-about-me'>
                            I’m a coder who loves to laugh and have a great time in between fast paced sprint sessions. On the Track, I used to be the first sprinter to cross the line, now I’m the first sprinter to rally up my teammates before a long night of coding. I am a firm believer in that if you enjoy what you do and the people around you then you will never work a day in your life. I love to learn new technologies and like to keep an open mind to how I approach obstacles in and outside of code.
                            </div>
                        </div>
                </div>
            </div>
            <div className='t-section-fade'></div>
            <Projects />
            <div className='t-section-fade'></div>
            <Experience />
            <div className='t-section-fade'></div>
            <Skills />
            {/* <div className='t-section-fade'></div>
            <Interests /> */}
            <div className='t-section-fade'></div>
            <Contact />
        </div>
    )
}