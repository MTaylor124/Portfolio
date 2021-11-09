import React, {useContext} from 'react'

import BlogAdmin from './BlogAdmin/BlogAdmin'
import BlogGuest from './BlogGuest/BlogGuest'

import {BlogContext} from './../BlogContext'

export default function BlogMobile(){

    let {
        loggedIn,
    } = useContext(BlogContext)
    if (loggedIn) {
        return <BlogAdmin />
    } else {
        return <BlogGuest />
    }

}