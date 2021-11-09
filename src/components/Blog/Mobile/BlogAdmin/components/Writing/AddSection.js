import React, { useContext } from 'react'
import { BlogContext } from './../../../../BlogContext'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import { v4 as uuidv4 } from 'uuid'

export default function AddSection() {

    let {
        currentlyAdding,
        currentOrder,
        header,
        body,
        list,
        emphasis,
        addToContent,
        listNumber,
        addToNumberOfLists,
        cancelAddingSection,
        totalListItems,
        listOrder,
        addNewListItem
    } = useContext(BlogContext)

    function handleAddNewItem() {
        // let itemUUID = uuidv4()
        let newIem = {
            included: true,
            content: '',
            type: 'item',
            listOrder: listOrder,
            itemUUID: uuidv4()
        }
        addNewListItem(newIem)
    }

    const addSectionStyle = {
        textTransform: 'none',
        // width: '30vw',
        fontSize: '0.95rem',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingtop: '3px',
        paddingBottom: '3px',
    }
    const cancelButtonStyle = {
        textTransform: 'none',
        width: '20vw',
        fontSize: '0.95rem',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingtop: '3px',
        paddingBottom: '3px',
    }
    const addStyle = {
        textTransform: 'none',
        fontSize: '0.95rem',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingtop: '3px',
        paddingBottom: '3px',
    }
    const addyStyle = {
        fontSize: '1.1rem',
        color: 'white',
    }
    let headerCheck, disabledCheck, listContent
    if (currentlyAdding === 'header') {
        headerCheck = 'Header'
        if (header) {
            disabledCheck = false
        } else {
            disabledCheck = true
        }
    } else if (currentlyAdding === 'body') {
        headerCheck = 'Body'
        if (body) {
            disabledCheck = false
        } else {
            disabledCheck = true
        }
    } else if (currentlyAdding === 'list') {
        headerCheck = 'List'
        if (list) {
            disabledCheck = false
        } else {
            disabledCheck = true
        }
        
        if (totalListItems < 10) {
            listContent = (
                <Button
                    variant='contained'
                    color='primary'
                    disabled={false}
                    onClick={() => handleAddNewItem()}
                    style={addStyle}>
                    <AddIcon style={addyStyle} />
                    Add List Item
                </Button>
            )
        } else {
            listContent = (
                <Button
                    disabled={true}
                    style={addStyle}>
                    <AddIcon style={addyStyle} />
                    Add List Item
                </Button>
            )
        }
    } else if (currentlyAdding === 'emphasis') {
        headerCheck = 'Emphasis'
        if (emphasis) {
            disabledCheck = false
        } else {
            disabledCheck = true
        }
    }

    function handleAddSection() {
        let sectionUUID = uuidv4()

        if (currentlyAdding === 'header') {
            let newContent = {
                order: currentOrder,
                included: true,
                type: 'header',
                content: header,
                sectionUUID: sectionUUID
            }
            addToContent(newContent)
        } else if (currentlyAdding === 'body') {
            let newContent = {
                order: currentOrder,
                included: true,
                type: 'body',
                content: body,
                sectionUUID: sectionUUID
            }
            addToContent(newContent)
        } else if (currentlyAdding === 'list') {
            let newContent = {
                order: currentOrder,
                included: true,
                type: 'list',
                content: list,
                number: listNumber,
                sectionUUID: sectionUUID
            }
            addToContent(newContent)
            addToNumberOfLists()
        } else if (currentlyAdding === 'emphasis') {
            let newContent = {
                order: currentOrder,
                included: true,
                type: 'emphasis',
                content: emphasis,
                sectionUUID: sectionUUID
            }
            addToContent(newContent)
        }
    }

    if (currentlyAdding) {
        return (
            <div className='m-blog-new-options-container'>
                <Button
                    disabled={disabledCheck}
                    style={addSectionStyle}
                    variant='contained'
                    color='primary'
                    onClick={() => handleAddSection()}>
                    Add {headerCheck}
                </Button>
                {listContent}
                <Button
                    variant='contained'
                    color='default'
                    style={cancelButtonStyle}
                    onClick={() => cancelAddingSection()}>
                    Cancel
                </Button>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}