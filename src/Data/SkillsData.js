export const skillsData = [
    {
        order: 0,
        included: true,
        buttonText: 'React',
        about: 'All projects built from scratch using Create-React-App',
        id: 'react-skills-000',
        sections: [
            {
                header: 'Functional Components', 
                id: 'react-header-000',
                points: [
                    {
                        body: 'Although my early projects were built mostly with Classes, I rely on functional components for their reduced file size and ease of use.',
                        id: 'react-000-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Hooks / Context', 
                id: 'react-header-001',
                points: [
                    {
                        body: 'For local state management I utilize React Hooks. For higher level (global) state, I use React Context. In complex applications, I sometimes use several context instances to lift up state that does not need to be global.',
                        id: 'react-001-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Highly Scalable Design',
                id: 'react-header-002',
                points: [
                    {
                        body: 'Any instance of repeating elements or components are generated based off JavaScript data sets. This greatly optimizes my apps when it comes to scalability, render speed, app size, and ease of debugging.',
                        id: 'react-002-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Optimized Renders',
                id: 'react-header-003',
                points: [
                    {
                        body: 'I rely heavily on the useEffect hook while building components to ensure my components are mounted and rendered the fewest times possible for a smooth User Experience',
                        id: 'react-003-point-000',
                        links: null
                    }
                ]
            }
        ]
    },
    {
        order: 1,
        included: true,
        buttonText: 'JavaScript',
        about: 'I utilize modern features (ES6+) of JavaScript within my React and vanilla JS web applications',
        id: 'jvs-skills-000',
        sections: [
            {
                header: 'Elequent Code',
                id: 'jvs-header-000',
                points: [
                    {
                        body: 'I focus on keeping my code DRY (Don\'t Repeat Yourself) to ensure my applications are the most readable for myself and other JS developers.',
                        id: 'jvs-000-point-000',
                        links: null
                    },
                    {
                        body: 'Not repeating code leads to my applications having the minimum code possible. This helps cut down on app size, complexity and render/build times',
                        id: 'jvs-000-point-001',
                        links: null
                    },
                ]
            },
            {
                header: 'Higher Order Functions',
                id: 'jvs-header-001',
                points: [
                    {
                        body: 'I utilize higher order functions within JS while working at the appropriate level of abstraction. No need to reinvent the wheel within every application.',
                        id: 'jvs-001-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Dom Manipulation',
                id: 'jvs-header-002',
                points: [
                    {
                        body: 'I reference the document object to create and manipulate nodes when appropriate.',
                        id: 'jvs-002-point-000',
                        links: null
                    }
                ]
            }
        ]
    },
    {
        order: 4,
        included: true,
        buttonText: 'CSS3',
        about: 'I style all my projects using Cascading Style Sheets',
        id: 'css-skills-000',
        sections: [
            {
                header: 'Flexbox',
                id: 'css-header-002',
                points: [
                    {
                        body: 'I use flexbox to design and structure each component within my applications.',
                        id: 'css-000-point-000',
                        links: null
                    },
                    {
                        body: 'Flex overflow allows for my applications to scale gracefully with varying device screen widths.',
                        id: 'css-000-point-000',
                        links: null
                    },
                    {
                        body: 'This portfolio, TheLotBroker and RankedSpikeRush are all built and structured with flexbox.',
                        id: 'css-000-point-001',
                        links: null
                    },
                ]
            },
            {
                header: 'Semantic Names',
                id: 'css-header-000',
                points: [
                    {
                        body: 'Classes and ids are named appropriately in the standard kebab-case naming convention.',
                        id: 'css-000-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Reusable Classes',
                id: 'css-header-000',
                points: [
                    {
                        body: 'Any rulesets that can be reused will be. This helps prevent having the same style being set in multiple places',
                        id: 'css-000-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Minimum Required Rulesets',
                id: 'css-header-001',
                points: [
                    {
                        body: 'Utilizing inheritance, I ensure my elements are not being given the same properties they will inherit from the css hierarchy.',
                        id: 'css-000-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Variables',
                id: 'css-header-002',
                points: [
                    {
                        body: 'I utilize named variables most often for Global themes. This Minimizes the amount of places a color or font would have to be changed.', //* Update
                        id: 'css-000-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Media Queries',
                id: 'css-header-002',
                points: [
                    {
                        body: 'I utilize @media queries to target specific device dimmensions to apply classes when appropriate. This allows for better scaling with different viewports.',
                        id: 'css-000-point-000',
                        links: null
                    }
                ]
            }
        ]
    },
    {
        order: 2,
        included: false,
        buttonText: 'Node',
        about: 'I use Node Package Manager (npm) to manage all of my projects. I frequently jump in the node cli runtime to test random JS logic I think of or see examples of.',
        id: 'nod-skills-000',
        sections: [
            {
                header: '3rd-Party Packages',
                id: 'nod-header-000',
                points: [
                    {
                        body: 'I use npm to install desired and to uninstall unused or unecessary external modules.',
                        id: '',
                        links: null
                    },
                    {
                        body: 'App deployment is done',
                        id: 'nod-000-point-001',
                        links: null
                    },
                ]
            },
            {
                header: 'Deploying',
                id: 'nod-header-000',
                points: [
                    {
                        body: '',
                        id: '',
                        links: null
                    },
                    {
                        body: '',
                        id: 'nod-000-point-001',
                        links: null
                    },
                ]
            }
        ]
    },
    {
        order: 8,
        included: true,
        buttonText: 'VSCode',
        about: 'I write all of my code in VSCode. I have used the IDE to build my personal projects and grade student\'s workshop exercises at Nucamp. ',
        id: 'vsc-skills-000',
        sections: [
            {
                header: 'Emmet and Shortcuts',
                id: 'vsc-header-000',
                points: [
                    {
                        body: 'I use emmet autocompletion regularly throughout my coding. I use VSCode keybindings and shortcuts to automate as much code as possible. As much as I love to hard code everything myself, the autocomplete never accidentally adds an extra "s" to the end of variable names and throws errors.', //* Personality
                        id: 'vsc-000-point-000',
                        links: null
                    },
                    {
                        body: 'I teach a VSCode and Keyboard shortcut tutorial at the end of the second workshop of my web development bootcamps. This is extra to the Nucamp curriculum and I show my students some of the things I wish I knew existed back when I was first learning to code.',
                        id: 'vsc-000-point-001',
                        links: null
                    },
                ]
            },
            {
                header: 'Integrated Terminal',
                id: 'vsc-header-000',
                points: [
                    {
                        body: 'I utilize the integrated terminal within VSCode while developing and deploying all of my applications.',
                        id: 'vsc-000-point-000',
                        links: null
                    },
                    {
                        body: 'I use npm to manage dependancies for my apps and to install 3rd party modules.',
                        id: 'vsc-000-point-001',
                        links: null
                    },
                ]
            },
            {
                header: 'Comments',
                id: 'vsc-header-000',
                points: [
                    {
                        body: 'Although I rarely comment my own code, I use comments during my teaching to provide constructive feedback within student\'s own code. ',
                        id: 'vsc-000-point-000',
                        links: null
                    },
                    {
                        body: 'I make use of all of VSCode\'s different colors for corresponding concerns. Red is for critical errors or when code has clear room for optimization. Blue is for Concept sections, or as a label for the underlining theme of the example. Bright and dark(standard) comments for remaining comments with brighter to emphasize select lines.',
                        id: 'vsc-000-point-001',
                        links: null
                    },
                    {
                        body: 'HTML, CSS and JS all have separate commenting out conventions and I frequently use all of them. Each can be highlighted in all 4 colors.',
                        id: 'vsc-000-point-001',
                        links: null
                    },
                ]
            }
        ]
    },
    {
        order: 6,
        included: true,
        buttonText: 'Github',
        about: 'I use github to host each of my project\'s repositories.',
        id: 'git-skills-000',
        sections: [
            {
                header: 'Concise Commits',
                id: 'git-header-000',
                points: [
                    {
                        body: 'I do many commits, each of which only had the relevant files for a specific feature or modification.',
                        id: 'git-000-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Appropriate Branches',
                id: 'git-header-000',
                points: [
                    {
                        body: 'For my personal projects I tend to stay on the master/main branch. During teach development, I work with each teammate to plan for branchs to be made for each required feature with a clear log of changes made.',
                        id: 'git-000-point-000',
                        links: null
                    }
                ]
            }
        ]
    },
    {
        order: 5,
        included: false,
        buttonText: 'HTML5',
        about: 'I use html elemnts ',
        id: 'htm-skills-000',
        sections: [
            {
                header: 'Semantically Named Elements',
                id: 'htm-header-000',
                points: [
                    {
                        body: 'Accessibility',
                        id: 'htm-000-point-000',
                        links: null
                    },
                    {
                        body: '',
                        id: 'htm-000-point-001',
                        links: null
                    },
                ]
            }
        ]
    },
    {
        order: 3,
        included: true,
        buttonText: 'Material-UI',
        about: 'I use many of the components that in the MUI library throughout my applications.',
        id: 'mui-skills-000',
        sections: [
            {
                header: 'Custom Components',
                id: 'mui-header-000',
                points: [
                    {
                        body: 'I highly customize each component I import to meet my specific needs.',
                        id: 'mui-000-point-000',
                        links: null
                    },
                    {
                        body: 'Style is provided through Object Oriented Style Sheets similar to those used in vanilla React Native',
                        id: 'mui-000-point-001',
                        links: null
                    },
                    {
                        body: 'Styles given to MUI components are JavaScript Objects. Global themes can be managed in higher order state (context) similarly to how global variables in CSS.',
                        id: 'mui-000-point-000',
                        links: null
                    },
                    {
                        body: 'The components I have the most experience with are Backdrop, Button/ButtonGroup, TextField, Accordion, Tabs, Menus, Progress, and Divider',
                        id: 'mui-000-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Icon Library',
                id: 'mui-header-000',
                points: [
                    {
                        body: 'The MUI icon library has tasteful and minimalistc icons that I use regularly. They add a nice touch without being distracting.',
                        id: 'mui-000-point-000',
                        links: null
                    },
                    {
                        body: 'Icons can be styled just like any other MUI component.',
                        id: 'mui-000-point-001',
                        links: null
                    }
                ]
            }
        ]
    },
    {
        order: 7,
        included: true,
        buttonText: 'Google Firebase',
        about: 'Firebase is the BaaS I have used most in my freelance and personal projects',
        id: 'firebase-skills-000',
        sections: [
            {
                header: 'Databases',
                id: 'firebase-header-000',
                points: [
                    {
                        body: 'I maximize the speed of the MySQL databases through efficient data structuring. Firebase charges based on number of queries so my database read/writes are optimized to use as few queries as possible.',
                        id: 'firebase-000-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Storage',
                id: 'firebase-header-001',
                points: [
                    {
                        body: 'I utilize Firebase storage for efficient and image upload functionality. All Media storage is secured by my own custom security rules.',
                        id: 'firebase-001-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Authentication',
                id: 'firebase-header-002',
                points: [
                    {
                        body: 'I implement Firebase Authentication in my applications to easily allow secure login functionality as well as persisting login status through multiple sessions.',
                        id: 'firebase-002-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Hosting',
                id: 'firebase-header-003',
                points: [
                    {
                        body: 'I have used Firebase Hosting and have been able to quickly deploy and redeploy applications as they are developed. I have used Firebase hosting for both small projects to large freelance projects and have been able to successfully link domains from GoDaddy and NameCheap.',
                        id: 'firebase-003-point-000',
                        links: null
                    }
                ]
            }
        ]
    },
]

export const includedSkills = skillsData.filter(x => x.included).sort((x, y) => x.order - y.order)

export const boilerplate = {
    included: false,
    buttonText: '',
    about: '',
    id: '###-skills-000',
    sections: [
        {
            header: '',
            id: '###-header-000',
            points: [
                {
                    body: '',
                    id: '###-###-point-000',
                    links: null
                },
                // {
                //     body: '',
                //     id: '###-###-point-000',
                //     links: [
                //         {
                //             text: '',
                //             link: ''
                //         }
                //     ]
                // }
            ]
        }
    ]
}