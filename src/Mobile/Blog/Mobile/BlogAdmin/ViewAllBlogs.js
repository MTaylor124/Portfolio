import React, {useContext} from 'react'

import {BlogContext} from '../../BlogContext'
import BlogTitle from './components/BlogTitle'
import BlogListControls from './components/BlogListControls'
import AdminNotification from './AdminNotification'
import CircularProgress from '@material-ui/core/CircularProgress'

// import LoadingBackdop from './components/LoadingBackdop'

export default function ViewAllBlogs() {

    let {
        blogs,
        reloadingBlogs,
        loadingBlogDetails
    } = useContext(BlogContext)

    const spinnerStyle = {
        marginTop: '90px'
    }

    let blogList
    if (reloadingBlogs || loadingBlogDetails) {
        blogList = (
            <CircularProgress size={95} color='primary' style={spinnerStyle}/>
        )
    } else {
        if (blogs.length > 0) {
    
            blogList = blogs.map(blog => {
                return <BlogTitle 
                    title={blog.title}
                    date={blog.date}
                    published={blog.published}
                    id={blog.id}
                    key={blog.id}/>
            })
        } else {
            blogList = (
                <div className='m-blog-no-blogs-message'>
                    You have no blogs
                </div>
            )
        }
    }

    return (
        <div className='m-blog-list-container'>
            <BlogListControls />
            <AdminNotification />
            {blogList}
        </div>
    )
}