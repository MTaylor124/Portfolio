import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext'

import Title from './components/Single/Title'
import Published from './components/Single/Published'
import Sections from './components/Single/Sections'
import AdditionalSections from './components/Single/AdditionalSections'
import DeleteBlogButton from './components/Single/DeleteBlogButton'

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import Button from '@material-ui/core/Button'

export default function ViewSingleBlog() {

    let {
        singleBlogDetails,
        exitSingleBlog,
        // checkContext
    } = useContext(BlogContext)

    let {
        date
    } = singleBlogDetails

    const backArrowStyle = {

    }
    const backButtonStyle = {
        fontSize: '1.1rem',
        padding: '0',
        minHeight: '0',
        minWidth: '0'
    }
    return (
        <div className='m-blog-view-single-container'>
            <div className="m-blog-view-single-header">
                <div className="m-blog-view-single-header-brand">
                    View Blog Details
                </div>
                <Button
                    style={backButtonStyle}
                    onClick={() => exitSingleBlog()}>
                    <div className="primary-theme-color m-blog-view-single-exit">
                        <ArrowBackIosRoundedIcon color='primary' style={backArrowStyle}/>
                        <div className="m-blog-back-button-style2">
                            Back
                        </div> 
                    </div>
                </Button>
            </div>
            <Title />
            <Published date={date}/>

            {/* <Button onClick={() => checkContext() }>
                context
            </Button> */}

            <Sections />
            <AdditionalSections />
            <DeleteBlogButton />
            <div className="m-scroll-fix"></div>
        </div>
    )
}
