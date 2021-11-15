import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function Title() {

    let {
        singleBlogDetails,
        editingTitle,
        toggleEditTitle,
        editTitle,
        updatingTitle,
        updateTitle,
        updatedTitle,
        blogID,
        setNotification
    } = useContext(BlogContext)

    
    let {
        title
    } = singleBlogDetails

    function handleUpdate() {
        updateTitle()

        firebase.firestore().collection('Blog').doc(blogID)
        .update({
            title: singleBlogDetails.title
        })
        .then(() => {
            setTimeout(() => {
                setNotification('Title Updated')
                updatedTitle()
            }, 1200)
        })
        .catch(e => {
            console.error(e.code)
        })
    }

    const textfieldStyle = {
        marginTop: '10px',
        marginBottom: '10px'
    }
    const buttonStyle = {
        paddingTop: '2px',
        paddingBottom: '2px',
        // fontSize: '1rem',
        minHeight: '0',
        width: '100%',
        minWidth: '0',
        textTransform: 'none'
    }
    let buttons

    if (editingTitle) {
        buttons = (
            <div className="m-bvs-title-options">
                <Button
                    style={buttonStyle}
                    variant='contained'
                    color='primary'
                    onClick={() => handleUpdate()}>
                    Save
                </Button>
                <div className="m-bvs-button-padding">

                </div>
                <Button
                    style={buttonStyle}
                    variant='contained'
                    color='default'
                    onClick={() => toggleEditTitle()}>
                    Cancel
                </Button>
            </div>
        )
    } else if (updatingTitle) {
        buttons = (
            <div className="m-bvs-title-options">
                <CircularProgress color='primary' size={40}/>
            </div>
        )
    } else {
        buttons = (
            <div className="m-bvs-title-options">
                <Button
                    style={buttonStyle}
                    variant='contained'
                    color='default'
                    onClick={() => toggleEditTitle()}>
                    Edit
                </Button>
            </div>
        )
    }
    return (
        <div className='m-bvs-title'>
            <TextField
                style={textfieldStyle}
                disabled={(!editingTitle)}
                value={title}
                variant='outlined'
                color='primary'
                label='Title'
                fullWidth
                multiline
                rowsMax={3}
                onChange={(e) => editTitle(e.target.value)}
            />
                {buttons}
        </div>
    )
}
