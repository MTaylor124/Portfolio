import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'
import Backdrop from '@material-ui/core/Backdrop'

export default function FadeBetween() {
    let {
        theme
    } = useContext(GlobalContext)

    const fadeStyle = {
        zIndex: 500,
        backgroundColor: 'white'
    }
    return (
        <Backdrop
            style={fadeStyle}
            open={theme.fade.transitioning}
            transitionDuration={{ appear: 0, exit: 500 }}>
        </Backdrop>
    )
}
