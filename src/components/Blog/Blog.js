import React from 'react'
import {BlogContextProvider} from './BlogContext'

import { isMobileOnly, isTablet, isIPad13 } from 'react-device-detect'

import BlogDesktop from './Desktop/BlogDesktop'
import BlogTablet from './Tablet/BlogTablet'
import BlogMobile from './Mobile/BlogMobile'

export default function Blog() {

    if (isMobileOnly) {
        return (
            <BlogContextProvider><BlogMobile /></BlogContextProvider>
        )
    } else if (isTablet || isIPad13) {
        return (
            <BlogContextProvider><BlogTablet /></BlogContextProvider>
        )
    } else {
        return (
            <BlogContextProvider><BlogDesktop /></BlogContextProvider>
        )
    }

}