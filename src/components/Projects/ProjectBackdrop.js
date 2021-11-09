import React, {useEffect} from 'react'
import BackdropHeader from './BackdropHeader'
import { Project } from './Project'
import Backdrop from '@material-ui/core/Backdrop'
import disableScroll from 'disable-scroll'

export default function ProjectBackdrop({info, setProjInfo, proj}) {

    const closeBackDrop = () => {
        disableScroll.off()
        setProjInfo({open: false, current: proj.name})
        setTimeout(() => setProjInfo({open: false, current: null}), 350)
    }

    useEffect(() => {
        const exitTest = document.querySelector('.exit-backdrop')
        exitTest.addEventListener('click', closeBackDrop)
        return () => exitTest.removeEventListener('click', closeBackDrop)
    })

    const backdrop = { zIndex: 10, backgroundColor: 'rgba(255,255,255,0.4)' }

    return (
        <Backdrop open={info.open} style={backdrop} transitionDuration={300}>
            <div className="exit-backdrop"></div>
                <div className='d-backdrop-container'>
                    <BackdropHeader setProjInfo={setProjInfo} info={info} proj={proj}/>
                    <Project proj={proj}/>
                </div>
        </Backdrop>    
    )
}