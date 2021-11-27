export const skillsData = [
    {
        order: 0,
        name: 'react',
        included: true,
        buttonText: 'React',
        about: 'All projects built from scratch using Create-React-App',
        sections: [
            {
                header: 'Functional Components', 
                points: [
                    {
                        body: 'Although my early projects were built mostly with Classes, I rely on functional components for their reduced file size and ease of use.',
                        links: null
                    }
                ]
            },
            {
                header: 'Hooks / Context', 
                points: [
                    {
                        body: 'For local state management I utilize React Hooks. For higher level (global) state, I use React Context. In complex applications, I sometimes use several context instances to lift up state that does not need to be global.',
                        links: null
                    }
                ]
            },
            {
                header: 'Highly Scalable Design',
                points: [
                    {
                        body: 'Any instance of repeating elements or components are generated based off JavaScript data sets. This greatly optimizes my apps when it comes to scalability, render speed, app size, and ease of debugging.',
                        links: null
                    }
                ]
            },
            {
                header: 'Optimized Renders',
                points: [
                    {
                        body: 'I rely heavily on the useEffect hook while building components to ensure my components are mounted and rendered the fewest times possible for a smooth User Experience',
                        links: null
                    }
                ]
            }
        ]
    },
    {
        order: 1,
        name: 'javascript',
        included: true,
        buttonText: 'JavaScript',
        about: 'I utilize modern features (ES6+) of JavaScript within my React and vanilla JS web applications',
        sections: [
            {
                header: 'Elequent Code',
                points: [
                    {
                        body: 'I focus on keeping my code DRY (Don\'t Repeat Yourself) to ensure my applications are the most readable for myself and other JS developers.',
                        links: null
                    },
                    {
                        body: 'Not repeating code leads to my applications having the minimum code possible. This helps cut down on app size, complexity and render/build times',
                        links: null
                    },
                ]
            },
            {
                header: 'Higher Order Functions',
                points: [
                    {
                        body: 'I utilize higher order functions within JS while working at the appropriate level of abstraction. No need to reinvent the wheel within every application.',
                        links: null
                    }
                ]
            },
            {
                header: 'Dom Manipulation',
                points: [
                    {
                        body: 'I reference the document object to create and manipulate nodes when appropriate.',
                        links: null
                    }
                ]
            }
        ]
    },
    {
        order: 4,
        name: 'css',
        included: true,
        buttonText: 'CSS3',
        about: 'I style all my projects using Cascading Style Sheets',
        sections: [
            {
                header: 'Flexbox',
                points: [
                    {
                        body: 'I use flexbox to design and structure each component within my applications.',
                        links: null
                    },
                    {
                        body: 'Flex overflow allows for my applications to scale gracefully with varying device screen widths.',
                        links: null
                    },
                    {
                        body: 'This portfolio, TheLotBroker and RankedSpikeRush are all built and structured with flexbox.',
                        links: null
                    },
                ]
            },
            {
                header: 'Semantic Names',
                points: [
                    {
                        body: 'Classes and ids are named appropriately in the standard kebab-case naming convention.',
                        links: null
                    }
                ]
            },
            {
                header: 'Reusable Classes',
                points: [
                    {
                        body: 'Any rulesets that can be reused will be. This helps prevent having the same style being set in multiple places',
                        links: null
                    }
                ]
            },
            {
                header: 'Minimum Required Rulesets',
                points: [
                    {
                        body: 'Utilizing inheritance, I ensure my elements are not being given the same properties they will inherit from the css hierarchy.',
                        links: null
                    }
                ]
            },
            {
                header: 'Variables',
                points: [
                    {
                        body: 'I utilize named variables most often for Global themes. This Minimizes the amount of places a color or font would have to be changed.', //* Update
                        links: null
                    }
                ]
            },
            {
                header: 'Media Queries',
                points: [
                    {
                        body: 'I utilize @media queries to target specific device dimmensions to apply classes when appropriate. This allows for better scaling with different viewports.',
                        links: null
                    }
                ]
            }
        ]
    },
    {
        order: 2,
        name: 'node',
        included: false,
        buttonText: 'Node',
        about: 'I use Node Package Manager (npm) to manage all of my projects. I frequently jump in the node cli runtime to test random JS logic I think of or see examples of.',
        sections: [
            {
                header: '3rd-Party Packages',
                points: [
                    {
                        body: 'I use npm to install desired and to uninstall unused or unecessary external modules.',
                        links: null
                    },
                    {
                        body: 'App deployment is done',
                        links: null
                    },
                ]
            },
            {
                header: 'Deploying',
                points: [
                    {
                        body: '',
                        links: null
                    },
                    {
                        body: '',
                        links: null
                    },
                ]
            }
        ]
    },
    {
        order: 8,
        name: 'vscode',
        included: true,
        buttonText: 'VSCode',
        about: 'I write all of my code in VSCode. I have used the IDE to build my personal projects and grade student\'s workshop exercises at Nucamp. ',
        sections: [
            {
                header: 'Emmet and Shortcuts',
                points: [
                    {
                        body: 'I use emmet autocompletion regularly throughout my coding. I use VSCode keybindings and shortcuts to automate as much code as possible. As much as I love to hard code everything myself, the autocomplete never accidentally adds an extra "s" to the end of variable names and throws errors.', //* Personality
                        links: null
                    },
                    {
                        body: 'I teach a VSCode and Keyboard shortcut tutorial at the end of the second workshop of my web development bootcamps. This is extra to the Nucamp curriculum and I show my students some of the things I wish I knew existed back when I was first learning to code.',
                        links: null
                    },
                ]
            },
            {
                header: 'Integrated Terminal',
                points: [
                    {
                        body: 'I utilize the integrated terminal within VSCode while developing and deploying all of my applications.',
                        links: null
                    },
                    {
                        body: 'I use npm to manage dependancies for my apps and to install 3rd party modules.',
                        links: null
                    },
                ]
            },
            {
                header: 'Comments',
                points: [
                    {
                        body: 'Although I rarely comment my own code, I use comments during my teaching to provide constructive feedback within student\'s own code. ',
                        links: null
                    },
                    {
                        body: 'I make use of all of VSCode\'s different colors for corresponding concerns. Red is for critical errors or when code has clear room for optimization. Blue is for Concept sections, or as a label for the underlining theme of the example. Bright and dark(standard) comments for remaining comments with brighter to emphasize select lines.',
                        links: null
                    },
                    {
                        body: 'HTML, CSS and JS all have separate commenting out conventions and I frequently use all of them. Each can be highlighted in all 4 colors.',
                        links: null
                    },
                ]
            }
        ]
    },
    {
        order: 6,
        name: 'github',
        included: true,
        buttonText: 'Github',
        about: 'I use github to host each of my project\'s repositories.',
        sections: [
            {
                header: 'Concise Commits',
                points: [
                    {
                        body: 'I do many commits, each of which only had the relevant files for a specific feature or modification.',
                        links: null
                    }
                ]
            },
            {
                header: 'Appropriate Branches',
                points: [
                    {
                        body: 'For my personal projects I tend to stay on the master/main branch. During teach development, I work with each teammate to plan for branchs to be made for each required feature with a clear log of changes made.',
                        links: null
                    }
                ]
            }
        ]
    },
    {
        order: 5,
        name: 'html',
        included: false,
        buttonText: 'HTML5',
        about: 'I use html elemnts ',
        sections: [
            {
                header: 'Semantically Named Elements',
                points: [
                    {
                        body: 'Accessibility',
                        links: null
                    },
                    {
                        body: '',
                        links: null
                    },
                ]
            }
        ]
    },
    {
        order: 3,
        name: 'mui',
        included: true,
        buttonText: 'Material-UI',
        about: 'I use many of the components that in the MUI library throughout my applications.',
        sections: [
            {
                header: 'Custom Components',
                points: [
                    {
                        body: 'I highly customize each component I import to meet my specific needs.',
                        links: null
                    },
                    {
                        body: 'Style is provided through Object Oriented Style Sheets similar to those used in vanilla React Native',
                        links: null
                    },
                    {
                        body: 'Styles given to MUI components are JavaScript Objects. Global themes can be managed in higher order state (context) similarly to how global variables in CSS.',
                        links: null
                    },
                    {
                        body: 'The components I have the most experience with are Backdrop, Button/ButtonGroup, TextField, Accordion, Tabs, Menus, Progress, and Divider',
                        links: null
                    }
                ]
            },
            {
                header: 'Icon Library',
                points: [
                    {
                        body: 'The MUI icon library has tasteful and minimalistc icons that I use regularly. They add a nice touch without being distracting.',
                        links: null
                    },
                    {
                        body: 'Icons can be styled just like any other MUI component.',
                        links: null
                    }
                ]
            }
        ]
    },
    {
        order: 7,
        name: 'firebase',
        included: true,
        buttonText: 'Google Firebase',
        about: 'Firebase is the BaaS I have used most in my freelance and personal projects',
        sections: [
            {
                header: 'Databases',
                points: [
                    {
                        body: 'I maximize the speed of the MySQL databases through efficient data structuring. Firebase charges based on number of queries so my database read/writes are optimized to use as few queries as possible.',
                        links: null
                    }
                ]
            },
            {
                header: 'Storage',
                points: [
                    {
                        body: 'I utilize Firebase storage for efficient and image upload functionality. All Media storage is secured by my own custom security rules.',
                        links: null
                    }
                ]
            },
            {
                header: 'Authentication',
                points: [
                    {
                        body: 'I implement Firebase Authentication in my applications to easily allow secure login functionality as well as persisting login status through multiple sessions.',
                        links: null
                    }
                ]
            },
            {
                header: 'Hosting',
                points: [
                    {
                        body: 'I have used Firebase Hosting and have been able to quickly deploy and redeploy applications as they are developed. I have used Firebase hosting for both small projects to large freelance projects and have been able to successfully link domains from GoDaddy and NameCheap.',
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
    name: '',
    sections: [
        {
            header: '',
            points: [
                {
                    body: '',
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