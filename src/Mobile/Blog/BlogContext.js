import React, {createContext} from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

import { v4 as uuidv4 } from 'uuid'
import disableScroll from 'disable-scroll'

export const BlogContext = createContext()

export class BlogContextProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            test: 'yes',
            title: null,
            loggedIn: true,
            logIn: () => {
                this.setState({
                    loggedIn: true
                })
            },
            logOut: () => {
                this.setState({
                    loggedIn: false
                })
            },
            blogNumber: null,
            viewingAllBlogs: false,
            viewAllBlogs: () => {
                this.setState({
                    viewingAllBlogs: true
                })
            },
            exitAllBlogs: () => {
                this.setState({
                    viewingAllBlogs: false
                })
            },
            blogs: [],
            loadingBlogs: false,
            loadedBlogs: false,

            startLoadingBlogs: () => {
                this.setState({
                    loadingBlogs: true
                })
            },
            toggleLoadingBlogs: () => {
                this.setState({
                    loadingBlogs: !this.state.loadingBlogs
                })
            },
            finishLoadingBlogs: () => {
                this.setState({
                    loadingBlogs: false,
                    loadedBlogs: true, 
                    reloadingBlogs: false
                })
            },
            addToBlogs: blog => {
                this.setState({
                    blogs: [...this.state.blogs, blog]
                })
            },
            clearBlogs: () => {
                this.setState({
                    blogs: []
                })
            },
            writing: false,
            startWriting: () => {
                this.setState({
                    writing: true
                })
                firebase.firestore().collection('Number').doc('number')
                .get()
                .then(doc => {
                    this.setState({
                        blogNumber: doc.data().blogNumber
                    })
                })
                .catch(err => {
                    console.error(err.code)
                })
            },
            stopWriting: () => {
                this.setState({
                    writing: false,
                    // anything else that needs to be cleared clearAnchors
                })
            },
            handleChange: (e) => {
                this.setState({
                    [e.target.name]: e.target.value
                })
            },
            
            currentlyAdding: null,
            toggleAddHeader: () => {
                if (this.state.currentlyAdding === 'header') {
                    this.setState({
                        currentlyAdding: null,
                        header: null
                    })
                } else {
                    this.setState({
                        currentlyAdding: 'header'
                    })
                }
            },
            toggleAddBody: () => {
                if (this.state.currentlyAdding === 'body') {
                    this.setState({
                        currentlyAdding: null,
                        body: null
                    })
                } else {
                    this.setState({
                        currentlyAdding: 'body'
                    })
                }
            },
            toggleAddEmphasis: () => {
                if (this.state.currentlyAdding === 'emphasis') {
                    this.setState({
                        currentlyAdding: null,
                        emphasis: null
                    })
                } else {
                    this.setState({
                        currentlyAdding: 'emphasis'
                    })
                }
            },
            cancelAddingSection: () => {
                this.setState({
                    currentlyAdding: null,
                    emphasis: null,
                    body: null,
                    header: null,
                    list: [],
                    numberOfItems: 0,
                    totalListItems: 1
                })
            },
            totalListItems: 1,
            toggleAddList: () => {
                if (this.state.currentlyAdding === 'list') {
                    this.setState({
                        currentlyAdding: null,
                        list: [],
                        numberOfItems: 0,

                    })
                } else {
                    this.setState({
                        currentlyAdding: 'list',
                        list: [{
                            included: true,
                            content: '',
                            type: 'item',
                            listOrder: 0,
                            itemUUID: uuidv4()
                            }],
                        numberOfItems: 1,
                        listOrder: 1
                    })
                }
            },
            currentOrder: 0,
            addHeader: (number) => {
                
            },
            header: null,
            emphasis: null,
            body: null,
            list: [],
            addToList: (item) => {
                this.setState({
                    list: [...this.state.list, item]
                })
            },
            orderOfItems: 2,
            numberOfItems: 1,
            addToNumberOfItems: () => {
                if (this.state.numberOfItems < 10) {
                    let newItem = {
                        order: this.state.orderOfItems
                    }
                    this.setState({
                        numberOfItems: this.state.numberOfItems + 1,
                        list: [...this.state.list, newItem]
                    })
                    setTimeout(() => {
                        this.setState({
                            orderOfItems: this.state.orderOfItems + 1
                        })
                    }, 100)
                }
            },
            subtractFromNumberOfItems: () => {
                this.setState({
                    numberOfItems: this.state.numberOfItems -1
                })
            },
            handleItemChange: (e) => {
                this.setState({
                    [e.target.name]: e.target.value
                })
            },



            addedContent: [],
            addToContent: (newContent) => {
                this.setState({
                    addedContent: [...this.state.addedContent, newContent],
                    currentOrder: this.state.currentOrder + 1,
                    currentlyAdding: null,
                    totalSections: this.state.totalSections + 1,
                    listOrder: 0
                })
                setTimeout(() => {
                    this.setState({
                        header: null,
                        body: null,
                        list: [],
                        emphasis: null,
                    })
                }, 10)
            },
            // totalNumberOfItems: 1,
            addToTotalNumberOfItems: () => {
                this.setState({
                    numberOfItems: this.state.numberOfItems + 1
                })
            },
            subtractFromTotalNumberOfItems: () => {
                this.setState({
                    numberOfItems: this.state.numberOfItems - 1
                })
            },
            currentNumber: 1,
            addToCurrentNumber: () => {
                this.setState({
                    currentNumber: this.state.currentNumber + 1
                })
            },
            listOrder: 0,
            addNewListItem: (item) => {
                this.setState(prev => {
                    let update = prev
                    update.list.push(item)
                    update.listOrder++
                    update.totalListItems++
                    return update
                })
            },
            updateListItem: (index, content) => {
                this.setState(prev => {
                    let update = prev
                    update.list[index].content = content
                    return update
                })
            },
            handleDeleteItem: (index) => {
                if (this.state.totalListItems === 1) {
                    this.setState(prev => {
                        let update = prev
                        update.list = []
                        update.numberOfItems = 0
                        update.currentlyAdding = null
                        return update
                    })
                } else {
                    this.setState(prev => {
                        let update = prev
                        update.list[index].included = false
                        update.totalListItems--
                        return update
                    })
                }
            },
            handleSectionUpdate: (index, content) => {
                this.setState(prev => {
                    let update = prev
                    update.addedContent[index].content = content
                    return update
                })
            },
            handleListUpdate: (index, content, order) => {
                this.setState(prev => {
                    let update = prev
                    update.addedContent[order].content[index].content = content
                    return update
                })
            },
            // clear
            checkContext: () => {
                console.log('Context:', this.state)
            },
            deleteSection: (order) => {
                this.setState(prev => {
                    let update = prev
                    update.addedContent[order].included = false
                    update.totalSections--
                    return update
                })
            },
            deleteSectionListItems: (sectionUUID, itemUUID) => {
                if (itemUUID) {
                    this.setState(prev => {
                        let update = prev
                        const sectionIndex = update.addedContent.findIndex(section => section.sectionUUID === sectionUUID)
                        const itemIndex = update.addedContent[sectionIndex].content.findIndex(item => item.itemUUID === itemUUID)
                        update.addedContent[sectionIndex].content[itemIndex].included = false
                        update.anchor = null
                        update.sectionToBeDeleted = null
                        update.itemToBeDeleted = null
                        update.showingDeleteConfirmation = false
                        return update
                    })
                    setTimeout(() => {
                        const sectionIndex = this.state.addedContent.findIndex(section => section.sectionUUID === sectionUUID)
                        if (this.state.addedContent[sectionIndex].content.every(item => item.included === false)) {
                            this.setState(prev => {
                                let update = prev
                                update.totalSections--
                                update.addedContent[sectionIndex].included = false
                                return update
                            })
                        } 
                    }, 10)
                } else {
                    // why is this function firing instead of just testSectionDelete
                    this.state.testSectionDelete(sectionUUID)
                }
            },
            totalSections: 0,
            listNumber: 1,
            addToNumberOfLists: () => {
                this.setState({
                    listNumber: this.state.listNumber + 1
                })
            },
            clearWritingValues: () => {
                this.setState({
                    writing: false,
                    currentlyAdding: null,
                    header: null,
                    body: null,
                    emphasis: null,
                    list: [],
                    addedContent: [],
                    numberOfItems: 0,
                    currentOrder: 0,
                    orderOfItems: 2,
                    listOrder: 0,
                    totalSections: 0,
                    listNumber: 1,
                    title: null
                })
            },

            // notifications exitWriting clear

            notification: null,
            showingNotification: false,
            setNotification: (notification) => {
                // make better system
                this.setState({
                    notification,
                    showingNotification: true
                })
                setTimeout(() => {
                    this.setState({
                        showingNotification: false
                    })
                }, 1300)
                setTimeout(() => {
                    this.setState({
                        notification: null
                    })
                }, 1601)
            },

            reloadingBlogs: false,
            reloadBlogs: (show) => {
                this.setState({
                    reloadingBlogs: true
                })
                setTimeout(() => {
                    this.setState({
                        blogs: []
                    })
                }, 305)
                setTimeout(() => {
                    this.state.startLoadingBlogs()

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
                            this.state.addToBlogs(blogPost)
                        })
                    })
                    .then(() => {
                        setTimeout(() => {
                            if (show !== false) {
                                this.state.setNotification('Refreshed!')
                            }
                            this.state.finishLoadingBlogs()
                        }, 300)
                    })
                    .catch(err => {
                        console.error(err.code)
                    })
                }, 400)
            },
            exitWriting: () => {
                disableScroll.off()
                this.setState({
                    writing: false,
                    title: null,
                    addedContent: [],
                    showingExitWarning: false,
                    currentlyAdding: null,
                    header: null,
                    body: null,
                    emphasis: null,
                    list: [],
                    numberOfItems: 0,
                    currentOrder: 0,
                    orderOfItems: 2,
                    listOrder: 0,
                    totalSections: 0,
                    listNumber: 1,
                    totalListItems: 1
                })
            },
            showingExitWarning: false,
            showExitWarning: () => {
                disableScroll.on()
                this.setState({
                    showingExitWarning: true
                })
            },
            hideExitWarning: () => {
                disableScroll.off()
                this.setState({
                    showingExitWarning: false
                })
            },
            exitAfterWarning: () => {
                disableScroll.off()
                this.setState({
                    showingExitWarning: false
                })
                setTimeout(() => {
                    this.setState({
                        writing: false,
                        title: null,
                        addedContent: [],
                        currentlyAdding: null,
                        header: null,
                        body: null,
                        emphasis: null,
                        list: [],
                        numberOfItems: 0,
                        currentOrder: 0,
                        orderOfItems: 2,
                        listOrder: 0,
                        totalSections: 0,
                        listNumber: 1,
                        totalListItems: 1
                    })
                }, 300)
            },
            showingDeleteConfirmation: false,
            anchor: null,
            sectionToBeDeleted: null,
            itemToBeDeleted: null,
            setDeleteAnchor: (anchor, sectionUUID, itemUUID) => {
                this.setState({
                    anchor,
                    showingDeleteConfirmation: true,
                    sectionToBeDeleted: sectionUUID,
                    itemToBeDeleted: itemUUID
                })
            },
            clearAnchors: () => {
                this.setState({
                    anchor: null,
                    showingDeleteConfirmation: false,
                    optionsAnchor: false,
                    currentItemIndex: null,
                    sectionOptionsAnchor: false,
                    sectionToBeDeleted: null,
                    itemToBeDeleted: null
                })
            },
            loadingBlogDetails: false,
            singleBlogDetails: {
                title: null,
                published: null,
                date: null,
                blogNumber: null,

                disableSwitch: false,
                startPublish: () => {
                    this.setState(prev => {
                        let update = prev
                        update.singleBlogDetails.published = !this.state.singleBlogDetails.published
                        update.singleBlogDetails.disableSwitch = true
                        return update 
                    })
                },
                finishPublish: () => {
                    this.setState(prev => {
                        let update = prev
                        update.singleBlogDetails.disableSwitch = false
                        return update
                    })
                }
            },
            setBlogSingleDetails: (title, date, published, blogNumber) => {
                this.setState(prev => {
                    let update = prev
                    let blogDetails = {
                        title: title,
                        date: date,
                        published: published,
                        blogNumber: blogNumber,
                        disableSwitch: false,
                        startPublish: () => {
                            this.setState(prev => {
                                let update = prev
                                update.singleBlogDetails.published = !this.state.singleBlogDetails.published
                                update.singleBlogDetails.disableSwitch = true
                                return update 
                            })
                        },
                        finishPublish: () => {
                            this.setState(prev => {
                                let update = prev
                                update.singleBlogDetails.disableSwitch = false
                                return update
                            })
                        }
                    }
                    update.singleBlogDetails = blogDetails

                    return update
                })
            },
            loadBlogDetails: (id) => {
                this.setState({
                    loadingBlogDetails: true,
                    blogID: id,
                })
            },
            fullyLoadedBLogSections: false,
            finishLoadingBlogDetails: () => {
                this.setState({
                    loadingBlogDetails: false,
                    viewingSingleBlog: true,
                    viewingAllBlogs: false,
                    fullyLoadedBLogSections: true
                })
            },
            viewingSingleBlog: false,
            singleBlogSections: [],
            sortSingleBlogSections: () => {
                this.setState(prev => {
                    let update = prev
                    let correctedArray = this.state.singleBlogSections.sort((a, b) => a.testIndex - b.testIndex)
                    update.singleBlogSections = correctedArray
                    return update
                })
            },
            blogID: null,
            addToBlogSections: (section) => {
                this.setState({
                    singleBlogSections: [...this.state.singleBlogSections, section]
                })
            },
            exitSingleBlog: () => {
                // this.state.cancelAddingSection()
                this.setState({
                    singleBlogSections: [],
                    viewingSingleBlog: false,
                    singleBlogDetails: {
                        title: null,
                        published: null,
                        date: null,
                        blogNumber: null
                    },
                    blogID: null,
                    viewingAllBlogs: true


                })
                this.setState(prev => {
                    let update = prev
                    update.addingNewSectionToSingleBlog.addingSection = false
                    update.focused = false
                    update.editingTitle = false
                    return update

                })
            },
            editingTitle: false,
            revertTitle: null,
            toggleEditTitle: () => {
                if (this.state.editingTitle) {
                    // cancel and revert value
                    this.setState(prev => {
                        let update = prev
                        update.singleBlogDetails.title = this.state.revertTitle
                        update.editingTitle = false
                        return update
                    })
                } else {
                    this.setState({
                        editingTitle: true,
                        revertTitle: this.state.singleBlogDetails.title
                    })
                }
            },
            editTitle: (newTitle) => {
                this.setState(prev => {
                    let update = prev
                    update.singleBlogDetails.title = newTitle
                    return update
                })
            },
            updatingTitle: false,
            updateTitle: () => {
                this.setState({
                    updatingTitle: true,
                    editingTitle: false
                })
            },
            updatedTitle: () => {
                this.setState({
                    updatingTitle: false
                })
            },
            handleUpdateSection: (index, content, originalContent) => {
                if (content !== originalContent) {
                    // aka it went from matching to different
                    this.setState(prev => {
                        let update = prev
                        update.singleBlogSections[index].content = content
                        update.singleBlogDetails.editingSingleSection = true
                        update.singleBlogDetails.editingSingleSectionIndex = index
                        return update
                    })
                } else {
                    // is now matching original content
                    this.setState(prev => {
                        let update = prev
                        update.singleBlogSections[index].content = content
                        update.singleBlogDetails.editingSingleSection = false
                        update.singleBlogDetails.editingSingleSectionIndex = null
                        return update
                    })
                } 
            },
            updatingAsection: false,
            updatingIndex: null,
            updateSection: (index) => {
                this.setState({
                    updatingAsection: true,
                    updatingIndex: index
                })
            },
            updatingAListItem: false,
            updatingListItemIndex: null,
            updatingListItemSectionIndex: null,
            updateAListItem: (index1, index2) => {
                this.setState(prev => {
                    let update = prev
                    update.singleBlogSections[index1].items[index2].updating = true
                    update.singleBlogSections[index1].items[index2].disabled = true
                    update.focused = false
                    return update
                })
            },
            updateASection: () => {
                this.setState(prev => {
                    let update = prev
                    update.singleBlogSections[this.state.currentSection].updating = true
                    update.singleBlogSections[this.state.currentSection].disabled = true
                    update.focused = false
                    return update
                })
            },
            updatedAListItem: (index1, index2, content) => {
                this.setState( prev => {
                    let update = prev
                    update.currentItemIndex = null
                    update.singleBlogSections[index1].items[index2].updating = false
                    update.singleBlogSections[index1].items[index2].originalContent = content
                    return update
                })
                this.state.setNotification('List Item Updated')
            },
            updatedASection: (content, message) => {
                this.setState( prev => {
                    let update = prev
                    update.singleBlogSections[this.state.currentSection].updating = false
                    update.singleBlogSections[this.state.currentSection].originalContent = content
                    update.currentSection = null
                    return update
                })
                this.state.setNotification(message)
            },
            setSectionDeleteAnchor: (anchor) => {
                this.setState({
                    anchor,
                    showingDeleteSectionWarning: true
                })
            },
            currentlyDeleting: null,
            deletingSingleSection: false,
            deleteSingleSection: (index) => {
                this.setState(prev => {
                    let update = prev
                    update.deletingSingleSection = true
                    update.showingDeleteSectionWarning = false
                    update.singleBlogSections[index].deleting = true
                    return update
                })
            },
            deletedSingleSection: (index) => {
                this.setState(prev => {
                    let update = prev
                    update.deletingSingleSection = false
                    update.singleBlogSections[index].deleting = false
                    update.singleBlogSections[index].deleted = true
                    return update
                })
            },
            // updateSection
            handleUpdateItem: (index, itemIndex, newContent, originalContent) => {
                if (newContent !== originalContent) {
                    this.setState(prev => {
                        let update = prev
                        update.singleBlogSections[index].items[itemIndex].content = newContent
                        update.singleBlogDetails.editingSingleItem = true
                        update.singleBlogDetails.editingSingleItemSectionIndex = index
                        update.singleBlogDetails.editingSingleItemItemIndex = itemIndex
                        return update
                    })
                } else {
                    this.setState(prev => {
                        let update = prev
                        update.singleBlogSections[index].items[itemIndex].content = newContent
                        update.singleBlogDetails.editingSingleItem = false
                        update.singleBlogDetails.editingSingleItemSectionIndex = null
                        update.singleBlogDetails.editingSingleItemItemIndex = null
                        return update
                    })
                } 
            },
            focused: false,
            handleFocus: (index) => {
                if (this.state.focused === false) {
                    if (this.state.currentItemIndex || this.state.currentItemIndex === 0) {
                        this.setState(prev => {
                            let update = prev
                            update.focused = true
                            update.optionsAnchor = false
                            update.singleBlogSections[index].items[this.state.currentItemIndex].disabled = false
                            return update
                        })
                        // setTimeout(() => {
                        //     textInput.current.focus()

                            // current

                        // }, 1000)
                    } else {
                        this.setState(prev => {
                            let update = prev
                            update.focused = true
                            update.sectionOptionsAnchor = false
                            update.singleBlogSections[this.state.currentSection].disabled = false
                            return update
                        })
                        // this.setState(prev => {
                        //     let update = prev
                        //     update.focused = false
                        // })
                    }
                }
            },
            optionsAnchor: false,
            currentItemIndex: null,
            currentSection: null,
            setOptionsAnchor: (anchor, itemIndex) => {
                this.setState({
                    anchor,
                    optionsAnchor: true,
                    currentItemIndex: itemIndex
                })
            },
            sectionOptionsAnchor: false,
            setSectionOptionsAnchor: (anchor, section) => {
                this.setState({
                    anchor,
                    sectionOptionsAnchor: true,
                    currentSection: section
                })
            },
            handleRevertItem: (index, currentItemIndex, originalContent) => {
                this.setState(prev => {
                    let update = prev
                    update.focused = false
                    update.singleBlogSections[index].items[currentItemIndex].content = originalContent
                    update.singleBlogSections[index].items[currentItemIndex].disabled = true
                    update.currentItemIndex = null
                    return update
                })
            },
            handleRevertSection: () => {
                this.setState(prev => {
                    let update = prev
                    update.focused = false
                    update.singleBlogSections[this.state.currentSection].content = update.singleBlogSections[this.state.currentSection].originalContent
                    update.singleBlogSections[this.state.currentSection].disabled = true
                    update.currentSection = null
                    return update
                })
            },
            showDeleteItemWarning: (index1, index2) => {
                disableScroll.on()
                this.state.clearAnchors()
                this.setState(prev => {
                    let update = prev
                    update.singleBlogSections[index1].items[index2].showingDeleteItemWarning = true
                    return update
                })
            },
            showingDeleteSectionWarning: false,
            showDeleteSectionWarning: () => {
                disableScroll.on()
                this.state.clearAnchors()
                this.setState(prev => {
                    let update = prev
                    update.singleBlogSections[this.state.currentSection].showingDeleteItemWarning = true
                    return update
                })
            },
            exitDeleteItemWarning: (index1, index2) => {
                disableScroll.off()
                this.setState(prev => {
                    let update = prev
                    update.singleBlogSections[index1].items[index2].showingDeleteItemWarning = false
                    return update
                })
            },
            exitDeleteSectionWarning: () => {
                disableScroll.off()
                this.setState(prev => {
                    let update = prev
                    update.singleBlogSections[this.state.currentSection].showingDeleteItemWarning = false
                    return update
                })
            },
            initiateDeleteItem: (index1, index2) => {
                disableScroll.off()
                this.setState(prev => {
                    let update = prev
                    update.singleBlogSections[index1].items[index2].showingDeleteItemWarning = false
                    update.singleBlogSections[index1].items[index2].deleting = true
                    return update
                })
            },
            initiateDeleteSection: () => {
                disableScroll.off()
                this.setState(prev => {
                    let update = prev
                    update.singleBlogSections[this.state.currentSection].showingDeleteItemWarning = false
                    update.singleBlogSections[this.state.currentSection].deleting = true
                    return update
                })
            },
            finishDeletingItem: (index1, index2) => {
                this.state.setNotification('Item deleted')
                    this.setState(prev => {
                        let update = prev
                        update.singleBlogSections[index1].items[index2].deleting = false
                        update.singleBlogSections[index1].items[index2].deleted = true
                        return update
                    })
            },
            finishDeletingSection: (type) => {
                // make uppercase
                this.state.setNotification(`${type} deleted`)
                    this.setState(prev => {
                        let update = prev
                        update.singleBlogSections[this.state.currentSection].deleting = false
                        update.singleBlogSections[this.state.currentSection].deleted = true
                        update.currentSection = null
                        return update
                    })
            },


            addingNewSectionToSingleBlog: {
                addingSection: false,
                newSectionType: null,
                feedback: false,
                currentOrder: null,
                sectionContent: '',
                updateSectionContent: (content) => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.sectionContent = content
                        return update
                    })
                },
                addNewSection: (currentOrder) => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.addingSection = true
                        update.focused = true
                        update.addingNewSectionToSingleBlog.currentOrder = currentOrder
                        return update
                    })
                },
                selectType: (type) => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.newSectionType = type
                        return update
                    })
                },
                cancelAddingSection: () => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.addingSection = false
                        update.addingNewSectionToSingleBlog.newSectionType = null
                        update.addingNewSectionToSingleBlog.currentOrder = null
                        update.addingNewSectionToSingleBlog.sectionContent = ''
                        update.addingNewSectionToSingleBlog.listContent = [{
                            // initial item
                            content: '',
                            type: 'item',
                            order: 0,
                            saving: false,
                            deleted: false
                        }]
                        update.focused = false
                        return update
                    })
                },
                createNewSection: () => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.feedback = true
                        update.focused = false
                        return update
                    })
                },
                createdNewSection: (message) => {
                    this.state.setNotification(`${message} Added to Blog!`)
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.feedback = false
                        update.addingNewSectionToSingleBlog.addingSection = false
                        update.addingNewSectionToSingleBlog.newSectionType = null
                        update.addingNewSectionToSingleBlog.sectionContent = ''
                        update.addingNewSectionToSingleBlog.currentOrder = null
                        return update
                    })
                },
                savingList: false,
                totalListItems: 1,
                listIndex: 1,
                listContent: [{
                    // initial item
                    content: '',
                    type: 'item',
                    order: 0,
                    saving: false,
                    deleted: false
                }],
                createNewListItem: () => {
                    let newItem = {
                        content: '',
                        type: 'item',
                        order: this.state.addingNewSectionToSingleBlog.listIndex,
                        saving: false,
                        deleted: false
                    }
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.listContent.push(newItem)
                        update.addingNewSectionToSingleBlog.listIndex++
                        update.addingNewSectionToSingleBlog.totalListItems++
                        return update
                    })
                },
                handleUpdateNewListItem: (index, content) => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.listContent[index].content = content
                        return update
                    })
                },
                deleteNewListItem: (index) => {
                    if (this.state.addingNewSectionToSingleBlog.totalListItems === 1) {
                        // revert to no longer being in add list mode
                        this.state.addingNewSectionToSingleBlog.handleExitList()
                    } else {
                        this.setState(prev => {
                            let update = prev
                            update.addingNewSectionToSingleBlog.listContent[index].deleted = true
                            update.addingNewSectionToSingleBlog.totalListItems--
                            return update
                        })
                    }
                },
                handleExitList: () => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.listContent = [{
                            content: '',
                            type: 'item',
                            order: 0,
                            saving: false,
                            deleted: false
                        }]
                        update.addingNewSectionToSingleBlog.totalListItems = 1
                        update.addingNewSectionToSingleBlog.listIndex = 1
                        update.addingNewSectionToSingleBlog.addingSection = false
                        update.addingNewSectionToSingleBlog.newSectionType = null
                        update.focused = false
                        return update
                    })
                },
                startSavingListItems: () => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.savingList = true
                        update.addingNewSectionToSingleBlog.listContent.forEach(item => {
                            item.saving = true
                        })
                        update.focused = false

                        return update
                    })
                },
                finishSavingListItems: (newListSection) => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.addingSection = false
                        update.addingNewSectionToSingleBlog.newSectionType = null

                        // pass in section here
                        update.singleBlogSections.push(newListSection)
                        // might have to sort the list here before returning it
                        return update
                    })
                },
                temporaryList: null,
                temporaryIndex: 0,
                setTemporaryList: (list) => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.temporaryList = list
                        return update
                    })
                },
                addItemToTemporaryList: (item) => {
                    this.setState(prev => {
                        let update = prev
                        update.addingNewSectionToSingleBlog.temporaryList.items.push(item)
                        update.addingNewSectionToSingleBlog.temporaryIndex++
                        return update
                    })
                },
                convertTemporaryList: () => {
                    this.setState(prev => {
                        let update = prev
                        update.singleBlogSections.push(this.state.addingNewSectionToSingleBlog.temporaryList)
                        return update
                    })
                },
                showTemporaryList: () => {
                    console.log(this.state.addingNewSectionToSingleBlog.temporaryList)
                }
                
            },


            highestOrder: 0,
            setHighestOrder: (highestOrder) => {
                this.setState({ 
                    highestOrder
                })
            },
            newTestIndex: -1,
            incrementTestIndex: () => {
                this.setState({
                    newTestIndex: this.state.newTestIndex + 1
                })
            },
            showingDeleteBlogWarning: false,
            toggleShowDeleteBlogWarning: () => {
                if (this.state.showingDeleteBlogWarning) {
                    disableScroll.off()
                } else {
                    disableScroll.on()
                }
                this.setState({
                    showingDeleteBlogWarning: !this.state.showingDeleteBlogWarning
                })
            },
            deletingBlog: false,
            deleteBlog: () => {
                this.setState({
                    deletingBlog: true
                })
            },
            deletedBlog: () => {
                disableScroll.off()
                this.state.exitSingleBlog()
                this.state.setNotification('Blog Deleted')
                this.setState({ 
                    deletingBlog: false,
                    showingDeleteBlogWarning: false,
                })
            },
            suggestions: {
                name: '',
                setName: (name) => {
                    this.setState(prev => {
                        let update = prev
                        update.suggestions.name = name
                        return update
                    })
                },
                contact: '',
                setContact: (contact) => {
                    this.setState(prev => {
                        let update = prev
                        update.suggestions.contact = contact
                        return update
                    })
                },
                suggestion: '',
                setSuggestion: (content) => {
                    if (content !== '') {
                        this.setState(prev => {
                            let update = prev
                            update.suggestions.suggestion = content
                            update.suggestions.error = false
                            return update
                        })
                    } else {
                        this.setState(prev => {
                            let update = prev
                            update.suggestions.suggestion = content
                            return update
                        })
                    }
                },
                showingSuggestionBackdop: false,
                showingSuggestionContent: false,
                toggleSuggestionBackdrop: () => {
                    if (this.state.suggestions.showingSuggestionBackdop) {
                        this.setState(prev => {
                            let update = prev
                            update.suggestions.showingSuggestionBackdop = false
                            return update
                        })
                        setTimeout(() => {
                            this.setState(prev => {
                                let update = prev
                                update.suggestions.showingSuggestionContent = false
                                update.suggestions.error = false
                                update.suggestions.suggestion = ''
                                update.suggestions.contact = ''
                                update.suggestions.name = ''
                                return update
                            })
                        }, 501)
                    } else {
                        this.setState(prev => {
                            let update = prev
                            update.suggestions.showingSuggestionBackdop = true
                            update.suggestions.showingSuggestionContent = true
                            return update
                        })
                    }
                    // setTimeout(() => {
                    //     this.setState(prev => {
                    //         let update = prev
                    //         update.suggestions.focusName = true
                    //         return update
                    //     })
                    // }, 500)
                },
                sendingSuggestion: false,
                sentSuggestion: false,
                sendSuggestion: () => {
                    this.setState(prev => {
                        let update = prev
                        update.suggestions.showingSuggestionBackdop = false
                        update.suggestions.error = false
                        return update
                    })
                    setTimeout(() => {
                        this.setState(prev => {
                            let update = prev
                            update.suggestions.showingSuggestionContent = false
                            update.suggestions.sendingSuggestion = true
                            return update
                        })
                    }, 300)
                },
                finishSendingSuggestion: () => {
                    setTimeout(() => {
                        this.setState(prev => {
                            let update = prev
                            update.suggestions.sendingSuggestion = false
                            update.suggestions.sentSuggestion = true
                            update.suggestions.name = ''
                            update.suggestions.contact = ''
                            update.suggestions.suggestion = ''
                            return update
                        })
                    }, 350)
                },
                error: false,
                setError: () => {
                    this.setState(prev => {
                        let update = prev
                            update.suggestions.error = true
                            return update
                    })
                }
            },
            testSectionDelete: (sectionID) => {
                if (this.state.itemToBeDeleted) {
                    this.state.deleteSectionListItems(this.state.sectionToBeDeleted, this.state.itemToBeDeleted)
                } else {
                    this.setState(prev => {
                        let update = prev
                        update.anchor = null
                        update.sectionToBeDeleted = null
                        update.showingDeleteConfirmation = false
    
                        const sectionIndex = update.addedContent.findIndex(section => section.sectionUUID === sectionID)
                        update.addedContent[sectionIndex].included = false
                        update.totalSections--
                        return update
                    })
                }
            },
            changeLog: {
                viewingChangeLog: false,
                viewChangeLog: () => {
                    this.setState(prev => {
                        let update = prev
                        update.changeLog.viewingChangeLog = true
                        return update
                    })
                },
                exitChangeLog: () => {
                    this.setState(prev => {
                        let update = prev
                        update.changeLog.viewingChangeLog = false
                        update.changeLog.showingUpcomingFeatures = false
                        return update
                    })
                },
                showingUpcomingFeatures: false,
                toggleShowingUpcomingFeatures: () => {
                    this.setState(prev => {
                        let update = prev
                        update.changeLog.showingUpcomingFeatures = !this.state.changeLog.showingUpcomingFeatures
                        return update
                    })
                }

            }
            


            // exitSingleBlog exitWriting
        }

        
    }
    render() {
        return (
            <BlogContext.Provider value={this.state}>
                {this.props.children}
            </BlogContext.Provider>
        )
    }
}