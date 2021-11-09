import React, { useContext } from 'react'

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import RefreshIcon from '@material-ui/icons/Refresh'
import Button from '@material-ui/core/Button'
// import LoadingBackdop from './LoadingBackdop'

import { BlogContext } from '../../../BlogContext'

export default function BlogListControls() {

    let {
        exitAllBlogs,
        reloadBlogs,
        loadingBlogDetails
    } = useContext(BlogContext)

    function handleExitBlogList() {
        exitAllBlogs()
    }
    const refreshButtonStyle = {
        fontSize: '40px',
        padding: '5px'
    }
    const buttonStyle = {
        minHeight: '0',
        minWidth: '0',
        padding: '0'
    }
    const backButtonStyle = {
        // fontSize: '40px',
        // // marginRight: '5px',
        // padding: '5px',
        // textTransform: 'none'
    }
    return (
        <div className='m-blog-list-control-container'>
            {/* <LoadingBackdop /> */}
            <div className="m-blog-list-control-title">
                Blog Posts
            </div>
            <div className="m-blog-list-control-items">
                <div className="m-blog-list-control-item">
                    <Button
                        disabled={loadingBlogDetails}
                        style={buttonStyle}
                        onClick={() => reloadBlogs()}>
                        <RefreshIcon color='primary' style={refreshButtonStyle}/>
                    </Button>
                </div>
                <div className="m-blog-list-control-item">
                    <Button
                        disabled={loadingBlogDetails}
                        style={buttonStyle}
                        onClick={() => handleExitBlogList()}>
                        <ArrowBackIosRoundedIcon color='primary' style={backButtonStyle}/> 

                        <div className='m-blog-back-button-style'>
                            Back
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}