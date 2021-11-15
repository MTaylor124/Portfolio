import React, {useContext} from 'react'
import { BlogContext } from '../../../../BlogContext'

import Button from '@material-ui/core/Button'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function ListOptions() {

    let {
        addingNewSectionToSingleBlog,
        blogID,
        setNotification
    } = useContext(BlogContext)
    
    let {
        createNewListItem,
        totalListItems,
        handleExitList,
        savingList,
        startSavingListItems,
        finishSavingListItems,
        currentOrder,

        listContent,
        setTemporaryList,
        // addItemToTemporaryList,
        // temporaryList,
        // showTemporaryList,
        // temporaryIndex
    } = addingNewSectionToSingleBlog

    function handleSaveNewList() {
        startSavingListItems()

        let newListSection = {
            docRef: null,
            deleting: false,
            type: 'list',
            items: [],
            order: currentOrder,
            testIndex: currentOrder,
            listNumber: 1
        }

        setTemporaryList(newListSection)

        // fix list number later

        let BlogSections = firebase.firestore().collection('Blog').doc(blogID).collection('sections')

        BlogSections
        .add({
            type: 'list',
            order: currentOrder
        })
        .then(docRef => {
            newListSection.docRef = docRef.id

            // let experimentalIndex = -1

            listContent.forEach((item, index) => {
                if (item.deleted === false) {
                    
                    // experimentalIndex++

                    BlogSections.doc(docRef.id).collection('items')
                    .add({
                        content: item.content,
                        order: item.order,
                        type: 'item'
                    })
                    .then(docRef2 => {
                        let newListItem = {
                            content: item.content,
                            order: item.order,
                            deleted: false,
                            deleting: false,
                            disabled: true,
                            docRef: docRef2.id,
                            updating: false,
                            originalContent: item.content,
                            type: 'item',
                            ownIndex: index,
                            // ownIndex: experimentalIndex
                        }
                        newListSection.items.push(newListItem)
                        // addItemToTemporaryList(newListItem)
                    })
                    .catch(e => {
                        console.error(e.code)
                    })
                }
            })
        })
        .then(() => {
            setTimeout(() => {
                // showTemporaryList()
                setNotification('List Added to Blog!')
                finishSavingListItems(newListSection)
            }, 1000)
        })
        .catch(e => {
            console.error(e.code)
        })

        // console.log('blog id', blogID)
        // console.log('current order', currentOrder)

        // blog ID
        // current order so that list shows up placed correctly
        // add this list to current sections
        // delete this list
        // show notification
    }

    const optionsStyle = {
        textTransform: 'none'
    }

    let disableAddNewItems

    if (totalListItems >= 10) {
        disableAddNewItems = true
    } else {
        disableAddNewItems = false
    }

    if (savingList) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div className='m-bvs-new-list-options'>
                <Button
                    style={optionsStyle}
                    variant='contained'
                    color='primary'
                    onClick={() => handleSaveNewList() }>
                    Save New List
                </Button>
                <Button
                    disabled={disableAddNewItems}
                    style={optionsStyle}
                    variant='contained'
                    color='primary'
                    onClick={() => createNewListItem() }>
                    Add Item
                </Button>
                <Button
                    style={optionsStyle}
                    variant='contained'
                    color='default'
                    onClick={() => handleExitList() }>
                    Cancel
                </Button>
            </div>
        )
    }
}
