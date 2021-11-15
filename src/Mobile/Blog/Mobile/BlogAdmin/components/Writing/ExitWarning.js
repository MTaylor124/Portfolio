import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function ExitWarning() {
    let {
        showingExitWarning,
        hideExitWarning,
        exitWriting,

        addedContent,
        title,
        setNotification,
        clearWritingValues,
        blogNumber
    } = useContext(BlogContext)

    function handleSaveAsDraft() {
        let today = new Date()
        let day = today.getDate().toString()
        let month = (today.getMonth() + 1).toString()
        let year = today.getFullYear().toString()
        let todaysDate = month.concat('-',day,'-',year)

        firebase.firestore().collection('Blog')
        .add({
            title: title,
            date: todaysDate,
            published: false,
            blogNumber: blogNumber
        })
        .then(docRef => {
            addedContent.forEach(section => {
                if (section.type === 'list' && section.included) {
                    firebase.firestore().collection('Blog').doc(docRef.id).collection('sections')
                    .add({
                        type: 'list',
                        order: section.order
                    })
                    .then(docRef2 => {
                        section.content.forEach(item => {
                            if (item.included) {
                                firebase.firestore().collection('Blog').doc(docRef.id).collection('sections').doc(docRef2.id).collection('items')
                                .add({
                                    order: item.listOrder,
                                    type: 'item',
                                    content: item.content
                                })
                                .catch(err => {
                                    console.error(err.code)
                                })
                            } else {
                                return
                            }
                        })
                    })
                    .catch(err => {
                        console.error(err.code)
                    })
                } else {
                    if (section.included) {
                        firebase.firestore().collection('Blog').doc(docRef.id).collection('sections')
                        .add({
                            type: section.type,
                            order: section.order,
                            content: section.content
                        })
                        .catch(err => {
                            console.error(err.code)
                        })
                    }
                }
            })
        })
        .then(() => {
            firebase.firestore().collection("Number").doc('number')
            .update({
                blogNumber: blogNumber + 1
            })
            .catch(err => {
                console.error(err.code)
            })
            setNotification('Draft Successfully Saved!')
            clearWritingValues()
            exitWriting()
        })
        .catch(err => {
            console.error(err.code)
        })
    }
    const warningStyle = {
        width: '100vw',
        height: '100vh',
        zIndex: '4938759387537498',
        backgroundColor: 'rgba(12, 95, 95, 0.45)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
    const cancelStyle = {
        textTransform: 'none',
        // marginRight: '8px',
        fontSize: '1.1rem',
        padding: '0',
        minHeight: '0',
        minWidth: '0'
    }
    const optionButtonStyle = {
        textTransform: 'none',
        width: '35vw'
    }
    const deleteButtonStyle = {
        textTransform: 'none',
        backgroundColor: 'red',
        color: 'white',
        width: '35vw'
    }
    const closeIconStyle = {
        fontSize: '2.5rem',
        padding: '3px',
        marginLeft: '50px',
        marginBottom: '4px'
        // marginRight: '5px'
    }

    return (
        <Backdrop
            style={warningStyle}
            open={showingExitWarning}
            transitionDuration={250}>
            <div className="m-blog-warning-style">
                <div className="m-blog-warning-header">
                    <div>
                    </div>
                    <Button
                        style={cancelStyle}
                        onClick={() => hideExitWarning()}>
                            <CloseRoundedIcon color='primary' style={closeIconStyle}/>
                    </Button>
                </div>  
                <div className="m-blog-warning-body">
                    Are you sure you wish to discard this blog post?
                </div>
                <div className="m-blog-warning-options">
                    <Button
                        style={deleteButtonStyle}
                        variant='contained'
                        onClick={() => {
                            exitWriting()
                            setNotification('Blog Discarded')
                        }}>
                        Discard
                    </Button>
                    <Button
                        style={optionButtonStyle}
                        variant='contained'
                        color='default'
                        onClick={() => handleSaveAsDraft()}>
                        Save as Draft
                    </Button>
                </div>
            </div>
        </Backdrop>
    )
}
