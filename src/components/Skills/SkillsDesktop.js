// import React from 'react'
// import {GlobalContext} from './../../GlobalContext'

// import ExpansionPanel from '@material-ui/core/ExpansionPanel'
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

// import { makeStyles } from '@material-ui/core/styles'

export const SkillsDesktop = () => ''

// export default function SkillsDesktop() {

//     let {
//         skills
//     } = useContext(GlobalContext)

//     const expansionStyle = {
//         // backgroundColor: colors.primary,
//         backgroundColor: 'rgba(0, 118, 133, 0)',
//         // color: colors.soft,
//         width: '85%',
//         boxShadow: 'none',
//         border: 'none',
//         minHeight: '0px'
//     }
    
//     const detailsStyle = {
//         // backgroundColor: colors.primary,
//         // background: 'linear-gradient(0.15turn, rgb(0, 66, 104) 0%,rgb(1, 96, 151) 15%, rgb(0, 112, 177) 32%, rgb(0, 69, 133) 37%, rgb(0, 118, 133) 95%)',
//         // color: colors.soft,
//         boxShadow: 'none',
//         border: 'none',
//         paddingTop: '0'
//     }

//     return (
//         <div className='d-section-container'>
//             <div className="d-skills-container myfont">
//                 <div className="d-skills-header">
//                     Skills
//                 </div>
//                 <div className="d-skills-sub-header">
//                     Click to Expand
//                 </div>
//                 <div className="d-skills-column-container">
//                     <div className="d-skills-column">
//                         <ExpansionPanel style={expansionStyle}>
//                             <ExpansionPanelSummary style={{
//                             padding: '0px', 
//                             minHeight: '10px',
//                             textDecoration: skills.underline[0]
//                             }}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             onClick={() => {
//                                 skills.toggleSkills(0, skills.underline[0])
//                             }}
//                             >
//                                 <div className='d-skills-expansion-brand'>
//                                     React
//                                 </div>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails style={detailsStyle}>
//                                 <div className="d-skills-details-container">
//                                     <div className="d-skills-details-header">
//                                         All projects built from scratch using Create-React-App
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         UI/UX
//                                     </div>
//                                     <div className="d-skills-info">
//                                         I generally create my own reusable components 
//                                         from scratch and separate each part of 
//                                         components into their own components as well. 
//                                         All user interaction receives feedback (loading, 
//                                         filtering etc) and buttons/inputs that should 
//                                         not be interactive are either disabled or removed 
//                                         from visibility. I have extensive experience 
//                                         with Material-UI and customizing their component 
//                                         library to fit my own themes.
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         State Management
//                                     </div>
//                                     <div className="d-skills-info">
//                                         My current method to manage state is React Context 
//                                         since it is intrinsic to React and gives more 
//                                         freedom of how and where to instantiate a context 
//                                         state. I have also used React-Redux in the past.
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         Most Used Modules
//                                     </div>
//                                     <div className="d-skills-info">
//                                     React-Device-Detect: Allows for a more intuitive method 
//                                     of creating multi-platform apps instead of using a one 
//                                     size fits all ideology.
//                                     </div>
//                                     <div className="d-skills-info">
//                                     React-Router-Dom: Enables me to give users easy access and 
//                                     fluid transitions between major components of my applications.
//                                     </div>
//                                     <div className="d-skills-info">
//                                     React-Slick/Carousel: I utilize this library to create highly 
//                                     customizable and smooth rotating  image galleries but can also 
//                                     be used for efficient UI to showcase any component.
//                                     </div>
//                                 </div>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>


//                         <ExpansionPanel style={expansionStyle}>
//                             <ExpansionPanelSummary style={{
//                             padding: '0px', 
//                             minHeight: '10px',
//                             textDecoration: skills.underline[1]
//                             }}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             onClick={() => {
//                                 skills.toggleSkills(1, skills.underline[1])
//                             }}
//                             >
//                             <div className='d-skills-expansion-brand'>
//                                 Google Firebase
//                             </div>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                             <div className="d-skills-details-container">
//                                     <div className="d-skills-details-header">
//                                         Firebase is the BaaS I have used most in my freelance and 
//                                         personal projects
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         Databases
//                                     </div>
//                                     <div className="d-skills-info">
//                                         I maximize the speed of the MySQL databases through efficient data 
//                                         structuring. Firebase charges based on number of queries so my 
//                                         database read/writes are optimized to use as few queries as possible.
//                                     </div>
//                                     <div className="d-skills-detail">
//                                     Storage
//                                     </div>
//                                     <div className="d-skills-info">
//                                     I utilize Firebase storage for efficient and image upload functionality. 
//                                     All Media storage is secured by my own custom security rules.
//                                     </div>
//                                     <div className="d-skills-detail">
//                                     Authentication
//                                     </div>
//                                     <div className="d-skills-info">
//                                     I implement Firebase Authentication in my applications to easily allow 
//                                     secure login functionality as well as persisting login status through 
//                                     multiple sessions.
//                                     </div>
//                                     <div className="d-skills-detail">
//                                     Hosting
//                                     </div>
//                                     <div className="d-skills-info">
//                                     I have used Firebase Hosting and have been able to quickly deploy and 
//                                     redeploy applications as they are developed. I have used Firebase 
//                                     hosting for both small projects to large freelance projects and have 
//                                     been able to successfully link domains from GoDaddy and NameCheap.
//                                     </div>
//                                 </div>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>

