import React, {useContext} from 'react'
import {GlobalContext} from './../../GlobalContext'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

export default function ContactMobile() {

    let {
        colors
    } = useContext(GlobalContext)

    const contactStyle = {
        fontSize: '100px',
        color: 'black',
        margin: colors.black
    }

    return (
        <div className='m-section-container'>
            <div className="m-contact-container">
                <div className="m-contact-header">
                    Contact
                </div>
                <div className="m-contact-row">
                    <a href='https://www.linkedin.com/in/matt-taylor525/' target='_blank' rel="noopener noreferrer">
                        <LinkedInIcon style={contactStyle} />
                    </a>
                    <a href="tel:5083690508" target='_blank' rel="noopener noreferrer">
                        <PhoneIcon style={contactStyle} />
                    </a>
                    <a href="mailto:m12428taylor@gmail.com">
                        <EmailIcon style={contactStyle} />
                    </a>
                </div>
            </div>
        </div>
    )
}