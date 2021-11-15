import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'
import Backdrop from '@material-ui/core/Backdrop'

export default function FadeIn() {
    let {
        theme
    } = useContext(GlobalContext)

    const fadeStyle = {
        zIndex: 505,
        backgroundColor: 'white'
    }
    return (
        <Backdrop
            style={fadeStyle}
            open={theme.fade.hidingNav}
            transitionDuration={{ appear: 500, exit: 500 }}>       
        </Backdrop>
    )
}
