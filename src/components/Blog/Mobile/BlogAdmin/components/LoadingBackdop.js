import React, {useContext} from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import { BlogContext } from '../../../BlogContext'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function LoadingBackdop() {


    
    //  NO LONGER USED





    let {
        reloadingBlogs,
        loadingBlogDetails
    } = useContext(BlogContext)

    const feedbackStyle = {
        height: '100%',
        width: '100vw',
        zIndex: 349853948753847,
        backgroundColor: 'rgb(255,255,255)',
        // marginTop: '16vh',
        // marginTop: '17.5vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
        
    }
    const spinnerStyle = {
        marginTop: '90px'
    }
    let backdropContent
    if (reloadingBlogs || loadingBlogDetails) {
        backdropContent = (
            <CircularProgress size={95} color='primary' style={spinnerStyle}/>
        )
    } else {
        backdropContent = (
            <div>

            </div>
        )
    }
    return (
        <Backdrop
            style={feedbackStyle}
            transitionDuration={{enter: 200, exit: 400}}
            open={(reloadingBlogs || loadingBlogDetails)}>
            {backdropContent}
        </Backdrop>
    )
}