//                         <ExpansionPanel style={expansionStyle}>
//                             <ExpansionPanelSummary style={{
//                             padding: '0px', 
//                             minHeight: '10px',
//                             textDecoration: skills.underline[2]
//                             }}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             onClick={() => {
//                                 skills.toggleSkills(2, skills.underline[2])
//                             }}
//                             >
//                             <div className='d-skills-expansion-brand'>
//                                 Express
//                             </div>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <div className="d-skills-details-container">
//                                     <div className="d-skills-details-header">
                                        
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         HTTP Requests
//                                     </div>
//                                     <div className="d-skills-info">
//                                         My early experience in asynchronous JavaScript revolved around 
//                                         using Express as a backend. I have used Async-await but most of 
//                                         my backend logic is based on Promise chaining. 
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         Custom MiddleWare
//                                     </div>
//                                     <div className="d-skills-info">
//                                         I have created custom middleware to handle 
//                                         user authentication and for secure resource 
//                                         management.
//                                     </div>
//                                 </div>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>


//                         <ExpansionPanel style={expansionStyle}>
//                             <ExpansionPanelSummary style={{
//                             padding: '0px', 
//                             minHeight: '10px',
//                             textDecoration: skills.underline[3]
//                             }}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             onClick={() => {
//                                 skills.toggleSkills(3, skills.underline[3])
//                             }}
//                             >
//                             <div className='d-skills-expansion-brand'>
//                                 CSS3
//                             </div>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <div className="d-skills-details-container">
//                                     <div className="d-skills-details-header">
//                                     CSS is the primary styling system used in all my web apps
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         Semantic Naming
//                                     </div>
//                                     <div className="d-skills-info">
//                                         I focus on creating semantic class names within my own consistent 
//                                         naming system that could be easily parsed by others.

//                                     </div>
//                                     <div className="d-skills-detail">
//                                         Reusable Variables
//                                     </div>
//                                     <div className="d-skills-info">
//                                         I create custom variables for consistent theming that is able to be quickly 
//                                         customized from a single value.
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         FlexBox
//                                     </div>
//                                     <div className="d-skills-info">
//                                         I heavily rely on flex box for appealing and clean component 
//                                         positioning in my desktop, tablet and mobile apps.
//                                     </div>
//                                     <div className="d-skills-detail">
                                    
//                                     </div>
//                                     <div className="d-skills-info">
                                    
//                                     </div>
//                                 </div>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>


//                         <ExpansionPanel style={expansionStyle}>
//                             <ExpansionPanelSummary style={{
//                             padding: '0px', 
//                             minHeight: '10px',
//                             textDecoration: skills.underline[4]
//                             }}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             onClick={() => {
//                                 skills.toggleSkills(4, skills.underline[4])
//                             }}
//                             >
//                             <div className='d-skills-expansion-brand'>
//                                 React Native
//                             </div>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <div className="d-skills-details-container">
//                                     <div className="d-skills-details-header">
                                        
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         Native Apps
//                                     </div>
//                                     <div className="d-skills-info">
//                                         I have built several small experimental applications in React-Native 
//                                         using Expo during development. I plan to revisit Mattcersize and other 
//                                         applications later in my career to create fully-fledged Native 
//                                         applications for both Android and IOS.
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         Small Projects
//                                     </div>
//                                     <a href='https://www.linkedin.com/posts/matt-taylor525_i-originally-planned-to-port-my-workoutexercise-activity-6588144687557722112-z9lM/'
//                                     target='_blank'
//                                     rel="noopener noreferrer" 
//                                     className="d-skills-link"
//                                     >
//                                     Calculator
//                                     </a>
//                                     <a href='https://www.linkedin.com/posts/matt-taylor525_the-second-small-project-in-react-native-activity-6592804461750611968-Lc5u'
//                                     target='_blank'
//                                     rel="noopener noreferrer" 
//                                     className="d-skills-link"
//                                     >
//                                     Boston Weather Forecast
//                                     </a>
//                                     <a href='https://www.linkedin.com/posts/matt-taylor525_i-was-excited-for-my-most-recent-small-project-activity-6593188391360229376--uST/'
//                                     target='_blank'
//                                     rel="noopener noreferrer" 
//                                     className="d-skills-link"
//                                     >
//                                     Fancy Sign-in
//                                     </a>
//                                 </div>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>

