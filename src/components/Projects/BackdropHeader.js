import React from 'react'
import Button from '@material-ui/core/Button'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import disableScroll from 'disable-scroll'

export default function BackdropHeader({setProjInfo, proj}) {

    const iconSize = '60px'

    const closeIcon = {
        color: 'white',
        width: iconSize,
        height: iconSize,
    }
    const closeButton = {
        padding: 0,
        minHeight: 0,
        minWidth: 0,
        width: '100px',
        height: '100%',
        borderRadius: '0 15px 0 0'
    }

    const closeBackDrop = () => {
        disableScroll.off()
        setTimeout(setProjInfo({open: false, current: null}), 350)
        setProjInfo({open: false, current: proj.name})
    }

    return (
        <div className='d-u-backdrop-header'>
            <div className="left"></div>
            <a href={proj ? proj.link : ''} target="_blank" rel="noopener noreferrer" className="link">{proj ? proj.name : ''}</a>
            <Button style={closeButton} onClick={() => closeBackDrop()}><CloseRoundedIcon style={closeIcon} /></Button>
        </div>
    )
}