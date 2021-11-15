import React from 'react'
import './style/App.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { NavDesktop } from './Desktop/Nav/NavDesktop'
import { HomeDesktop } from './Desktop/Home/HomeDesktop'
import { ProjectsDesktop } from './Desktop/Projects/ProjectsDesktop'
import { ExperienceDesktop } from './Desktop/Experience/ExperienceDesktop'
import { SkillsDesktop } from './Desktop/Skills/SkillsDesktop'
import { ContactDesktop } from './Desktop/Contact/ContactDesktop'

// import Blog from './components/Blog/Blog'
// import FadeIn from './components/FadeIn/FadeIn'
// import FadeInNav from './components/FadeIn/FadeInNav'
// import FadeBetween from './components/FadeIn/FadeBetween'

export default function App() {
    // <Route path='/blog' component={Blog}/>
    // <FadeIn />
    // <FadeInNav />
    // <FadeBetween />

    return (
        <Router>
            <div className="app">
                <NavDesktop />
                <div className='d-overview-container'>
                    <Switch>
                        <Route exact path='/' component={HomeDesktop} />
                        <Route path='/projects' component={ProjectsDesktop}/>
                        <Route path='/experience' component={ExperienceDesktop}/>
                        <Route path='/contact' component={ContactDesktop} />
                        <Route path='/skills' component={SkillsDesktop}/>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
