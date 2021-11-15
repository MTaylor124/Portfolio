import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import Button from '@material-ui/core/Button'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function Save() {

    let {
        addedContent,
        currentlyAdding,
        title,
        totalSections,
        setNotification,
        clearWritingValues,
        blogNumber
    } = useContext(BlogContext)

    const saveAsDraftStyle = {
        textTransform: 'none',
        // minHeight: '6vh',
        width: '48%',
        fontSize: '1.4rem',
        padding: '0'
    }
    function handleSaveDraft(check) {
        let today = new Date()
        let day = today.getDate().toString()
        let month = (today.getMonth() + 1).toString()
        let year = today.getFullYear().toString()
        let todaysDate = month.concat('-',day,'-',year)

        firebase.firestore().collection('Blog')
        .add({
            title: title,
            date: todaysDate,
            published: check,
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
            if (check === true) {
                setNotification('Published Successfully!')
            } else {
                setNotification('Draft Successfully Saved!')
            }
            
            clearWritingValues()
        })
        .catch(err => {
            console.error(err.code)
        })
    }
    let savecheck
    if (totalSections === 0 || currentlyAdding || !title) {
        savecheck = true
    } else {
        savecheck = false
    }
    return (
        <div className='m-blog-save-backdrop-top'>
            <Button
                disableElevation
                variant='contained'
                color='primary'
                disabled={savecheck}
                style={saveAsDraftStyle}
                onClick={() => handleSaveDraft(false)}>
                    <div className="m-blog-publish-button">
                        Save as draft
                    </div>
            </Button>
            <Button
                disableElevation
                variant='contained'
                color='primary'
                disabled={savecheck}
                style={saveAsDraftStyle}
                onClick={() => handleSaveDraft(true)}>
                    <div className="m-blog-publish-button">
                        Publish
                    </div>
            </Button>
        </div>
    )
}