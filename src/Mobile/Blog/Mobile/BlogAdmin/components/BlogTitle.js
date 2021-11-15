import React, { useContext } from 'react'

import Button from '@material-ui/core/Button'

import firebase from 'firebase/app'
import 'firebase/firestore'
import { BlogContext } from '../../../BlogContext'


export default function BlogTitle(props) {

    let {
        title,
        date,
        published,
        id
    } = props

    let {
        addToBlogSections,
        setBlogSingleDetails,
        loadBlogDetails,
        finishLoadingBlogDetails,
        loadingBlogDetails,
        sortSingleBlogSections,

        highestOrder,
        setHighestOrder,
        // newTestIndex,
        // incrementTestIndex
        
        // checkContext
    } = useContext(BlogContext)

    function handleLoadBlog(id) {

        // Condense Route

        const blogs = firebase.firestore().collection('Blog')

        // Start loading feedback/ set context feedback, set blog ID

        loadBlogDetails(id)

        // get initial blog details: title, date, published

        blogs.doc(id)
        .get()
        .then(doc => {
            setBlogSingleDetails(
                doc.data().title, 
                doc.data().date, 
                doc.data().published, 
                doc.data().blogNumber
            )
        })
        .then(() => {
            blogs.doc(id).collection('sections').orderBy('order')
            .get()
            .then(snapshot => {
                let sectionIndex = -1
                
                snapshot.forEach(doc => {
                    // incrementTestIndex()
                    sectionIndex++
                    if (doc.data().order > highestOrder) {
                        setHighestOrder(doc.data().order)
                    }
                    if (doc.data().type === 'list') {
                        let section = {
                            type: 'list',
                            order: doc.data().order,
                            items: [],
                            docRef: doc.id,
                            listNumber: 0,
                            deleting: false,
                            testIndex: sectionIndex
                            // testIndex: newTestIndex
                        }
                        blogs.doc(id).collection('sections').doc(doc.id).collection('items').orderBy('order')
                        .get()
                        .then(snapshot2 => {
                            let itemIndex = -1
                            snapshot2.forEach(doc2 => {
                                
                                itemIndex++

                                if (doc2.data().order >= section.listNumber) {
                                    section.listNumber = doc2.data().order
                                    section.listNumber++
                                } 
                                let listItem = {
                                    type: 'item',
                                    content: doc2.data().content,
                                    order: doc2.data().order,
                                    docRef: doc2.id,
                                    originalContent: doc2.data().content,

                                    deleting: false,
                                    updating: false,
                                    disabled: true,
                                    deleted: false,

                                    ownIndex: itemIndex
                                }
                                section.items.push(listItem)
                            })
                        })
                        .then(() => {
                            addToBlogSections(section)
                        })
                        .catch(e => {
                            console.error(e.code)
                        })
                    } else {
                        let section = {
                            type: doc.data().type,
                            content: doc.data().content,
                            order: doc.data().order,
                            docRef: doc.id,
                            originalContent: doc.data().content,

                            deleting: false,
                            updating: false,
                            disabled: true,
                            deleted: false,

                            testIndex: sectionIndex
                        }
                        addToBlogSections(section)
                        // incrementTestIndex()
                    }
                })
            })
        })
        .then(() => {
            setTimeout(() => {
                finishLoadingBlogDetails()
            }, 500)
            setTimeout(() => {
                sortSingleBlogSections()
            }, 501)
        })
        .catch(e => {
            console.error(e.code)
        })    
    }

    const cardButtonStyle = {
        padding: '0',
        marginBottom: '7px',
        width: '95vw'
    }
    if (published) {
        return (
            <Button
                disabled={loadingBlogDetails}
                style={cardButtonStyle}
                color='primary'
                variant='contained'
                onClick={() => handleLoadBlog(id) }>
                <div className='m-blog-title-card-container'>
                    <div className="m-blog-title-card-date">
                        {date}
                    </div>
                    <div className="m-blog-title-card-title2">
                        {title}
                    </div>
                </div>
            </Button>
        )
    } else {
        return (
            <Button
                disabled={loadingBlogDetails}
                style={cardButtonStyle}
                color='default'
                variant='contained'
                onClick={() => handleLoadBlog(id) }>
                <div className='m-blog-title-card-container'>
                    <div className="m-blog-title-card-date">
                        {date}
                    </div>
                    <div className="m-blog-title-card-title">
                        {title}
                    </div>
                </div>
            </Button>
        )
    }
}