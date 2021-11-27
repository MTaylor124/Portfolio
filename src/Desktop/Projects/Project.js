import React from 'react'

import PhotoSizeSelectActualTwoToneIcon from '@material-ui/icons/PhotoSizeSelectActualTwoTone'
import FormatListBulletedTwoToneIcon from '@material-ui/icons/FormatListBulletedTwoTone'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone'
import WallpaperIcon from '@material-ui/icons/Wallpaper'
import SpeedIcon from '@material-ui/icons/Speed'
import GroupIcon from '@material-ui/icons/Group'
import TimerIcon from '@material-ui/icons/Timer'
import EditIcon from '@material-ui/icons/Edit'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import CodeIcon from '@material-ui/icons/Code'

export const Project = ({ proj }) => {
    if (!proj) return <></>

    const icons = { color: 'rgb(0, 69, 133)', fontSize: '60px' }

    //! There must be a better way of going about this
    const getIcon = icon => {
        if (icon === 'PhoneAndroidIcon') return <PhoneAndroidIcon style={icons}/>
        else if (icon === 'ChatTwoToneIcon') return <ChatTwoToneIcon style={icons}/>
        else if (icon === 'FormatListBulletedTwoToneIcon') return <FormatListBulletedTwoToneIcon style={icons}/>
        else if (icon === 'PhotoSizeSelectActualTwoToneIcon') return <PhotoSizeSelectActualTwoToneIcon style={icons}/>
        else if (icon === 'WallpaperIcon') return <WallpaperIcon style={icons}/>
        else if (icon === 'SpeedIcon') return <SpeedIcon style={icons}/>
        else if (icon === 'GroupIcon') return <GroupIcon style={icons}/>
        else if (icon === 'TimerIcon') return <TimerIcon style={icons}/>
        else if (icon === 'EditIcon') return <EditIcon style={icons}/>
        else if (icon === 'TouchAppIcon') return <TouchAppIcon style={icons}/>
        else if (icon === 'MenuBookIcon') return <MenuBookIcon style={icons}/>
        else if (icon === 'CodeIcon') return <CodeIcon style={icons}/>
        else if (icon === 'AccountBalanceWalletIcon') return <AccountBalanceWalletIcon style={icons}/>
        else if (icon === 'AccountTreeIcon') return <AccountTreeIcon style={icons}/>
        else return 'ERROR'
    }

    return (
        <div className="d-project-body">
            <section className='about'>
                <header>About</header>
                <p>{proj.about}</p>
            </section>
            <section className="highlights">
                <header>Highlights</header>
                {proj.highlights.map((h, i) => (
                    <div className='item' key={`${proj.name}-h-${i}`}>
                        {getIcon(h.icon)}
                        <section>
                            <header>{h.title}</header>
                            <p>{h.description}</p>
                        </section>
                    </div>
                ))}
            </section>
            <section className="tech">
                <header>Tech</header>
                {proj.tech.map((t, i) => (
                    <section className="item" key={`${proj.name}-t-${i}`}>
                        <header>{t.title}</header>
                        <p>{t.description}</p>
                    </section>
                ))}
            </section>
        </div>
    )
}