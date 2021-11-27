import React, { useEffect } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import Button from '@material-ui/core/Button'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import disableScroll from 'disable-scroll'
import { ExtraInfo } from './ExtraInfo'

export const ExperienceBackdrop = ({ exp, setExpInfo, expInfo }) => {
    const closeBackDrop = () => {
        disableScroll.off()
        setExpInfo({ open: false, current: exp.name })
        setTimeout(() => setExpInfo({ open: false, current: null }), 350)
    }

    useEffect(() => {
        const exitExp = document.querySelector('.exit-backdrop-exp')
        exitExp.addEventListener('click', closeBackDrop)
        return () => exitExp.removeEventListener('click', closeBackDrop)
    })

    const experienceBackdrop = { zIndex: 10, backgroundColor: 'rgba(255,255,255,0.4)' }
    const closeIcon = { color: 'white', fontSize: '60px', alignSelf: 'end', marginLeft: '100px' }
    const closeButton = { padding: 0, height: '70px', minWidth: 0, display: 'flex', borderRadius: '0 15px 0 0' }

    return (
        <Backdrop open={expInfo.open} style={experienceBackdrop} transitionDuration={300}>
            <div className="exit-backdrop-exp"></div>
            <div className="d-experience-backdrop-container">
                <div className="header">
                    <ExtraInfo extra={expInfo.current}/>
                    <header>{exp ? exp.buttonHeader : ''}</header>
                    <Button style={closeButton} onClick={() => closeBackDrop()}><CloseRoundedIcon style={closeIcon}/></Button>
                </div>
                <div className="date">{exp ? exp.dates : ''}</div>
                <div className='body'>
                    <div className="left">
                        {!exp ? '' : exp.highlights.map((h, i) => (
                            <div className='item' key={`${exp.name}-highlight-${i}`}>
                                <header>{h.title}</header>
                                <p>{h.body}</p>
                            </div>
                        ))}
                    </div>
                    <div className="right">
                        {!exp ? '' : exp.tech.map((t, i) => (
                            <div className='item' key={`${exp.name}-tech-${i}`}>
                                <header>{t.title}</header>
                                <p>{t.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Backdrop>
    )
}