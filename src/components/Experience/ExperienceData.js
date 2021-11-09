import NULogo from './NULogo.png'
import TLBLogo from './tlb.png'
import IBMLogo from './ibm.png'
import GALogo from './generalAssembly.png'

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
                title: '',
                body: '',
                id: '#-exp-highlight-000'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-001'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-002'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-003'
            }
        ],
        tech: [
            {
                title: '',
                body: '',
                id: '#-exp-tech-000'
            },
            {
                title: '',
                body: '',
                id: '#-exp-tech-001'
            },
            {
                title: '',
                body: '',
                id: '#-exp-tech-002'
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
                title: '',
                body: '',
                id: '#-exp-highlight-000'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-001'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-002'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-003'
            }
        ],
        tech: [
            {
                title: '',
                body: '',
                id: '#-exp-tech-000'
            },
            {
                title: '',
                body: '',
                id: '#-exp-tech-001'
            },
            {
                title: '',
                body: '',
                id: '#-exp-tech-002'
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
                title: '',
                body: '',
                id: '#-exp-highlight-000'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-001'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-002'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-003'
            }
        ],
        tech: [
            {
                title: '',
                body: '',
                id: '#-exp-tech-000'
            },
            {
                title: '',
                body: '',
                id: '#-exp-tech-001'
            },
            {
                title: '',
                body: '',
                id: '#-exp-tech-002'
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
                title: '',
                body: '',
                id: '#-exp-highlight-000'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-001'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-002'
            },
            {
                title: '',
                body: '',
                id: '#-exp-highlight-003'
            }
        ],
        tech: [
            {
                title: '',
                body: '',
                id: '#-exp-tech-000'
            },
            {
                title: '',
                body: '',
                id: '#-exp-tech-001'
            },
            {
                title: '',
                body: '',
                id: '#-exp-tech-002'
            }
        ]
    } 
]

export const includedExperience = experienceData.filter(item => item.included).sort((x, y) => x.order - y.order)