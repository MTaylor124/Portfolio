import TheLotBroker from './Projects/LotBrokerDesktop.png'
import Blog from './Projects/BlogDesktop.png' 
import Icebreaker from './Projects/Icebreaker.png'
import SpikeRush from './Projects/SpikeRushDesktop.png'
import Mattcersize from './Projects/MattcersizePreview.png'
import Portfolio from './Projects/Portfolio.png'

export const boilerplate = {
    included: false,
    order: 8, // Add 1 after use
    name: '',
    id: 'project-id-007', // Add 1 after use
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

export const projectData = [
    //! The Lot Broker
    {
        included: true,
        order: 0,
        name: 'The Lot Broker',
        id: 'project-id-000',
        preview: TheLotBroker,
        link: 'https://thelotbroker.com/',
        git: '',
        buttonText: 'The Lot Broker',
        about: 'TheLotBroker.com is a freelance project I picked up in early February 2020. I built an entirely new web app that would allow his colleagues to easier view his current inventory of Lots and to allow clients to easily contact him.',
        highlights: [
            {
                title: 'Mobile Optimized',
                description: 'The entire application was built from the ground up to be optimized for Mobile and Tablet viewports',
                id: 'lot-highlight-000',
                icon: 'PhoneAndroidIcon'
            },
            {
                title: 'Current Inventory',
                description: 'Full CRUD control for Admin and allows users to filter inventory for quick searching',
                id: 'lot-highlight-001',
                icon: 'FormatListBulletedTwoToneIcon'
            },
            {
                title: 'Image Galleries',
                description: 'Allows the lot broker upload/delete images for each lot at any time as well as static Lot Galleries',
                id: 'lot-highlight-002',
                icon: 'PhotoSizeSelectActualTwoToneIcon'
            },
            {
                title: 'Messaging/Testimonials',
                description: 'Full CRUD control for Admin and allows users to filter inventory for quick searching',
                id: 'lot-highlight-003',
                icon: 'ChatTwoToneIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components, Higher Level State managed with Context',
                id: 'lot-tech-000'
            },
            {
                title: 'Google Firebase',
                description: 'Utilized for Hosting, Databases, Storage, and Authentication',
                id: 'lot-tech-001'
            },
            {
                title: 'CSS3',
                description: 'Styled with CSS and Object-Oriented CSS with Material-UI',
                id: 'lot-tech-002'
            }
        ]
    },
    //! Ranked Spike Rush
    {
        included: true,
        order: 1,
        name: 'Ranked Spike Rush',
        id: 'project-id-001',
        preview: SpikeRush,
        git: '',
        link: 'https://rankedspikerush.web.app/',
        buttonText: 'Ranked Spike Rush',
        about: 'RankedSpikeRush is a personal project based on a temporary game mode in the video game Rocket League. I built the site in less than 2 days and a week later I had build up a community of over 200 players and organized and carried out a 50+ team tournament that crowdfunded $200 grand prize for the winners.',
        highlights: [
            {
                title: 'Mobile Friendly',
                description: 'Web application was built from the ground-up to be optimized on both desktop and mobile platforms.',
                id: 'rsr-tech-000',
                icon: 'PhoneAndroidIcon'
            },
            {
                title: 'Animated background',
                description: 'Smooth and exciting animated background featuring highlights from several Spike Rush games',
                id: 'rsr-tech-001',
                icon: 'WallpaperIcon'
            },
            {
                title: 'Built in 24 Hours',
                description: 'The entire multi-platform web application was successfully planned, developed and built in less than 24 hours.',
                id: 'rsr-tech-002',
                icon: 'SpeedIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components',
                id: 'rsr-tech-000'
            },
            {
                title: 'Google Firebase',
                description: 'Utilized for Hosting',
                id: 'rsr-tech-001'
            },
            {
                title: 'CSS3',
                description: 'Styled with CSS and Object-Oriented CSS with Material-UI',
                id: 'rsr-tech-002'
            }
        ]
    },
    //! GA Hackaton
    {
        included: true,
        order: 5,
        name: 'Icebreaker Maker',
        id: 'project-id-002',
        preview: Icebreaker,
        link: 'https://ice-breaker-maker.web.app/',
        git: '',
        buttonText: 'General Assembly Hackathon',
        about: 'I was Group Leader for a team of 5 that included both UX/UI experts and software engineers to successfully prototype, build, and present a fully functional mobile web app in less than 3 days.',
        highlights: [
            {
                title: 'Mobile Optimized',
                description: 'Web application was built from the ground-up to be optimized on mobile platforms',
                id: 'hac-highlight-000',
                icon: 'PhoneAndroidIcon'
            },
            {
                title: 'Diverse Team',
                description: 'I worked closely with UX developers as well as several other software engineers',
                id: 'hac-highlight-001',
                icon: 'GroupIcon'
            },
            {
                title: 'Built in 3 Days',
                description: 'The entire planning, development and presentation were done in less than 72 hours',
                id: 'hac-highlight-002',
                icon: 'TimerIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components',
                id: 'hac-tech-000'
            },
            {
                title: 'MySQL',
                description: 'Utilized Google Firebase for MySQL Databases',
                id: 'hac-tech-001'
            },
            {
                title: 'CSS3',
                description: 'Styled with CSS and Object-Oriented CSS with Material-UI',
                id: 'hac-tech-002'
            }
        ]
    },
    //! Blog 
    {
        included: true,
        order: 4,
        name: 'Blog',
        id: 'project-id-003',
        preview: Blog,
        link: null,
        buttonText: 'Blog',
        git: '',
        about: 'My blog is currently a personal project of mine that I plan to include as an extension of my portfolio. The blog interface currently allows users to write their own blogs that are divided into several sections and can view or edit them while interacting with a smooth yet elegant user interface. NOTE: BLOG CURRENTLY DISABLED UNTIL AFTER PORTFOLIO IS REFACTORED',
        highlights: [
            {
                title: 'Mobile Optimized',
                description: 'Web application was built from the ground-up to be optimized on Mobile viewports',
                id: 'blg-highlight-000',
                icon: 'PhoneAndroidIcon'
            },
            {
                title: 'Creative Control',
                description: 'I built the blog interface to be efficient and responsive for users to create and edit Blog Posts',
                id: 'blg-highlight-001',
                icon: 'EditIcon'
            },
            {
                title: 'Responsive Feedback',
                description: 'Every action has immediate user feedback as well as loading animations and transitions for a smooth mobile experience',
                id: 'blg-highlight-002',
                icon: 'TouchAppIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components and utilized Context for State Management',
                id: 'blg-tech-000'
            },
            {
                title: 'MySQL',
                description: 'Utilized Google Firebase for non-relational databases for Blog Data',
                id: 'blg-tech-001'
            },
            {
                title: 'CSS3',
                description: 'Used CSS and Object Oriented CSS with Material-UI',
                id: 'blg-tech-002'
            }
        ]
    },
    //! Mattcersize 
    {
        included: true,
        order: 6,
        name: 'Mattcersize',
        id: 'project-id-004',
        preview: Mattcersize,
        link: 'https://mtaylor124.github.io/Mattcersize-Client/#/',
        buttonText: 'Mattcersize (Deprecated)',
        git: 'https://github.com/MTaylor124/Mattcersize-Client',
        about: 'Mattcersize is a mobile-friendly Workout + Exercise tracker that was built in less than 4 days. This was my first fully-fleded React App that allowed users to catalog their workouts including specific exercises, number of reps and weight. NOTE: HEROKU EXTENSION DEPRECATED. APP NO LONGER FUNCTIONAL',
        highlights: [
            {
                title: 'Mobile Friendly',
                description: 'Web application was built from the ground-up to be optimized on mobile platforms.',
                id: 'mat-highlight-000',
                icon: 'PhoneAndroidIcon'
            },
            {
                title: 'Resource Control',
                description: 'Full CRUD control for users for their own workouts and exercises.',
                id: 'mat-highlight-001',
                icon: 'EditIcon'
            },
            {
                title: 'Built in 4 Days',
                description: 'The entire project was planned and built in less than 4 days',
                id: 'mat-highlight-002',
                icon: 'SpeedIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components',
                id: 'mat-tech-000'
            },
            {
                title: 'Express.js',
                description: 'Wrote custom security features for authentication and to CRUD resources.',
                id: 'mat-tech-001'
            },
            {
                title: 'Heroko / MongoDB',
                description: 'Utilized for databases',
                id: 'mat-tech-002'
            }
        ]
    },
    //! Chuzr
    {
        included: false,
        order: 3,
        name: 'Chuzr',
        id: 'project-id-005',
        preview: null,
        link: null,
        buttonText: 'Chuzr (in progress)',
        git: '',
        about: '',
        highlights: [
            {
                title: '',
                description: '',
                id: '',
                icon: ''
            },
            {
                title: '',
                description: '',
                id: '',
                icon: 'FormatListBulletedTwoToneIcon'
            },
            {
                title: '',
                description: '',
                id: '',
                icon: 'PhotoSizeSelectActualTwoToneIcon'
            },
            {
                title: '',
                description: '',
                id: '',
                icon: 'ChatTwoToneIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components\n\nStage managed with Context',
                id: 'lot-tech-000'
            },
            {
                title: 'Google Firebase',
                description: 'Utilized for Hosting, Databases, Storage, and Authentication',
                id: 'lot-tech-001'
            },
            {
                title: 'CSS3',
                description: 'Styled with CSS and Object-Oriented CSS with Material-UI',
                id: 'lot-tech-002'
            }
        ]
    },
    //! Portfolio
    {
        included: true,
        order: 2,
        name: 'Portfolio',
        id: 'project-id-006',
        preview: Portfolio,
        link: null,
        buttonText: 'Portfolio',
        git: 'https://github.com/MTaylor124/Portfolio',
        about: 'My portfolio showcases my front end development skills. Portfolio has been refactored to use React.js best practices. Code is written DRY using modern JavaScript (ES6) features. Github Link above',
        highlights: [
            {
                title: '',
                description: '',
                id: '',
                icon: ''
            },
            {
                title: '',
                description: '',
                id: '',
                icon: 'FormatListBulletedTwoToneIcon'
            },
            {
                title: '',
                description: '',
                id: '',
                icon: 'PhotoSizeSelectActualTwoToneIcon'
            },
            {
                title: '',
                description: '',
                id: '',
                icon: 'ChatTwoToneIcon'
            }
        ],
        tech: [
            {
                title: 'React',
                description: 'Created Custom and Reusable Components\n\nStage managed with Context',
                id: 'lot-tech-000'
            },
            {
                title: 'Google Firebase',
                description: 'Utilized for Hosting, Databases, Storage, and Authentication',
                id: 'lot-tech-001'
            },
            {
                title: 'CSS3',
                description: 'Styled with CSS and Object-Oriented CSS with Material-UI',
                id: 'lot-tech-002'
            }
        ]
    }
]

export const includedProjects = projectData.filter(item => item.included).sort((x, y) => x.order - y.order)