import React from 'react'
import { Link } from 'react-router-dom'

export default function NavDesktop() {

    const homeLink = { textDecoration: 'none', color: 'white', paddingLeft: '10px', fontSize: '1.8rem' }
    const linkItem = { textDecoration: 'none', color: 'white' }

    const navItems = [
        { text: 'Overview', id: 'nav-link-item-000', link: '/' },
        { text: 'Projects', id: 'nav-link-item-001', link: '/projects' },
        { text: 'Experience', id: 'nav-link-item-002', link: '/experience' },
        { text: 'Skills', id: 'nav-link-item-003', link: '/skills' },
        { text: 'Contact', id: 'nav-link-item-004', link: '/contact' }
    ]

    return (
        <div className='d-nav-container'>
            <Link to='/' style={homeLink}>Matt Taylor Portfolio</Link>
            <section>
                {navItems.map(item => (
                    <Link to={item.link} style={linkItem} className={item.text !== 'Contact' ? 'd-nav-item' : 'd-nav-item-last'} key={item.id}>
                        {item.text}
                    </Link>
                ))}
            </section>
        </div>
    )
}