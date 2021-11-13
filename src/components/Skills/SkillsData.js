export const skillsData = [
    {
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

    },
    {
        included: true,
        buttonText: 'React',
        about: 'All projects built from scratch using Create-React-App',
        id: 'react-skills-000',
        sections: [
            {
                header: 'UI/UX',
                id: 'react-header-000',
                points: [
                    {
                        body: 'I generally create my own reusable components from scratch and separate each part of components into their own components as well. All user interaction receives feedback (loading, filtering etc) and buttons/inputs that should not be interactive are either disabled or removed from visibility. I have extensive experience with Material-UI and customizing their component library to fit my own themes.',
                        id: 'react-000-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'State Management',
                id: 'react-header-001',
                points: [
                    {
                        body: 'My current method to manage state is React Context since it is intrinsic to React and gives more freedom of how and where to instantiate a context state. I have also used React-Redux in the past.',
                        id: 'react-001-point-000',
                        links: null
                    }
                ]
            },
            {
                header: 'Most Used Modules',
                id: 'react-header-002',
                points: [
                    {
                        body: 'React-Device-Detect: Allows for a more intuitive method of creating multi-platform apps instead of using a one size fits all ideology.',
                        id: 'react-002-point-000',
                        links: null
                    },
                    {
                        body: 'React-Router-Dom: Enables me to give users easy access and fluid transitions between major components of my applications.',
                        id: 'react-002-point-001',
                        links: null
                    },
                    {
                        body: 'React-Slick/Carousel: I utilize this library to create highly customizable and smooth rotating image galleries but can also be used for efficient UI to showcase any component.',
                        id: 'react-002-point-002',
                        links: null
                    }
                ]
            }
        ]
    },
    {
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
    }
]

export const includedSkills = skillsData.filter(x => x.included)