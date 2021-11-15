import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import Header from './Header'
import Body from './Body'
import Emphasis from './Emphasis'
import List from './List'

export default function EditContent() {

    let {
        currentlyAdding
    } = useContext(BlogContext)

    if (currentlyAdding === 'header') {
        return <Header />
    } else if (currentlyAdding === 'body') {
        return <Body />
    } else if (currentlyAdding === 'emphasis') {
        return <Emphasis />
    } else if (currentlyAdding === 'list') {
        return <List />
    } else {
        return (
            <div>
    
            </div>
        )
    }
}