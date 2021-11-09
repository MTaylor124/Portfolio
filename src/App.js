import React from 'react'
import './style/App.css'

import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

import {Nav} from './components/Nav/Nav'
import {Home} from './components/Home/Home'
import {Contact} from './components/Contact/Contact'
import {Experience} from './components/Experience/Experience'
import {Projects} from './components/Projects/Projects'
// import Interests from './components/Interests/Interests'
// import {Skills} from './components/Skills/Skills'
// import Blog from './components/Blog/Blog'
// import FadeIn from './components/FadeIn/FadeIn'
// import FadeInNav from './components/FadeIn/FadeInNav'
// import FadeBetween from './components/FadeIn/FadeBetween'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    background: 'rgb(255, 255, 255)',
    palette: {
        primary: {
            main: 'rgb(12, 95, 95)',
            light: 'rgba(18, 223, 212, 0.993)',
            dark: 'rgb(0, 0, 0)'
        },
    },
    overrides: {
        MuiExpansionPanel: {
            root: {
                '&:before': {
                display: 'none'
                },
            },
        },
    }
})

export default function App() {
    // <Route path='/blog' component={Blog}/>
    // <Route path='/skills' component={Skills}/>
    // <FadeIn />
    // <FadeInNav />
    // <FadeBetween />
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="app">
                    <Nav />
                    <div className='d-overview-container'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/projects' component={Projects}/>
                            <Route path='/experience' component={Experience}/>
                            <Route path='/contact' component={Contact} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    )
}
