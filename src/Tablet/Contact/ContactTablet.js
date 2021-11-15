import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

export default function ContactTablet() {

    const contactStyle = {
        fontSize: '90px',
        color: 'black'
    }

    return (
        <div className='t-section-container'>
            <div className="t-contact-container">
                <div className="t-contact-header">
                    Contact Details
                </div>
                <div className="t-contact-row">
                <a href='https://www.linkedin.com/in/matt-taylor525/' target='_blank' rel="noopener noreferrer">

                    <div className="t-contact-item">
                        <div className="t-contact-item-icon">
                            <LinkedInIcon style={contactStyle} />
                        </div>
                        linkedin.com/in/matt-taylor525/
                    </div>
                    </a>
                    <div className="t-contact-item">
                        <div className="t-contact-item-icon">
                            <PhoneIcon style={contactStyle} />
                        </div>
                        (508)369-0508
                    </div>
                </div>
                <a href="mailto:m12428taylor@gmail.com">
                    <div className="t-contact-item">
                        <div className="t-contact-item-icon">
                            <EmailIcon style={contactStyle} />
                        </div>
                        m12428taylor@gmail.com
                    </div>
                    </a>
            </div>
        </div>
    )
}