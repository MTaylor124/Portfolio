# Matt Taylor Profile

**_Currently Under Development as of 11/8/21_**


## Development Plans:
1. ~~Refactoring Pre-existing code using React best practices~~
2. ~~Convert Components to using local state instead of higher level state (context) when appropriate~~
3. ~~Generate components based off JavaScript data sets instead of hard coding~~
4. ~~Convert current sea of divs to semantically named HTML elements~~
5. Refactor CSS / Remove unused rulesets
6. Convert all CSS to preprocessor (Sass or SCSS)
7. Make appropriate commits for each feature that I work on
8. ~~Update information in each section~~
9. Remove all images/media from project to minimize app size
    * Upload images/resume to Google Storage
    * Get all images upon page load
10. Add animations using react-spring to animate items within sections:
    * Projects
    * Experience
    * Skills
11. Uninstall material UI library and only install specific components and icons that are used
    * Decrease app size
12. Rebuild mobile app

# Changelog

## 11/27
1. Removed ids from skills section
    * Keys for components are now generated based on the skill name and the index numbers of each iteration
    * Removed the id property from each skill object and nested objects
    * Added name property to each skill object
    * Renamed function parameter to correct object name
2. Added Content to skills section
    * Added content to CSS, Github, MUI, and VSCode

## 11/22
1. Added testimonial button to Experience (The Lot Broker)
    * Animated button to stand out
    * Backdrop is only mounted when specific projects are mounted
    * Created file for Nucamp extra info
    * Refactored Experience css
2. Added Concept list and Student reviews to Experience (Nucamp)
    * The additional backdrop has the complete concept list
    * Student reviews are randomized by default. Each page load is limited to 20 reviews
    * Added body-scroll-lock npm package. Will remove duplicate scroll lock npm package later
    * Further refactored experience css

## 11/21
1. Added github links to projects that I have repos set up for
    * Styled button in github style
    * Refactored project backdrop headers

## 11/19
1. Included only the skills that I have content for at the moment
2. **Deployed** New changes
    * Next will be filling in remaining Skills
    * Then adding testimonials/Student Reviews/Concept+Tech list from Nucamp
    * Then Refactoring CSS

## 11/18
1. Added more content to skills section
    * Expanded on React, JS
    * Added MUI skill
    * Removed less relevent skills
2. Added .order property to each skill object
    * Skills can not be sorted correctly instead of having to manually rearrange skill objects

## 11/17
1. Updated content within Experience>Nucamp data set
    * Updated both Main and tech sections
    * Will be adding button in top left soon
        * Will contain full list of each concept covered in HTML, CSS, and JS as well as student reviews
    * Will be adding similar button for TheLotBroker which will contain testimonial
2. Updated content within Projects>Portfolio data set
    * Wrote relevent highlights and included brief descriptions
    * Added appropriate icons
    * Will need to rework some of the other Projects and expand on Portfolio tech

## 11/16
1. Minor optimization changes
    * Updated .filter()[0] to .find() for slight optimization improvement in projects and experience sections

## 11/15
1. Completely restructured file directory
    * Removed 'interests' section as it was not being used
    * Created mobile/tablet directories for related files
    * Removed last 2 hard coded projects
    * Added mattcersize, blog data to projectData
    * Put projects into Data directory as well as images used in projects and experience sections
    * Removed intermediary components that use to reroute depending on device
    * Moved blog section to within Mobile directory
2. General refactoring
    * Converted remaining components to arrow functional components where appropriate
    * Removed redundant return statements within arrow functions that exclusively return elements

## 11/14
1. Refactored Nav section
    * 68 -> 21 lines of code
    * Links no longer hard coded
    * Improved scalability and readability
    * Removed link to context for optimization
    * Created navData file 
2. Refactored Contact section
3. Refactored component parent contains
    * Removing commented out code - will be entirely replaced
    * isMobile is being imported in many areas, will reduce to 1 import and move all mobile components into a dedicated directory for better file management and optimization

## 11/13 
1. Refactored Skills section
    * 515 -> 45 lines of code
    * Accordions are no longer hard coded
    * Improved scalability
    * Redesigned Skill Accordions
    * Replaced div's with semantically named elements

## 11/12
1. Created skillsData file
    * Each skill will be generated from this data set
    * Nested data to optimize render time

## 11/9 
1. Refactored Experience section
    * Buttons are not longer hard coded / Removed redunant code
    * Created experienceData to generate components
    * Greatly improved scalability
    * Backdrop content is now generated from experienceData
        * One file went from 370 to 70 lines of code

## 11/8 
1. Created Repo for Pre-existing Portfolio
2. Created README