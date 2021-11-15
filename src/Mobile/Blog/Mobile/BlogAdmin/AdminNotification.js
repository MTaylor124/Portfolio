import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext'
import Backdrop from '@material-ui/core/Backdrop'

export default function AdminNotification(props) {

    let {
        showingNotification,
        notification
    } = useContext(BlogContext)

    let {
        message
    } = props
    const notificationStyle = {
        zIndex: '50000',
        // height: '6vh',
        // change to 6 for mobile/  5 for desktop testing
        width: '80vw',
        marginLeft: '10vw',
        marginTop: '40px',
        backgroundColor: 'white',
        height: '10vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    let notificationCheck
    if (notification) {
        notificationCheck = notification
    } else if (message) {
        notificationCheck = message
    } else {
        notificationCheck = 'Notification!'
    }
    
    return (
        <Backdrop
            style={notificationStyle}
            open={showingNotification}
            transitionDuration={300}>
            <div className='m-blog-notification'>
                {notificationCheck}
            </div>
        </Backdrop>
    )
}