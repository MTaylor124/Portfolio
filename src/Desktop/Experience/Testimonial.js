import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'

export const Testimonial = () => {

    const button = { width: '150px', height: '65px', padding: '0', marginLeft: '10px', textTransform: 'none', color: 'white', fontSize: '1.1rem' }
    const backdrop = { zIndex: '1000', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column' }
    const quote = { color: 'black', fontSize: '20px' }
    const closeButton = { backgroundColor: 'white', color: 'black', textTransform: 'none', padding: '5px 40px', marginTop: '10px', fontSize: '0.9rem' }

    const [showing, setShowing] = useState(false)

    return (
        <div>
            <Button style={button} onClick={() => setShowing(true)}><span className='experience-highlight'>Testimonial</span></Button>
            <Backdrop style={backdrop} open={showing} transitionDuration={300}>
                <section className='testimonial-container'>
                    <FormatQuoteIcon style={quote}/>
                    I was introduced to Matt through a mutual friend. I found him to be very diligent, 
                    professional, asked all the right questions, and offered up suggestions after 
                    meeting with him and explaining my business needs. I can not be more pleased with 
                    the results. His work was exemplary! Even after finishing with the first model 
                    that I approved, he went back to make additional changes. I am beyond happy with 
                    the end product. I receive many complements about the ease and flow of the web site. 
                    My business has increased because of the site and continues to deliver all the time!!
                    <FormatQuoteIcon style={quote}/>
                    <div>- Gary Levine (TheLotBroker)</div>
                </section>
                <Button style={closeButton} onClick={() => setShowing(false)}>Close</Button>
            </Backdrop>
        </div>
    )
}
