import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Options from './Options'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function Item({itemID, sectionID, index, ownIndex}) {

    let {
        blogID,
        currentItemIndex,
        singleBlogSections,
        handleUpdateItem,
        handleRevertItem,
        updateAListItem,
        updatedAListItem,
    } = useContext(BlogContext)
    
    let {
        disabled,
        deleting,
        deleted,
        updating,
        content,
        originalContent
    } = singleBlogSections[index].items[ownIndex]

    function handleSectionUpdate(index1, index2) {
        updateAListItem(index1, index2)

        firebase.firestore().collection('Blog').doc(blogID).collection('sections').doc(sectionID).collection('items').doc(itemID)
        .update({ content: singleBlogSections[index1].items[index2].content})
        .then(() => {
            setTimeout(() => {
                updatedAListItem(index1, index2, content)
            }, 1000)
        })
        .catch(e => {
            console.error(e.code)
        })
    }

    let saveOptions

    const sectionStyle = {
        marginTop: '5px'
    }
    const submitStyle = {
        padding: '0',
        height: '30px',
        width: '40vw'
    }
    const cancelStyle = {
        marginLeft: '10px',
        height: '30px',
        width: '40vw'
    }
    
    if (!disabled && !deleting && !updating) {
        saveOptions = (
            <div className='m-bvs-save-discard-container'>
                <Button
                    disabled={(content === originalContent)}
                    disableElevation
                    style={submitStyle}
                    variant='contained'
                    color='primary'
                    onClick={() => handleSectionUpdate(index, currentItemIndex)}>
                    Save Changes
                </Button>
                <Button
                    disableElevation
                    style={cancelStyle}
                    variant='contained'
                    color='default'
                    onClick={() => handleRevertItem(index, currentItemIndex, originalContent)}>
                    Cancel
                </Button>
            </div>
        )
    } else {
        saveOptions = (
            <div>
                
            </div>
        ) 
    }

    // let textInput = createRef(null);
    
    if (deleted) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div className='m-bvs-section-card-container'>
                {saveOptions}
                <div className="m-bvs-section-card-row">
                    <TextField
                        // inputRef={textInput}
                        disabled={disabled}
                        style={sectionStyle}
                        label='List Item'
                        value={content}
                        fullWidth
                        variant='outlined'
                        color='primary'
                        onChange={e => handleUpdateItem(index, currentItemIndex, e.target.value, originalContent)}/>
                    <Options index={index} ownIndex={ownIndex}/>
                </div>
            </div>
        )
    }
}
