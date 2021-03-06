import TLBLogo from './Experience/tlb.png'
import NULogo from './Experience/NULogo.png'
import IBMLogo from './Experience/ibm.png'
import GALogo from './Experience/generalAssembly.png'

export const experienceData = [
    {
        name: 'Nucamp',
        included: true,
        order: 1,
        dates: '2021 · April 19 - Present',
        buttonHeader: 'Web Development Instructor',
        buttonSubHeader: 'Contract · 2021 · April 19 - Present',
        preview: NULogo,
        highlights: [
            {
                title: 'Taught Virtual Workshops',
                body: 'Each bootcamp is comprised of 4 workshops that take place each Saturday for 4 hours. During this time I lead each class on a review of the weekly material and demonstrate each concept within VSCode. ',
            },
            {
                title: 'Graded Workshop Assignments',
                body: 'After the review, the remaining time is dedicated to the workshop assignment that puts into practice information covered. These assignments are then submitted to me to be graded. I grade workshop submissions based on Overall Functionality, Code Readability, Correct/Consistent Syntax and Hierarchal Document Structure.',
            },
            {
                title: 'Provided Constructive Feedback',
                body: 'For each workshop submission I try to provide a minimum (but usually many more) of 3 specific points of feedback. In addition to this, I reformat and restructure workshop submissions using HTML/CSS/JS best practices so that the students can see how their code should look to improve readability. For students who’s submissions do not require critical feedback, I provide resources for logical next concepts to learn even if those concepts are not covered in the Nucamp curriculum.',
            }
        ],
        tech: [
            {
                title: 'HTML5',
                body: 'Core concepts covered include common elements and their attributes, document structure and syntax',
            },
            {
                title: 'CSS3',
                body: 'Inline vs internal/external stylesheets, ruleset synax, common properties and selectors',
            },
            {
                title: 'JavaScript',
                body: 'Declaring variables, data types, functions, conditional statements, loops, operators, scope',
            }
        ]
    },
    {
        name: 'TheLotBroker',
        included: true,
        order: 2,
        dates: '2020 · February 10 - Present',
        buttonHeader: 'Full Stack Web Developer',
        buttonSubHeader: 'Contract · 2020 · February 10 - Present',
        preview: TLBLogo,
        highlights: [
            {
                title: 'Built From Scratch',
                body: 'I handled all stages of the web development life cycle including wireframing, prototyping, and testing all the way through production and maintenance.',
            },
            {
                title: 'Focus on UI',
                body: 'The entire web application was built to be optimized for the user experience including appropriate scaling for all mobile and tablet devices. Every action has visible feedback and loading/transitions have animations.',
            },
            {
                title: 'Collaborated with Client',
                body: 'Throughout development I worked closely with the client with a focus on their vision of the site. I recommended several features which the client enthusiastically received and were incorporated including the Testimonials, Messaging, and Current Inventory systems with filters.',
            },
            {
                title: 'Image Upload',
                body: 'I created a smooth user interface for the client to upload images in app with immediate and fluid feedback showing how the image will look to guests. Our recent phone call he mentioned that he enjoys the image upload and that the feature saves him time when he has to photograph multiple lots.',
            }
        ],
        tech: [
            {
                title: 'React',
                body: 'The User Interface was built with React and Context was used for State management',
            },
            {
                title: 'Google Firebase',
                body: 'The GCP was used for Hosting, Authentication, Databases and Media Storage',
            },
            {
                title: 'CSS3',
                body: 'CSS was used alongside Object Oriented CSS for Material-UI',
            }
        ]
    },
    {
        name: 'Hackathon',
        included: true,
        order: 3,
        dates: '2020 · December 28-30',
        buttonHeader: 'Hackathon Team Leader',
        buttonSubHeader: 'Event · 2020 · December 28-30',
        preview: IBMLogo,
        highlights: [
            {
                title: 'Led Team of 5',
                body: 'Our team included UI/UX developers as well as a couple fellow software developers. I worked closely with the UI devs during prototyping and development. I led our team during discussion regarding design and function and made sure everyone in the group had time to voice their input.',
            },
            {
                title: 'Delegated Workload',
                body: 'I successfully planned out time during development for each team member to write code as well as guided the group through mob-coding sessions. Before the team would break off we would all acknoledge what we would be working on to evenly distribute the workload.',
            },
            {
                title: 'Guided Brainstorming',
                body: "Our team had several brainstorming sessions led by the Lead UI dev and myself. We used several collaboration apps including Adobe XD and ensured everyone's input had an impact on the final product.",
            },
            {
                title: 'Had Fun!',
                body: 'Everyone in the group seemed to have a great time. I was able to teach some recent GA grads some of my technology as well as gain invaluable experience with working with teams of varied experience and professions.',
            }
        ],
        tech: [
            {
                title: 'React',
                body: 'React was used for the User Interface. State management was done through Hooks / Context',
            },
            {
                title: 'Google Firebase',
                body: 'The GCP was used for hosting, authentication and databases',
            },
            {
                title: 'Discord',
                body: 'I created and organized our Discord channel-our primary method of communication during development',
            }
        ]
    },
    {
        name: 'GeneralAssembly',
        included: true,
        order: 4,
        dates: '2019 · June 10 - August 28',
        buttonHeader: 'Software Engineering Immersive',
        buttonSubHeader: 'SEI03 · 2019 · June 10 - August 28',
        preview: GALogo,
        highlights: [
            {
                title: 'JavaScript / Node',
                body: 'I built several small apps using html and added user events with jQuery. All my apps use the Node runtime and all commands are ran in the CLI.',
            },
            {
                title: 'Relational and Non-relational Databases',
                body: 'Several different databases were used throughout my apps including MongoDB and PostreSQL. Backend interaction was handled using Axios, Express.js and Ruby on Rails.',
            },
            {
                title: 'React',
                body: 'My Capstone(final) project was built using React and Bootstrap in the front with Express on the back. The project titled Mattcersize has more info and link in Projects section.',
            },
            {
                title: 'Team Project',
                body: 'I worked with 3 other developers for my third project and our team was incredibly successful. We collaborated together, divided work evenly and all participated in solo coding, pair programming and mob sessions and our project had no visible flaws or malfunctions.',
            }
        ],
        tech: [
            {
                title: 'React/JS',
                body: 'Web pages were built using HTML and JavaScript for event handling',
            },
            {
                title: 'CSS and SASS',
                body: 'All 4 of my projects were styled using CSS',
            },
            {
                title: 'Express',
                body: 'I built and tested several backends using Express.js and Heroku',
            },
            {
                title: 'Ruby on Rails',
                body: 'Relational databases were created using the Ruby on Rails framework',
            }
        ]
    } 
]

export const includedExperience = experienceData.filter(item => item.included).sort((x, y) => x.order - y.order)