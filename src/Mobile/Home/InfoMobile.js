import React from 'react'

import Picture from './../myface.jpg'

import Resume from './../MattTaylorResume.pdf'

export default function InfoMobile() {
    return (
        <div className='m-section-container'>
            <div className="m-home-container">
                <img src={Picture} alt='Matt Taylor' className='m-home-pic'/>
                <div className="m-home-header">
                    Matt Taylor
                </div>
                <div className="m-home-subheader">
                    Full Stack Software Engineer | Boston, MA
                </div>
                <div className="m-home-contact-list">
                    <div className="m-home-contact-list-top-row">
                        <a className='m-home-new-contact-item'
                            href='https://www.linkedin.com/in/matt-taylor525/' 
                            target='_blank' rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <div className='m-home-contact-divider'>
                            |
                        </div>
                        <a className='m-home-new-contact-item'
                            href={Resume} 
                            target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                        <div className='m-home-contact-divider'>
                            |
                        </div>
                        <a className='m-home-new-contact-item'
                            href="tel:5083690508" 
                            target='_blank' rel="noopener noreferrer">
                            (508)369-0508
                        </a>
                    </div>
                    <div className="m-home-contact-list-top-bottom">
                        <a className='m-home-new-contact-item'
                            href="mailto:m12428taylor@gmail.com">
                            m12428taylor@gmail.com
                        </a>
                    </div>
                </div>
                <div className='m-home-about-me-container'>
                    <div className='m-home-about-me'>
                        I’m a coder who loves to laugh and have a great 
                        time in between fast paced sprint sessions. On the 
                        Track, I used to be the first sprinter to cross the 
                        line, now I’m the first sprinter to rally up my 
                        teammates before a long night of coding. I am a 
                        firm believer in that if you enjoy what you do and 
                        the people around you then you will never work a day 
                        in your life. I love to learn new technologies and 
                        like to keep an open mind to how I approach obstacles 
                        in and outside of code.
                    </div>
                </div>
            </div>
        </div>
    )
}
