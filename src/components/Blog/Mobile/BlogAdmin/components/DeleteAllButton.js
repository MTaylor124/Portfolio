import React from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'

import Button from '@material-ui/core/Button'
export default function DeleteAllButton() {

    function handleDeleteAll() {
        firebase.firestore().collection('Blog')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                firebase.firestore().collection('Blog').doc(doc.id).collection('sections')
                .get()
                .then(snapshot2 => {
                    snapshot2.forEach(doc2 => {
                        if (doc2.data().type === 'list') {
                            firebase.firestore().collection('Blog').doc(doc.id).collection('sections').doc(doc2.id).collection('items')
                            .get()
                            .then(snapshot3 => {
                                snapshot3.forEach(doc3 => {
                                    firebase.firestore().collection('Blog').doc(doc.id).collection('sections').doc(doc2.id).collection('items').doc(doc3.id)
                                    .delete()
                                    .then(() => {
                                        firebase.firestore().collection('Blog').doc(doc.id).collection('sections').doc(doc2.id)
                                        .delete()
                                    })
                                })
                            })
                        } else {
                            firebase.firestore().collection('Blog').doc(doc.id).collection('sections').doc(doc2.id)
                            .delete()
                        }
                    })
                })
            })
        })
        .then(() => {
            firebase.firestore().collection('Blog')
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    firebase.firestore().collection('Blog').doc(doc.id)
                    .delete()
                })
            })
        })
        .catch(err => {
            console.error(err.code)
        })
    }
    const buttonStyle = {
        padding: '0',
        marginBottom: '10px',
        height: '60px',
        textTransform: 'none',
        fontSize: '2rem',
        // backgroundColor: 'rgba(12, 95, 95, 0.5)',
        borderRadius: '10px',

        width: '80vw'
    }
    return (
        <Button
            color='primary'
            variant='contained'
            disabled={true}
            style={buttonStyle}
            onClick={() => handleDeleteAll() }>
            Delete All Blogs
        </Button>
    )
}