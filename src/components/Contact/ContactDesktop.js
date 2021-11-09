import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

export default function ContactDesktop() {

    const contactStyle = {
        fontSize: '70px',
        color: 'rgb(0, 69, 133)',
        marginRight: '15px'
    }

    return (
        <div className='d-section-container'>
            <div className="d-contact-container">
                <div className="d-contact-header myfont">
                    Contact Details
                </div>
                <div className="d-contact-details-container">
                    <a className='d-contact-item-new myfont'
                        href='https://www.linkedin.com/in/matt-taylor525/' 
                        target='_blank' rel="noopener noreferrer">
                        <LinkedInIcon style={contactStyle} />
                        linkedin.com/in/matt-taylor525/
                    </a>
                    <a className='d-contact-item-new myfont'
                        href="mailto:Matt.Taylor124@outlook.com">
                        <EmailIcon style={contactStyle} />
                        Matt.Taylor124@outlook.com
                    </a>
                    <div className="d-contact-item-new myfont">
                        <PhoneIcon style={contactStyle} />
                        (508) 369-0508
                    </div>
                </div>
            </div>
        </div>
    )
}