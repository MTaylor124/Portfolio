import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import NewListItem from './NewListItem'
import ListOptions from './ListOptions'

export default function NewList() {

    let {
        addingNewSectionToSingleBlog
    } = useContext(BlogContext)

    let {
        listContent
    } = addingNewSectionToSingleBlog

    let renderedList
    if (listContent.length > 0) {
        renderedList = listContent.map(item => {
            return (
                <NewListItem
                    key={Math.random()}
                    order={item.order}
                    />
            )
        })
    } else {
        renderedList = 'no items'
    }
    return (
        <div className='m-bvs-new-list-container'>
            <ListOptions />
            {renderedList}
        </div>
    )
}
