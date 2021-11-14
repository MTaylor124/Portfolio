import React from 'react'
import { Link } from 'react-router-dom'
import { navData } from './NavData'

export default function NavDesktop() {
    const homeLink = { textDecoration: 'none', color: 'white', paddingLeft: '10px', fontSize: '1.8rem' }
    const linkItem = { textDecoration: 'none', color: 'white' }

    return (
        <div className='d-nav-container'>
            <Link to='/' style={homeLink}>Matt Taylor Portfolio</Link>
            <section>
                {navData.map(item => (
                    <Link to={item.link} style={linkItem} className={item.text !== 'Contact' ? 'item' : 'last-item'} key={item.id}>
                        {item.text}
                    </Link>
                ))}
            </section>
        </div>
    )
}