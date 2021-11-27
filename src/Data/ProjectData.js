import TheLotBroker from './Projects/LotBrokerDesktop.png'
import Blog from './Projects/BlogDesktop.png' 
import Icebreaker from './Projects/Icebreaker.png'
import SpikeRush from './Projects/SpikeRushDesktop.png'
import Mattcersize from './Projects/MattcersizePreview.png'
import Portfolio from './Projects/Portfolio.png'

export const projectData = [
    //! The Lot Broker
    {
        included: true,
        order: 0,
        name: 'TheLotBroker',
        preview: TheLotBroker,
        link: 'https://thelotbroker.com/',
        git: '',
        buttonText: 'The Lot Broker',
        about: 'TheLotBroker.com is a freelance project I picked up in early February 2020. I built an entirely new web app that would allow his colleagues to easier view his current inventory of Lots and to allow clients to easily contact him.',
        highlights: [
            {
                title: 'Mobile Optimized',
                description: 'The entire application was built from the ground up to be optimized for Mobile and Tablet viewports',
                icon: 'PhoneAndroidIcon'
            },
            {
                title: 'Current Inventory',
                description: 'Full CRUD control for Admin and allows users to filter inventory for quick searching',
                icon: 'FormatListBulletedTwoToneIcon'
            },
            {
                title: 'Image Galleries',
                description: 'Allows the lot broker upload/delete images for each lot at any time as well as static Lot Galleries',
                icon: 'PhotoSizeSelectActualTwoToneIcon'
            },
            {
                title: 'Messaging/Testimonials',
                description: 'Full CRUD control for Admin and allows users to filter inventory for quick searching',
                icon: 'ChatTwoToneIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components, Higher Level State managed with Context',
            },
            {
                title: 'Google Firebase',
                description: 'Utilized for Hosting, Databases, Storage, and Authentication',
            },
            {
                title: 'CSS3',
                description: 'Styled with CSS and Object-Oriented CSS with Material-UI',
            }
        ]
    },
    //! Ranked Spike Rush
    {
        included: true,
        order: 1,
        name: 'RankedSpikeRush',
        preview: SpikeRush,
        git: 'https://github.com/MTaylor124/RankedSpikeRush',
        link: 'https://rankedspikerush.web.app/',
        buttonText: 'Ranked Spike Rush',
        about: 'RankedSpikeRush is a personal project based on a temporary game mode in the video game Rocket League. I built the site in less than 2 days and a week later I had build up a community of over 200 players and organized and carried out a 50+ team tournament that crowdfunded $200 grand prize for the winners.',
        highlights: [
            {
                title: 'Mobile Friendly',
                description: 'Web application was built from the ground-up to be optimized on both desktop and mobile platforms.',
                icon: 'PhoneAndroidIcon'
            },
            {
                title: 'Animated background',
                description: 'Smooth and exciting animated background featuring highlights from several Spike Rush games',
                icon: 'WallpaperIcon'
            },
            {
                title: 'Built in 24 Hours',
                description: 'The entire multi-platform web application was successfully planned, developed and built in less than 24 hours.',
                icon: 'SpeedIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components',
            },
            {
                title: 'Google Firebase',
                description: 'Utilized for Hosting',
            },
            {
                title: 'CSS3',
                description: 'Styled with CSS and Object-Oriented CSS with Material-UI',
            }
        ]
    },
    //! GA Hackaton
    {
        included: true,
        order: 5,
        name: 'IcebreakerMaker',
        preview: Icebreaker,
        link: 'https://ice-breaker-maker.web.app/',
        git: 'https://github.com/MTaylor124/ice-breaker-maker',
        buttonText: 'General Assembly Hackathon',
        about: 'I was Group Leader for a team of 5 that included both UX/UI experts and software engineers to successfully prototype, build, and present a fully functional mobile web app in less than 3 days.',
        highlights: [
            {
                title: 'Mobile Optimized',
                description: 'Web application was built from the ground-up to be optimized on mobile platforms',
                icon: 'PhoneAndroidIcon'
            },
            {
                title: 'Diverse Team',
                description: 'I worked closely with UX developers as well as several other software engineers',
                icon: 'GroupIcon'
            },
            {
                title: 'Built in 3 Days',
                description: 'The entire planning, development and presentation were done in less than 72 hours',
                icon: 'TimerIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components',
            },
            {
                title: 'MySQL',
                description: 'Utilized Google Firebase for MySQL Databases',
            },
            {
                title: 'CSS3',
                description: 'Styled with CSS and Object-Oriented CSS with Material-UI',
            }
        ]
    },
    //! Blog 
    {
        included: true,
        order: 4,
        name: 'Blog',
        preview: Blog,
        link: null,
        buttonText: 'Blog',
        git: '',
        about: 'My blog is currently a personal project of mine that I plan to include as an extension of my portfolio. The blog interface currently allows users to write their own blogs that are divided into several sections and can view or edit them while interacting with a smooth yet elegant user interface. NOTE: BLOG CURRENTLY DISABLED UNTIL AFTER PORTFOLIO IS REFACTORED',
        highlights: [
            {
                title: 'Mobile Optimized',
                description: 'Web application was built from the ground-up to be optimized on Mobile viewports',
                icon: 'PhoneAndroidIcon'
            },
            {
                title: 'Creative Control',
                description: 'I built the blog interface to be efficient and responsive for users to create and edit Blog Posts',
                icon: 'EditIcon'
            },
            {
                title: 'Responsive Feedback',
                description: 'Every action has immediate user feedback as well as loading animations and transitions for a smooth mobile experience',
                icon: 'TouchAppIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components and utilized Context for State Management',
            },
            {
                title: 'MySQL',
                description: 'Utilized Google Firebase for non-relational databases for Blog Data',
            },
            {
                title: 'CSS3',
                description: 'Used CSS and Object Oriented CSS with Material-UI',
            }
        ]
    },
    //! Mattcersize 
    {
        included: true,
        order: 6,
        name: 'Mattcersize',
        preview: Mattcersize,
        link: 'https://mtaylor124.github.io/Mattcersize-Client/#/',
        buttonText: 'Mattcersize (Deprecated)',
        git: 'https://github.com/MTaylor124/Mattcersize-Client',
        about: 'Mattcersize is a mobile-friendly Workout + Exercise tracker that was built in less than 4 days. This was my first fully-fleded React App that allowed users to catalog their workouts including specific exercises, number of reps and weight. NOTE: HEROKU EXTENSION DEPRECATED. APP NO LONGER FUNCTIONAL',
        highlights: [
            {
                title: 'Mobile Friendly',
                description: 'Web application was built from the ground-up to be optimized on mobile platforms.',
                icon: 'PhoneAndroidIcon'
            },
            {
                title: 'Resource Control',
                description: 'Full CRUD control for users for their own workouts and exercises.',
                icon: 'EditIcon'
            },
            {
                title: 'Built in 4 Days',
                description: 'The entire project was planned and built in less than 4 days',
                icon: 'SpeedIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components',
            },
            {
                title: 'Express.js',
                description: 'Wrote custom security features for authentication and to CRUD resources.',
            },
            {
                title: 'Heroko / MongoDB',
                description: 'Utilized for databases',
            }
        ]
    },
    //! Chuzr
    {
        included: false,
        order: 3,
        name: 'Chuzr',
        preview: null,
        link: null,
        buttonText: 'Chuzr (in progress)',
        git: '',
        about: '',
        highlights: [
            {
                title: '',
                description: '',
                icon: ''
            },
            {
                title: '',
                description: '',
                icon: 'FormatListBulletedTwoToneIcon'
            },
            {
                title: '',
                description: '',
                icon: 'PhotoSizeSelectActualTwoToneIcon'
            },
            {
                title: '',
                description: '',
                icon: 'ChatTwoToneIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components\n\nStage managed with Context',
            },
            {
                title: 'Google Firebase',
                description: 'Utilized for Hosting, Databases, Storage, and Authentication',
            },
            {
                title: 'CSS3',
                description: 'Styled with CSS and Object-Oriented CSS with Material-UI',
            }
        ]
    },
    //! Portfolio
    {
        included: true,
        order: 2,
        name: 'Portfolio',
        preview: Portfolio,
        link: null,
        buttonText: 'Portfolio',
        git: 'https://github.com/MTaylor124/Portfolio',
        about: 'My portfolio showcases my front end development skills. Portfolio has been refactored to use React.js best practices. Code is written DRY using modern JavaScript (ES6) features.',
        highlights: [
            {
                title: 'Hooks / Context',
                description: 'Build using React best practices. Local state managed with hooks and higher level (global) state managed with React Context.',
                icon: 'AccountBalanceWalletIcon'
            },
            {
                title: 'ES6 JavaScript',
                description: 'Codebase is designed elequently with an focus on DRY code and Higher order functions. Modern JavaScript features are implemented throughout including arrow functions, object destructuring and template literals.',
                icon: 'CodeIcon'
            },
            {
                title: 'Highly Scalable',
                description: 'Repeating elements are generated based on JavaScript data sets. Because of this, adding and removing additional components within the Projects/Experience/Skills sections is done using the minimal code possible. This greatly optimizes app size and ease of use.',
                icon: 'AccountTreeIcon'
            },
            {
                title: 'Material UI',
                description: 'Many components within the 3rd-party Material UI (MUI) library are utilized for their elegant design. Some of the components used are Backdrops (this popup), Accordion (skills section) and the material Icons used throughout',
                icon: 'MenuBookIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components',
            },
            {
                title: 'Google Firebase',
                description: 'Utilized for Hosting',
            },
            {
                title: 'CSS3',
                description: 'Styled with CSS',
            }
        ]
    }
]

export const includedProjects = projectData.filter(item => item.included).sort((x, y) => x.order - y.order)

export const boilerplate = {
    included: false,
    order: 8, // Add 1 after use
    name: '',
    preview: null, // Picture
    route: '', // Relative route to picture
    link: '', // Link to deployed url
    git: '',
    buttonText: '',
    about: '',
    highlights: [
        {
            title: '',
            description: '',
            id: '###-highlight-000',
            icon: ''
        }
    ],
    tech: [
        {
            title: '',
            description: '',
            id: '###-tech-000'
        }
    ]
} 