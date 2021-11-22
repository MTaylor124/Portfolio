import React from 'react'
import { Nucamp } from './Nucamp'
import { Testimonial } from './Testimonial'

export const ExtraInfo = ({ extra }) => {
    if (extra === 'General Assembly' || extra === 'Hackathon' || extra === null) return <div className="d-u-header-center"></div>
    else if (extra === 'The Lot Broker') return <Testimonial />
    else if (extra === 'Nucamp') return <Nucamp />
    else return 'Error'
}
