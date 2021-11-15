import TLBLogo from './Experience/tlb.png'
import NULogo from './Experience/NULogo.png'
import IBMLogo from './Experience/ibm.png'
import GALogo from './Experience/generalAssembly.png'

export const experienceData = [
    //! Nucamp
    {
        included: true,
        order: 1,
        name: 'Nucamp',
        id: 'experience-item-000',
        dates: '2021 · April 19 - Present',
        buttonHeader: 'Web Development Instructor',
        buttonSubHeader: 'Contract · 2021 · April 19 - Present',
        preview: NULogo,
        highlights: [
            {
                title: 'Web Development Instructor',
                body: 'I teach web development fundamental courses for groups of 10-14 students.',
                id: 'nuc-exp-highlight-000'
            },
            {
                title: 'HTML5',
                body: 'I teach and review HTML fundamentals including common elements, attributes, HTML hierarchy best practice coding structure.',
                id: 'nuc-exp-highlight-001'
            },
            {
                title: 'CSS3',
                body: 'I teach CSS fundamentals including creating internal/importing external stylesheets, best practice ruleset structure',
                id: 'nuc-exp-highlight-002'
            },
            {
                title: 'EMPTY',
                body: 'EMPTY',
                id: 'nuc-exp-highlight-003'
            }
        ],
        tech: [
            {
                title: 'EMPTY',
                body: 'EMPTY',
                id: 'nuc-exp-tech-000'
            },
            {
                title: 'EMPTY',
                body: 'EMPTY',
                id: 'nuc-exp-tech-001'
            },
            {
                title: 'EMPTY',
                body: 'EMPTY',
                id: 'nuc-exp-tech-002'
            }
        ]
    },
    //! The Lot Broker
    {
        included: true,
        order: 2,
        name: 'The Lot Broker',
        id: 'experience-item-001',
        dates: '2020 · February 10 - Present',
        buttonHeader: 'Full Stack Web Developer',
        buttonSubHeader: 'Contract · 2020 · February 10 - Present',
        preview: TLBLogo,
        highlights: [
            {
                title: 'Built From Scratch',
                body: 'I handled all stages of the web development life cycle including wireframing, prototyping, and testing all the way through production and maintenance.',
                id: 'lot-exp-highlight-000'
            },
            {
                title: 'Focus on UI',
                body: 'The entire web application was built to be optimized for the user experience including appropriate scaling for all mobile and tablet devices. Every action has visible feedback and loading/transitions have animations.',
                id: 'lot-exp-highlight-001'
            },
            {
                title: 'Collaborated with Client',
                body: 'Throughout development I worked closely with the client with a focus on their vision of the site. I recommended several features which the client enthusiastically received and were incorporated including the Testimonials, Messaging, and Current Inventory systems with filters.',
                id: 'lot-exp-highlight-002'
            },
            {
                title: 'Image Upload',
                body: 'I created a smooth user interface for the client to upload images in app with immediate and fluid feedback showing how the image will look to guests. Our recent phone call he mentioned that he enjoys the image upload and that the feature saves him time when he has to photograph multiple lots.',
                id: 'lot-exp-highlight-003'
            }
        ],
        tech: [
            {
                title: 'React',
                body: 'The User Interface was built with React and Context was used for State management',
                id: 'lot-exp-tech-000'
            },
            {
                title: 'Google Firebase',
                body: 'The GCP was used for Hosting, Authentication, Databases and Media Storage',
                id: 'lot-exp-tech-001'
            },
            {
                title: 'CSS3',
                body: 'CSS was used alongside Object Oriented CSS for Material-UI',
                id: 'lot-exp-tech-002'
            }
        ]
    },
    //! Hackathon
    {
        included: true,
        order: 3,
        name: 'Hackathon',
        id: 'experience-item-002',
        dates: '2020 · December 28-30',
        buttonHeader: 'Hackathon Team Leader',
        buttonSubHeader: 'Event · 2020 · December 28-30',
        preview: IBMLogo,
        highlights: [
            {
                title: 'Led Team of 5',
                body: 'Our team included UI/UX developers as well as a couple fellow software developers. I worked closely with the UI devs during prototyping and development. I led our team during discussion regarding design and function and made sure everyone in the group had time to voice their input.',
                id: 'hac-exp-highlight-000'
            },
            {
                title: 'Delegated Workload',
                body: 'I successfully planned out time during development for each team member to write code as well as guided the group through mob-coding sessions. Before the team would break off we would all acknoledge what we would be working on to evenly distribute the workload.',
                id: 'hac-exp-highlight-001'
            },
            {
                title: 'Guided Brainstorming',
                body: "Our team had several brainstorming sessions led by the Lead UI dev and myself. We used several collaboration apps including Adobe XD and ensured everyone's input had an impact on the final product.",
                id: 'hac-exp-highlight-002'
            },
            {
                title: 'Had Fun!',
                body: 'Everyone in the group seemed to have a great time. I was able to teach some recent GA grads some of my technology as well as gain invaluable experience with working with teams of varied experience and professions.',
                id: 'hac-exp-highlight-003'
            }
        ],
        tech: [
            {
                title: 'React',
                body: 'React was used for the User Interface. State management was done through Hooks / Context',
                id: 'hac-exp-tech-000'
            },
            {
                title: 'Google Firebase',
                body: 'The GCP was used for hosting, authentication and databases',
                id: 'hac-exp-tech-001'
            },
            {
                title: 'Discord',
                body: 'I created and organized our Discord channel-our primary method of communication during development',
                id: 'hac-exp-tech-002'
            }
        ]
    },
    //! General Assembly
    {
        included: true,
        order: 4,
        name: 'General Assembly',
        id: 'experience-item-003',
        dates: '2019 · June 10 - August 28',
        buttonHeader: 'Software Engineering Immersive',
        buttonSubHeader: 'SEI03 · 2019 · June 10 - August 28',
        preview: GALogo,
        highlights: [
            {
                title: 'JavaScript / Node',
                body: 'I built several small apps using html and added user events with jQuery. All my apps use the Node runtime and all commands are ran in the CLI.',
                id: 'sei-exp-highlight-000'
            },
            {
                title: 'Relational and Non-relational Databases',
                body: 'Several different databases were used throughout my apps including MongoDB and PostreSQL. Backend interaction was handled using Axios, Express.js and Ruby on Rails.',
                id: 'sei-exp-highlight-001'
            },
            {
                title: 'React',
                body: 'My Capstone(final) project was built using React and Bootstrap in the front with Express on the back. The project titled Mattcersize has more info and link in Projects section.',
                id: 'sei-exp-highlight-002'
            },
            {
                title: 'Team Project',
                body: 'I worked with 3 other developers for my third project and our team was incredibly successful. We collaborated together, divided work evenly and all participated in solo coding, pair programming and mob sessions and our project had no visible flaws or malfunctions.',
                id: 'sei-exp-highlight-003'
            }
        ],
        tech: [
            {
                title: 'React/JS',
                body: 'Web pages were built using HTML and JavaScript for event handling',
                id: 'sei-exp-tech-000'
            },
            {
                title: 'CSS and SASS',
                body: 'All 4 of my projects were styled using CSS',
                id: 'sei-exp-tech-001'
            },
            {
                title: 'Express',
                body: 'I built and tested several backends using Express.js and Heroku',
                id: 'sei-exp-tech-002'
            },
            {
                title: 'Ruby on Rails',
                body: 'Relational databases were created using the Ruby on Rails framework',
                id: 'sei-exp-tech-003'
            }
        ]
    } 
]

export const includedExperience = experienceData.filter(item => item.included).sort((x, y) => x.order - y.order)