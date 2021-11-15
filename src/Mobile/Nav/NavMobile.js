import React, {useContext} from 'react'

import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import {GlobalContext} from '../../GlobalContext'

export default function NavMobile() {
    let {
        colors,
        nav,
        theme
    } = useContext(GlobalContext)

    let {
        showingDropdown,
        showDropdown,
        hideDropdown,
        anchor
    } = nav

    const dropdownButton = {
        padding: 0,
        minHeight: 0,
        minWidth: 0
    }
    const threeDots = {
        fontSize: theme.fonts.nav.icon,
        color: colors.soft
    }
    const menu = {
        // backgroundColor: colors.primaryFaded
        color: 'red'
    }
    const linkContainer = { 
        textDecoration: 'none', 
        textAlign: 'center', 
        width: '100%', 
        // height: '100%',
        color: colors.primary,
        // backgroundColor: colors.primary, 
        fontSize: theme.fonts.nav.item,
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '15px',
        paddingRight: '15px'
    }
    const menuItem = {
        backgroundColor: colors.soft,
        padding: '0',
        minHeight: 0,
        minWidth: 0
    }
    const portfolioBrand = {
        paddingLeft: '10px',
        fontSize: theme.fonts.nav.brand,
        color: colors.soft,
        textDecoration: 'none'
    }
    const menuListProps = {
        disablePadding: true,
        // backgroundColor: colors.primary
    }

    return (
        <div className='m-nav-container'>
            <Link to='/' style={portfolioBrand}>
                Matt Taylor Portfolio
            </Link>
            <div className='m-nav-dropdown'>
                <Button
                    style={dropdownButton}
                    onClick={(e) => showDropdown(e.target) }>
                    <MoreHorizIcon style={threeDots}/>
                </Button>
                <Menu
                    transitionDuration={600}
                    id='m-nav-menu'
                    anchorEl={anchor}
                    keepMounted
                    style={menu}
                    open={showingDropdown}
                    onClose={() => hideDropdown() }
                    MenuListProps={menuListProps}
                    
                    // anchorOrigin={{
                    //     vertical: 'bottom',
                    //     horizontal: 'center',
                    //   }}
                    //   transformOrigin={{
                    //     vertical: 'top',
                    //     horizontal: 'center',
                    //   }}
                    
                    >
                    <MenuItem
                        style={menuItem}
                        onClick={() => hideDropdown() }>
                        <Link to='/' style={linkContainer}>
                            Overview
                        </Link>
                    </MenuItem>
                    <MenuItem
                        style={menuItem}
                        onClick={() => hideDropdown() }>
                        <Link to='/projects' style={linkContainer}>
                            Projects
                        </Link>
                    </MenuItem>
                    <MenuItem
                        style={menuItem}
                        onClick={() => hideDropdown() }>
                        <Link to='/experience' style={linkContainer}>
                            Experience
                        </Link>
                    </MenuItem>
                    <MenuItem
                        style={menuItem}
                        onClick={() => hideDropdown() }>
                        <Link to='/skills' style={linkContainer}>
                            Skills
                        </Link>
                    </MenuItem>
                    <MenuItem
                        style={menuItem}
                        onClick={() => hideDropdown() }>
                        <Link to='/contact' style={linkContainer}>
                            Contact
                        </Link>
                    </MenuItem>
                    <MenuItem
                        style={menuItem}
                        onClick={() => hideDropdown() }>
                        <Link to='/blog' style={linkContainer}>
                            Blog
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}