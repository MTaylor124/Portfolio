import React, { useContext } from 'react'

import Button from '@material-ui/core/Button'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { BlogContext } from './../../../../BlogContext'

export default function AddListItem() {

    let {
        // listItem2,
        numberOfItems,
        addToNumberOfItems,
        // createListItem,
        // currentNumber,
        addToList
    } = useContext(BlogContext)

    const buttonStyle = {
        padding: '0',
        width: '60%',
        minHeight: '0',
        fontSize: '2.5rem',
        marginTop: '8px'
    }
    const iconStyle = {
        fontSize: 'inherit',
        paddingTop: '3px'
    }
    function handleAddListItem() {
        addToNumberOfItems()

        // let newList = {
            
        // }
        addToList()
        // check which listItems in context are empty
        // select the lowest one for next item
        // createListItem(currentNumber)
    }
    return (
        <Button
            disabled={(numberOfItems >= 10)}
            style={buttonStyle}
            onClick={() => handleAddListItem()}>
            <AddCircleIcon style={iconStyle}/>
        </Button>
    )
}