import React, {useContext} from 'react'
import {GlobalContext} from './../../GlobalContext'

import { Link } from 'react-router-dom'

export default function NavDesktop() {

    let {
        colors,
        theme
    } = useContext(GlobalContext)

    const linkItem = {
        textDecoration: 'none',
        color: colors.navText
    }
    return (
        <div className='d-nav-container'>
            <div className='d-nav-header'>
                <Link to='/' style={linkItem} className='d-nav-brand-container' onClick={() => {
                    theme.fade.transition()
                }}>
                    <div className='d-nav-brand'>Matt Taylor Portfolio</div>
                </Link>
            </div>
            <div className='d-nav-links'>
                <Link to='/' style={linkItem} className='d-nav-item' onClick={() => {
                    theme.fade.transition()
                }}>
                    Overview
                </Link>
                <Link to='/projects' style={linkItem} className='d-nav-item' onClick={() => {
                    theme.fade.transition()
                }}>
                    Projects
                </Link>
                <Link to='/experience' style={linkItem} className='d-nav-item' onClick={() => {
                    theme.fade.transition()
                    }}>
                    Experience
                </Link>
                <Link to='/skills' style={linkItem} className='d-nav-item' onClick={() => {
                    theme.fade.transition()
                    }}>
                    Skills 
                </Link>
                <Link to='/contact' style={linkItem} className='d-nav-item-last' onClick={() => {
                    theme.fade.transition()
                    }}>
                    Contact
                </Link>
                {/* <Link to='/blog' style={linkItem} className='d-nav-item-last' onClick={() => {
                    theme.fade.transition()
                    }}>
                    Blog
                </Link> */}
            </div>
        </div>
    )
}