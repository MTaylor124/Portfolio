import React from 'react'
import Picture from '../../Data/Home/myface.jpg'
import Resume from '../../Data/Home/MattTaylorResume.pdf'

export const InfoDesktop = () => (
    <div className='d-section-container'>
        <div className='d-home-container'>
            <div className="d-home-header">
                Matt Taylor
            </div>
            <div className="d-home-subheader-container">
                <div className="d-home-subheader">
                    Full Stack Software Engineer | Boston, MA
                </div>
                <a className='d-contact-list-item-updated d-contact-resume-link' 
                    href={Resume} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    Resume
                </a>
            </div>
            <div className="d-home-contact-list">
                <a className='d-contact-list-item-updated' 
                    href='https://www.linkedin.com/in/matt-taylor525/' 
                    target='_blank' 
                    rel="noopener noreferrer">
                    LinkedIn
                </a>

                <a className='d-contact-list-item-updated' 
                    href="tel:5083690508" 
                    target='_blank' 
                    rel="noopener noreferrer">
                    (508) 369-0508
                </a>
                <a className='d-contact-list-item-updated' 
                    href="mailto:matt.taylor124@outlook.com">
                    Matt.Taylor124@outlook.com
                </a>
            </div>
            <div className="d-home-pic-container">
                <img src={Picture} alt='Matt Taylor' className='d-home-pic'/>
                <div className='d-home-about-me myfont'>
                    I’m a coder who loves to laugh and have a great time in between 
                    fast paced sprint sessions. On the Track, I used to be the first 
                    sprinter to cross the line, now I’m the first sprinter to rally 
                    up my teammates before a long night of coding. I am a firm believer 
                    in that if you enjoy what you do and the people around you then 
                    you will never work a day in your life. I love to learn new 
                    technologies and like to keep an open mind to how I approach 
                    obstacles in and outside of code.
                </div>
            </div>
        </div>
    </div>
)
