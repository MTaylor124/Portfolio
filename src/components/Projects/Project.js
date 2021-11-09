import React from 'react'

import PhotoSizeSelectActualTwoToneIcon from '@material-ui/icons/PhotoSizeSelectActualTwoTone'
import FormatListBulletedTwoToneIcon from '@material-ui/icons/FormatListBulletedTwoTone'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone'
import WallpaperIcon from '@material-ui/icons/Wallpaper'
import SpeedIcon from '@material-ui/icons/Speed'
import GroupIcon from '@material-ui/icons/Group'
import TimerIcon from '@material-ui/icons/Timer'

export const Project = ({proj}) => {
    if (!proj) return <></>

    const icons = { color: 'rgb(0, 69, 133)', fontSize: '60px' }

    const getIcon = (icon) => {
        if (icon === 'PhoneAndroidIcon') return <PhoneAndroidIcon style={icons}/>
        else if (icon === 'ChatTwoToneIcon') return <ChatTwoToneIcon style={icons}/>
        else if (icon === 'FormatListBulletedTwoToneIcon') return <FormatListBulletedTwoToneIcon style={icons}/>
        else if (icon === 'PhotoSizeSelectActualTwoToneIcon') return <PhotoSizeSelectActualTwoToneIcon style={icons}/>
        else if (icon === 'WallpaperIcon') return <WallpaperIcon style={icons}/>
        else if (icon === 'SpeedIcon') return <SpeedIcon style={icons}/>
        else if (icon === 'GroupIcon') return <GroupIcon style={icons}/>
        else if (icon === 'TimerIcon') return <TimerIcon style={icons}/>
        else return 'ICON ERROR'
    }

    return (
        <div className="d-project-body">
            <section className='about'>
                <header>About</header>
                <p>{proj.about}</p>
            </section>
            <section className="highlights">
                <header>Highlights</header>
                {proj.highlights.map(h => {
                    return (
                        <div className='item' key={h.id}>
                            {getIcon(h.icon)}
                            <section>
                                <header>{h.title}</header>
                                <p>{h.description}</p>
                            </section>
                        </div>
                    )
                })}
            </section>
            <section className="tech">
                <header>Tech</header>
                {proj.tech.map(t => {
                    return (
                        <section className="item" key={t.id}>
                            <header>{t.title}</header>
                            <p>{t.description}</p>
                        </section>
                    )
                })}
            </section>
        </div>
    )
}