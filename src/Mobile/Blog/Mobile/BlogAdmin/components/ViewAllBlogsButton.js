import React, { useContext } from 'react'
import { BlogContext } from '../../../BlogContext'

import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function ViewAllBlogsButton() {

    let {
        loadingBlogs,
        addToBlogs,
        startLoadingBlogs,
        finishLoadingBlogs,
        viewAllBlogs,
        loadedBlogs
    } = useContext(BlogContext)

    function handleViewAllBlogs() {
        if (loadedBlogs) {
            viewAllBlogs()
        } else {
            startLoadingBlogs()

            firebase.firestore().collection('Blog').orderBy('blogNumber', 'desc')
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let blogPost = {
                        title: doc.data().title,
                        date: doc.data().date,
                        published: doc.data().published,
                        id: doc.id
                    }
                    addToBlogs(blogPost)
                })
            })
            .then(() => {
                setTimeout(() => {
                    viewAllBlogs()
                    finishLoadingBlogs()
                }, 500)
            })
            .catch(err => {
                console.error(err.code)
            })
        }
    }
    const buttonStyle = {
        padding: '0',
        marginBottom: '10px',
        height: '60px',
        width: '80vw',
        textTransform: 'none',
        fontSize: '2rem',
        borderRadius: '10px'
    }
    const loadingStyle = {
        padding: '0',
        marginBottom: '10px',
        height: '60px',
        width: '80vw',
        borderRadius: '10px'
        // background: 'rgb(12, 95, 95)'
    }

    let buttonContent
    if (loadingBlogs) {
        // disableButtons = true
        buttonContent = (
            <LinearProgress style={loadingStyle} color='primary'/>
        )
    } else {
        // disableButtons = false
        buttonContent = (
            <Button
                color='primary'
                variant='contained'
                style={buttonStyle}
                onClick={() => handleViewAllBlogs() }>
                View My Blogs
            </Button>
        )
    }

    return (
        <div>
            {buttonContent}
        </div>
    )
}