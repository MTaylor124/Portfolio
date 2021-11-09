import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'
import Backdrop from '@material-ui/core/Backdrop'

export default function FadeIn() {
    let {
        theme
    } = useContext(GlobalContext)

    const fadeStyle = {
        zIndex: 495,
        backgroundColor: 'white' 
    }
    return (
        <Backdrop
            style={fadeStyle}
            open={theme.fade.showFade}
            transitionDuration={{ appear: 0, exit: 1200 }}>
        </Backdrop>
    )
}
