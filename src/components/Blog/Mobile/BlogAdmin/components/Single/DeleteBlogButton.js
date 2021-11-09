import React, { useContext } from 'react'
import { BlogContext } from './../../../../BlogContext'

import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import CircularProgress from '@material-ui/core/CircularProgress'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function DeleteBlogButton() {
    
    let {
        blogID,
        showingDeleteBlogWarning,
        toggleShowDeleteBlogWarning,
        deletingBlog,
        deleteBlog,
        deletedBlog,
        reloadBlogs
    } = useContext(BlogContext)

    function handleDeleteBlog() {
        deleteBlog()

        const currentBlog = firebase.firestore().collection('Blog').doc(blogID)

        currentBlog.collection('sections')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                if (doc.data().type === 'list') {
                    currentBlog.collection('sections').doc(doc.id).collection('items')
                    .get()
                    .then(snapshot2 => {
                        snapshot2.forEach(doc2 => {
                            currentBlog.collection('sections').doc(doc.id).collection('items').doc(doc2.id)
                            .delete()
                            .catch(e => {
                                console.error(e.code)
                            })
                        })
                    })
                    .then(() => {
                        currentBlog.collection('sections').doc(doc.id)
                        .delete()
                        .catch(e => {
                            console.error(e.code)
                        })
                    })
                    .catch(e => {
                        console.error(e.code)
                    })
                } else {
                    currentBlog.collection('sections').doc(doc.id)
                    .delete()
                    .catch(e => {
                        console.error(e.code)
                    })
                }
            })
        })
        .then(() => {
            currentBlog
            .delete()
            .catch(e => {
                console.error(e.code)
            })
        })
        .then(() => {
            reloadBlogs(false)
            setTimeout(() => {
                deletedBlog()
            }, 1000)
        })
        .catch(e => {
            console.error(e.code)
        })
    }

    const deleteButtonStyle = {
        textTransform: 'none',
        backgroundColor: 'red',
        color: 'white',
        marginTop: '70px',
        marginBottom: '10px',
        width: '70vw'
    }
    const deleteWarningStyle = {
        width: '100vw',
        height: '100vh',
        zIndex: '0234702809832098',
        backgroundColor: 'rgba(12, 95, 95, 0.45)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
    const deleteButtonStyle2 = {
        marginRight: '30px',
        background: 'red',
        color: 'white',
        minWidth: '40%',
        textTransform: 'none'
    }
    const deleteFeedbackStyle = {
        color: 'white',
        padding: 0,
        // minHeigh
    }
    const cancelStyle = {
        minHeight: 0,
        minWidth: '40%',
        textTransform: 'none'
    }

    const closeWindowButton = {
        padding: 0,
        minHeight: 0,
        minWidth: 0,
    }
    const closeWindowIcon = {
        fontSize: '2.5rem',
        padding: '3px',
        marginLeft: '50px',
        marginBottom: '4px'
    }


    let deletecheck, deleteFeedback
    if (showingDeleteBlogWarning) {
        deletecheck = true
    } else {
        deletecheck = false
    }
    if (deletingBlog) {
        deleteFeedback = (
            <CircularProgress size={20} style={deleteFeedbackStyle}/>
        )
    } else {
        deleteFeedback = 'Delete'
    }
    return (
        <div>
            <Button
                variant='contained'
                style={deleteButtonStyle}
                onClick={() => toggleShowDeleteBlogWarning()}>
                Delete Blog
            </Button>
            <Backdrop
                open={deletecheck}
                style={deleteWarningStyle}>
                <div className="m-bvs-card-delete-warning-container">
                    <div className="m-bvs-card-delete-warning-header">
                        <div>
                            
                        </div>
                        <Button
                            style={closeWindowButton}
                            onClick={() => toggleShowDeleteBlogWarning() }
                            >
                            <CloseRoundedIcon color='primary' style={closeWindowIcon}/>
                        </Button>
                    </div>
                    <div className="m-bvs-card-delete-warning-body">
                        Are you sure you want to delete this Blog Post?
                    </div>
                    <div className="m-bvs-blog-delete-warning-options">
                        <Button
                            style={deleteButtonStyle2}
                            variant='contained'
                            onClick={() => handleDeleteBlog()}
                            >
                            {deleteFeedback}
                        </Button>
                        <Button
                            style={cancelStyle}
                            variant='contained'
                            color='default'
                            onClick={() => toggleShowDeleteBlogWarning() }>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Backdrop>
        </div>
    )
}
