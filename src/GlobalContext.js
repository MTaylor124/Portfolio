import React, {createContext, Component} from 'react'
import disableScroll from 'disable-scroll'

export const GlobalContext = createContext()

export class GlobalContextProvider extends Component {
    constructor(props) {
        super(props)


        this.state = {
            colors: {
                primary: 'rgb(0, 80, 80)',
                primaryLight: 'rgb(0, 167, 167)',
                primaryFaded: 'rgba(0, 80, 80, 0.4)',
                secondary: 'rgb(102, 195, 255)',
                secondaryTitle: 'rgba(102, 195, 255, 0.8)',
                secondaryFaded: 'rgb(174, 218, 248)',
                secondaryDark: 'rgb(0, 103, 172)',

                soft: 'rgb(220, 225, 233)',

                navText: 'white',

                accent: 'rgb(212, 175, 185)',
                highlight: 'rgb(241, 206, 2)',
                highlightFaded: 'rgba(241, 206, 2, 0.65)',
                fadedCloseIcon: 'rgba(100,100,100,0.4)',
                black: 'black'
            },









            experience: {
                experienceID: null,
                showingBackdrop: false,
                showBackdrop: (exp) => {
                    disableScroll.on()
                    this.setState(s => {
                        return s.experience.experienceID = exp
                    })
                    setTimeout(() => {
                        this.setState(s => {
                            return s.experience.showingBackdrop = true
                        })
                    }, 10)
                },
                hideBackdrop: () => {
                    disableScroll.off()
                    this.setState(s => {
                        return s.experience.showingBackdrop = false
                    })
                    setTimeout(() => {
                        this.setState(s => {
                            return s.experience.experienceID = null
                        })
                    }, 301)
                }
            },





















            nav: {
                showingDropdown: false,
                showDropdown: (anchor) => {
                    this.setState(s => {
                        s.nav.showingDropdown = true
                        s.nav.anchor = anchor
                        return s
                    })
                },
                hideDropdown: () => {
                    this.setState(s => {
                        s.nav.showingDropdown = false
                        return s
                    })
                }
            },
            theme: {
                fonts: {
                    nav: {
                        brand: '1.6rem',
                        item: '1.8rem',
                        icon: '50px'
                    },
                    projects: {
                        closeIcon: '40px'
                    },

                },
                fade: {
                    showFade: true,
                    hideFade: () => {
                        this.setState(s => {
                            return s.theme.fade.showFade = false
                        })
                    },
                    hidingNav: true,
                    hideNav: () => {
                        this.setState(s => {
                            return s.theme.fade.hidingNav = false
                        })
                    },
                    transitioning: false,
                    transition: () => {
                        if (this.state.theme.fade.transitioning) {
                            return
                        } else {
                            this.state.skills.clearUnderlines()
                            window.scrollTo(0, 0)
                            this.setState(s => {
                                return s.theme.fade.transitioning = true
                            })
                            setTimeout(() => {
                                this.setState(s => {
                                    return s.theme.fade.transitioning = false
                                })
                            }, 500)
                        }
                    }
                }
            },
            skills: {
                underline: [
                    // react 0
                    'none',
                    // firebase 1
                    'none',
                    // express 2
                    'none',
                    // css 3
                    'none',
                    // reactNative 4
                    'none',
                    // javascript 5
                    'none',
                    // git 6
                    'none',
                    // node 7
                    'none',
                    // mongo 8
                    'none',
                    // vscode 9
                    'none'
                ],
                toggleSkills: (index, old) => {
                    if (old === 'none') {
                        this.setState(s => {
                            return s.skills.underline[index] = 'underline rgb(0, 69, 133)'  
                        })
                    } else {
                        this.setState(s => {
                            return s.skills.underline[index] = 'none'
                        })
                    }
                },
                clearUnderlines: () => {
                    this.setState(s => {
                        return s.skills.underline = [
                            // react 0
                            'none',
                            // firebase 1
                            'none',
                            // express 2
                            'none',
                            // css 3
                            'none',
                            // reactNative 4
                            'none',
                            // javascript 5
                            'none',
                            // git 6
                            'none',
                            // node 7
                            'none',
                            // mongo 8
                            'none',
                            // vscode 9
                            'none'
                        ]
                    })
                }

            }
        }
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.state.theme.fade.hideFade()
    //     }, 1000)
    //     setTimeout(() => {
    //         this.state.theme.fade.hideNav()
    //     }, 500)
    // }
    render() {
        return (
            <GlobalContext.Provider value={this.state}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}