//                         <ExpansionPanel style={expansionStyle}>
//                             <ExpansionPanelSummary style={{
//                             padding: '0px', 
//                             minHeight: '10px',
//                             textDecoration: skills.underline[5]
//                             }}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             onClick={() => {
//                                 skills.toggleSkills(5, skills.underline[5])
//                             }}
//                             >
//                             <div className='d-skills-expansion-brand'>
//                                 JavaScript/jQuery/HTML
//                             </div>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <div className="d-skills-details-container">
//                                     <div className="d-skills-details-header">
//                                     Although I currently develop in React, I have built several apps in HTML/CSS using jQuery for UI 
//                                     </div>
//                                     <div className="d-skills-detail">
//                                         Early Projects
//                                     </div>
//                                     <a href='https://mtaylor124.github.io/Rocket-Surveys-Client/'
//                                     target='_blank'
//                                     rel="noopener noreferrer" 
//                                     className="d-skills-link"
//                                     >
//                                     Rocket Surveys
//                                     </a>
//                                     <a href='https://mtaylor124.github.io/tic-tac-toe-client/'
//                                     target='_blank'
//                                     rel="noopener noreferrer" 
//                                     className="d-skills-link"
//                                     >
//                                     Tic-Tac-Toe
//                                     </a>
//                                     <a href='https://mtaylor124.github.io/notepad-client/'
//                                     target='_blank'
//                                     rel="noopener noreferrer" 
//                                     className="d-skills-link"
//                                     >
//                                     Nugpad
//                                     </a>
//                                 </div>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>

//                         <ExpansionPanel style={expansionStyle}>
//                             <ExpansionPanelSummary style={{
//                             padding: '0px', 
//                             minHeight: '10px',
//                             textDecoration: skills.underline[6]
//                             }}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             onClick={() => {
//                                 skills.toggleSkills(6, skills.underline[6])
//                             }}
//                             >
//                                 <div className='d-skills-expansion-brand'>
//                                     GitHub/Team Workflow
//                                 </div>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <div className="d-skills-details-container">
//                                     <div className="d-skills-details-header">
//                                     I have built several apps using Github for version control as an individual and as a part of a team
//                                     </div>
//                                     <a href='https://github.com/MTaylor124'
//                                     target='_blank'
//                                     rel="noopener noreferrer" 
//                                     className="d-skills-link"
//                                     >
//                                     My GitHub
//                                     </a>
//                                     <div className="d-skills-detail">
//                                     Sprints
//                                     </div>
//                                     <div className="d-skills-info">
//                                     I have been a part of several group projects that have used the 
//                                     Sprint method during development. I enjoy this fast paced approach 
//                                     to working as a team and look forward to more opportunities to 
//                                     implement it in the future.
//                                     </div>
//                                     <div className="d-skills-detail">
//                                     Pair/Mob Programming
//                                     </div>
//                                     <div className="d-skills-info">
//                                     I have experience with in both the Driver and Navigator roles and I tend to look for opportunities 
//                                     for both members to express their knowledge and to open up to learn from each other.
//                                     </div>
//                                 </div>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>

//                         <ExpansionPanel style={expansionStyle}>
//                             <ExpansionPanelSummary style={{
//                             padding: '0px', 
//                             minHeight: '10px',
//                             textDecoration: skills.underline[7]
//                             }}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             onClick={() => {
//                                 skills.toggleSkills(7, skills.underline[7])
//                             }}
//                             >
//                                 <div className='d-skills-expansion-brand'>
//                                     Node.js
//                                 </div>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <div className="d-skills-details-container">
//                                     <div className="d-skills-details-header">
//                                     All my my projects utilize the node.js runtime during both development 
//                                     and production. I am experienced with both NPM and Yarn for package management.
//                                     </div>
//                                 </div>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>

//                         <ExpansionPanel style={expansionStyle}>
//                             <ExpansionPanelSummary style={{
//                             padding: '0px', 
//                             minHeight: '10px',
//                             textDecoration: skills.underline[8]
//                             }}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             onClick={() => {
//                                 skills.toggleSkills(8, skills.underline[8])
//                             }}
//                             >
//                                 <div className='d-skills-expansion-brand'>
//                                     MongoDB/Heroku
//                                 </div>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <div className="d-skills-details-container">
//                                     <div className="d-skills-details-header">
//                                     I have used MongoDB’s NoSQL databases through Heroku’s Paas 
//                                     during development of early web apps. 
//                                     </div>
//                                 </div>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>
                        
//                         <ExpansionPanel style={expansionStyle}>
//                             <ExpansionPanelSummary style={{
//                             padding: '0px', 
//                             minHeight: '10px',
//                             textDecoration: skills.underline[9]
//                             }}
//                             aria-controls="panel1a-content"
//                             id="panel1a-header"
//                             onClick={() => {
//                                 skills.toggleSkills(9, skills.underline[9])
//                             }}
//                             >
//                                 <div className='d-skills-expansion-brand'>
//                                     Atom/VSCode
//                                 </div>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <div className="d-skills-details-container">
//                                     <div className="d-skills-details-header">
//                                     I have spent most of my time using Atom as my source code 
//                                     editor but recently have transitioned to VSCode for all 
//                                     of my project development.
//                                     </div>
//                                 </div>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }