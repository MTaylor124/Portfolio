import React, {useContext} from 'react'
import { BlogContext } from './../../../../BlogContext'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function NewSection() {
    let {
        blogID,
        addingNewSectionToSingleBlog,
        singleBlogSections,
        addToBlogSections,
        highestOrder,
        setHighestOrder,
        sortSingleBlogSections
    }= useContext(BlogContext)

    let {
        newSectionType,
        sectionContent,
        updateSectionContent,
        feedback,
        cancelAddingSection,
        // handleAddNewSection,
        createNewSection,
        createdNewSection,
    } = addingNewSectionToSingleBlog

    let saveOrCancel, userFeedback, disableCheck, labelFix

    if (newSectionType === 'header') {
        labelFix = 'Header'
    } else if (newSectionType === 'body') {
        labelFix = 'Body'
    } else if (newSectionType === 'emphasis') {
        labelFix = 'Emphasis'
    }  

    function handleAddNewSection() {
        createNewSection()

        firebase.firestore().collection('Blog').doc(blogID).collection('sections')
        .add({
            type: newSectionType,
            order: singleBlogSections.length,
            content: sectionContent
        })
        .then(docRef => {
            let finalOrder = highestOrder + 1
            let newIndex = singleBlogSections.length

            let section = {
                type: newSectionType,
                content: sectionContent,
                order: finalOrder,
                docRef: docRef.id,
                originalContent: sectionContent,

                deleting: false,
                updating: false,
                disabled: true,
                deleted: false,

                testIndex: newIndex
            }
            addToBlogSections(section)
            setHighestOrder((highestOrder + 1))
            createdNewSection(labelFix)
        })
        .then(() => {
            sortSingleBlogSections()
        })
        .catch(e => {
            console.error(e.code)
        })
    }

    const optionsButtonStyle = {
        textTransform: 'none',
        padding: 0,
        width: '49%'
    }
    const textfieldStyle = {
        marginTop: '12px'
    }


    if (sectionContent === '') {
        disableCheck = true 
    } else {
        disableCheck = false
    }
    if (feedback) {
        saveOrCancel = (
            <div>

            </div>
        )
        userFeedback = (
            <div className='m-bvs-card-options-container'>
                <CircularProgress color='primary' size={20} style={{marginTop: '12px'}}/>
            </div>
        )
    } else {
        saveOrCancel = (
            <div className='m-bvs-new-section-save-cancel'>
                <Button
                    disabled={disableCheck}
                    style={optionsButtonStyle}
                    variant='contained'
                    color='primary'
                    onClick={() => handleAddNewSection() }>
                    Save new {labelFix}
                </Button>
                <Button
                    style={optionsButtonStyle}
                    variant='contained'
                    color='default'
                    onClick={() => cancelAddingSection()}>
                    Cancel
                </Button>
            </div>
        )
        userFeedback = (
            <div>

            </div>
        )

    }
    
    return (
        <div className='m-bvs-new-section-container'>
            {saveOrCancel}
            <div className='m-bvs-new-section-row'>
                <TextField 
                    disabled={feedback}
                    style={textfieldStyle}
                    label={labelFix}
                    type='text'
                    fullWidth
                    variant='outlined'
                    color='primary'
                    value={sectionContent}
                    onChange={e => updateSectionContent(e.target.value)}/>
                {userFeedback}
            </div>
        </div>
    )
}
