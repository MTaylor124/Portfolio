import React, { useContext } from 'react'
import { BlogContext } from './../../../../BlogContext'

import ContentCard from './ContentCard'

// import { v4 as uuidv4 } from 'uuid'

export default function AddedSections() {

    let {
        addedContent
    } = useContext(BlogContext)

    if (addedContent.length > 0) {
        return (
            <div className='m-blog-sections-container'>
                {addedContent.map(content => {
                    // const sectionID = uuidv4()
                    if (content.included === true) {
                        return (
                            <ContentCard 
                                key={`${content.order}-${content.type}`}
                                type={content.type}
                                order={content.order}
                                content={content.content}
                                number={content.number}
                                sectionUUID={content.sectionUUID}
                            />
                        )
                    } else {
                        return (
                            <div key={Math.random()}>
                             </div>   
                        )
                    }  
                })}
            </div>
        )
    } else {
        return (
            <div></div>
        )

    }
}