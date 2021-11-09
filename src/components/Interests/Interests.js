import React from 'react'

import {
    isMobileOnly,
    isTablet
} from 'react-device-detect'

import InterestsMobile from './InterestsMobile'
import InterestsDesktop from './InterestsDesktop'
import InterestsTablet from './InterestsTablet'

export default function Interests() {

    if (isMobileOnly) {
        return ( <InterestsMobile />)
    } else if (isTablet) {
        return ( <InterestsTablet />)
    } else {
        return ( <InterestsDesktop />)
    }
}