import React, {useContext} from 'react'
import {BlogContext} from '../../../../BlogContext'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
// import LinearProgress from '@material-ui/core/LinearProgress'
// import CircularProgress from '@material-ui/core/CircularProgress'
// import DeleteIcon from '@material-ui/icons/Delete'

import SectionOptions from './SectionOptions'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default function Section({sectionID, type, content, testIndex,originalContent}) {
    let {
        blogID,
        handleUpdateSection,
        singleBlogSections,
        handleRevertSection,
        currentSection,
        updateASection,
        updatedASection,
        // setNotification
    } = useContext(BlogContext)

    let {
        deleted,
        disabled,
        deleting,
        updating
        } = singleBlogSections[testIndex]

    function handleSectionUpdate() {
        updateASection()

        firebase.firestore().collection('Blog').doc(blogID).collection('sections').doc(sectionID)
        .update({ content: singleBlogSections[currentSection].content})
        .then(() => {
            setTimeout(() => {
                let message
                if (type === 'header') {
                    message = 'Header Updated'
                } else if (type === 'body') {
                    message = 'Body Updated'
                } else if (type === 'emphasis') {
                    message = 'Emphasis Updated'
                }
                // setNotification(message)
                updatedASection(singleBlogSections[currentSection].content, message)
            }, 1000)
        })
        .catch(e => {
            console.error(e.code)
        })
    }

    let saveOptions, labelFix

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
                    onClick={() => handleSectionUpdate()}>
                    Save Changes
                </Button>
                <Button
                    disableElevation
                    style={cancelStyle}
                    variant='contained'
                    color='default'
                    onClick={() => handleRevertSection()}>
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
    if (type === 'header') {
        labelFix = 'Header'
    } else if (type === 'body') {
        labelFix = 'Body'
    } else if (type === 'emphasis') {
        labelFix = 'Emphasis'
    }  
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
                            disabled={disabled}
                            style={sectionStyle}
                            label={labelFix}
                            value={content}
                            type='text'
                            variant='outlined'
                            color='primary'
                            multiline
                            fullWidth
                            onChange={(e) => handleUpdateSection(testIndex, e.target.value, originalContent) }/>
                    <SectionOptions testIndex={testIndex}/>
                </div>
            </div>
        )
    }
}
