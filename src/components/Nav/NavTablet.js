import React from 'react'

import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

export default function NavTablet() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const navStyle = {
        fontSize: '80px',
        color: 'white'
    }
    const dropdownItemStyle = { 
        textDecoration: 'none', 
        textAlign: 'center', 
        width: '100%', 
        color: 'white', 
        fontSize: '2.5rem',
        padding: '1.2vh' 
    }
    return (
        <div className='t-nav-container'>
            <div className='t-nav-header'>
                <Link to='/' style={{ textDecoration: 'none' }} className='t-nav-brand-container'>
                    {/* <img src={Logo} alt='logo' className='t-nav-logo'/> */}
                    <div className='t-nav-brand'>Matt Taylor Portfolio</div>
                </Link>
            </div>
            <div className='t-nav-dropdown'>
                <Button aria-controls='fade-menu' aria-haspopup='true' onClick={handleClick}>
                    <MoreHorizIcon style={navStyle}/>
                </Button>
                <Menu
                    id='t-nav-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{ disablePadding: true }}>
                    
                    <MenuItem style={{backgroundColor: 'rgb(12, 95, 95)'}} onClick={handleClose}>
                        <Link to='/' style={dropdownItemStyle}>
                            <div className='t-nav-item'>Overview</div>
                        </Link>
                    </MenuItem>
                    <MenuItem style={{backgroundColor: 'rgb(12, 95, 95)'}} onClick={handleClose}>
                        <Link to='/projects' style={dropdownItemStyle}>
                            <div className='t-nav-item'>Projects</div>
                        </Link>
                    </MenuItem>
                    <MenuItem style={{backgroundColor: 'rgb(12, 95, 95)'}} onClick={handleClose}>
                        <Link to='/experience' style={dropdownItemStyle}>
                            <div className='t-nav-item'>Experience</div>
                        </Link>
                    </MenuItem>
                    <MenuItem style={{backgroundColor: 'rgb(12, 95, 95)'}} onClick={handleClose}>
                        <Link to='/skills' style={dropdownItemStyle}>
                            <div className='t-nav-item'>Skills</div>
                        </Link>
                    </MenuItem>
                    {/* <MenuItem style={{backgroundColor: 'rgb(12, 95, 95)'}} onClick={handleClose}>
                        <Link to='/interests' style={dropdownItemStyle}>
                            <div className='t-nav-item'>Interests</div>
                        </Link>
                    </MenuItem> */}
                    <MenuItem style={{backgroundColor: 'rgb(12, 95, 95)'}} onClick={handleClose}>
                        <Link to='/contact' style={dropdownItemStyle}>
                            <div className='t-nav-item'>Contact</div>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}