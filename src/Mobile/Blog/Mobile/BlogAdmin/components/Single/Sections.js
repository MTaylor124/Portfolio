import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import Section from './Section'
import List from './List'

// import Button from '@material-ui/core/Button'

export default function Sections() {
    
    let {
        singleBlogSections,
        // checkContext,
        fullyLoadedBLogSections
    } = useContext(BlogContext)
    
    let sectionContent, index = -1
    // let sectionContent

    if (singleBlogSections.length > 0 && fullyLoadedBLogSections) {
        sectionContent = (
        <div>
            {singleBlogSections.map(section => {
                // console.log(section)
                if (section.type === 'list') {
                    index++
                    return (
                        <List 
                            key={section.docRef}
                            items={section.items}
                            index={index}
                            sectionID={section.docRef}
                        />
                    )
                } else if (section.type === 'header' || section.type === 'body' || section.type === 'emphasis') {
                    index++
                    return (
                        <Section 
                            key={section.docRef}
                            sectionID={section.docRef}
                            type={section.type}
                            content={section.content}
                            testIndex={section.testIndex}
                            originalContent={section.originalContent}
                        />
                    )
                } else {
                    return (
                        <div>
                        </div>
                    )
                }
            })}
        </div>
        )
    } else {
        sectionContent = (
            <div>
                This blog has no sections
            </div>
            )
    }
    return (
        <div>
            {/* <Button onClick={() => checkContext()}>
                Context
            </Button> */}
            {sectionContent}
        </div>
    )
}
