# Matt Taylor Profile

**_Currently Under Development as of 11/8/21_**


## Development Plans:
1. Refactoring Pre-existing code using React best practices 
2. Convert Components to using local state instead of higher level state (context) when appropriate
3. Generate components based off JavaScript data sets instead of hard coding (see projects section)
4. Convert current sea of divs to semantically named HTML elements
5. Refactor CSS / Remove unused rulesets
6. Convert all CSS to preprocessor (Sass or SCSS)
7. Make appropriate commits for each feature that I work on
8. Update information in each section
9. Remove all images/media from project to minimize app size
    * Upload images/resume to Google Storage
    * Get all images upon page load
10. Add adnimations using react-spring to animate items within sections:
    * Projects
    * Experience
    * Skills
# Changelog

## 11/14
1. Refactored Nav section
    * 68 -> 21 lines of code
    * Links no longer hard coded
    * Improved scalability and readability
    * Removed link to context for optimization
    * Created navData file 
2. Refactored Contact section

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