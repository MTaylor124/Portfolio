import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import Divider from '@material-ui/core/Divider'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import { html, js, css } from './../../Data/Concepts'
import { randomizedReviews } from './../../Data/Reviews'
import disableScroll from 'disable-scroll'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export const Nucamp = () => {

    const button = { width: '150px', height: '65px', padding: '0', marginLeft: '10px', textTransform: 'none', color: 'white', fontSize: '1.1rem', lineHeight: '1.1rem' }
    const backdrop = { zIndex: '1000', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column' }
    const closeButton = { backgroundColor: 'white', color: 'black', textTransform: 'none', padding: '5px 40px', marginTop: '10px', fontSize: '0.9rem' }
    const categories = { textTransform: 'none', width: '150px', fontSize: '1.4rem', lineHeight: '1.3'}
    const tab = { minWidth: 0, fontSize: '1.4rem'}
    const quote = { color: 'black', fontSize: '16px' }

    const [showing, setShowing] = useState(false)
    const [category, setCategory] = useState('Concepts')
    const [concept, setConcept] = useState(0)

    const buttons = [{ name: 'Concepts', text: 'Concepts Covered' }, { name: 'Reviews', text: 'Reviews by Students' }]
    const concepts = ["JavaScript(ES6+)", "HTML5", "CSS3"]

    const htmlContent = html.map((x, i) => <p key={`html-item-0${i}`}>{x}</p>)
    const jsContent = js.map((x, i) => <p key={`js-item-0${i}`}>{x}</p>)
    const cssContent = css.map((x, i) => <p key={`css-item-0${i}`}>{x}</p>)
    const reviewContent = randomizedReviews.map((x, i) => <p key={`review-item-0${i}`}><FormatQuoteIcon style={quote} />{x}<FormatQuoteIcon style={quote}/></p>)

    const toggleShow = open => {
        if (open) {
            enableBodyScroll(document.body)
            disableScroll.on()
            setShowing(false)
        } else {
            disableScroll.off()
            disableBodyScroll(document.body)
            setShowing(true)
        }
    }

    return (
        <div>
            <Button style={button} onClick={() => toggleShow(false)}><span className='experience-highlight'>Concepts Covered & Reviews</span></Button>
            <Backdrop style={backdrop} open={showing} transitionDuration={300}>
                <div className='nucamp-container'>
                    <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text">
                        {buttons.map((btn, i) => <Button style={categories} onClick={() => setCategory(btn.name)} disabled={category === btn.name} key={`nucamp-button-0${i}`}>{btn.text}</Button>)}
                    </ButtonGroup>
                    <Divider variant="middle" orientation="vertical" />
                    {category === 'Concepts' ? (
                        <section>
                            <Tabs value={concept} onChange={(e, v) => setConcept(v)} aria-label="basic tabs example" TabIndicatorProps={{style: {backgroundColor: "black"}}} style={{margin: '0 auto 10px'}}>
                                {concepts.map((item, i) => <Tab label={item} value={i} style={tab} key={`concept-item-0${i}`}/>)}
                            </Tabs>
                            <div className="concept-container">
                                {concept === 0 ? jsContent : concept === 1 ? htmlContent : cssContent}
                            </div>
                        </section>) : (
                            <div className='reviews-container'>
                                <h5>All reviews are submitted anonymously after each workshop</h5>
                                <div className="reviews-scroll-container">
                                    {reviewContent}
                                </div>
                            </div>
                        )}
                </div>
                <Button style={closeButton} onClick={() => toggleShow(true)}>Close</Button>
            </Backdrop>
        </div>
    )
}
