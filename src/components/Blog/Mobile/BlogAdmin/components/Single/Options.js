import React, {useContext} from 'react'
import { BlogContext } from '../../../../BlogContext'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CircularProgress from '@material-ui/core/CircularProgress'
import Backdrop from '@material-ui/core/Backdrop'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function TestForIndex({index, ownIndex}) {
    
    let {
        currentItemIndex,
        singleBlogSections,
        setOptionsAnchor,
        optionsAnchor,
        anchor,
        clearAnchors,
        handleFocus,
        showDeleteItemWarning,
        exitDeleteItemWarning,
        initiateDeleteItem,
        finishDeletingItem,
        blogID,
        setNotification,
        focused
    } = useContext(BlogContext)

    let {
        disabled,
        deleting,
        updating,
        showingDeleteItemWarning,
    } = singleBlogSections[index].items[ownIndex]

    function handleDeleteItem(index1, index2) {
        initiateDeleteItem(index1, index2)

        firebase.firestore().collection("Blog").doc(blogID).collection('sections').doc(singleBlogSections[index1].docRef).collection('items').doc(singleBlogSections[index1].items[index2].docRef)
        .delete()
        .then(() => {
            firebase.firestore().collection("Blog").doc(blogID).collection('sections').doc(singleBlogSections[index1].docRef).collection('items')
            .get()
            .then(snapshot => {
                if (snapshot.size === 0) {
                    firebase.firestore().collection("Blog").doc(blogID).collection('sections').doc(singleBlogSections[index1].docRef)
                    .delete()
                    .catch(e => {
                        console.error(e.code)
                    })
                }
            })
            .catch(e => {
                console.error(e.code)
            })
        })
        .then(() => {
            setTimeout(() => {
                setNotification('List Item deleted!')
                finishDeletingItem(index1, index2)
            }, 500)
        })
        .catch(e => {
            console.error(e.code)
        })
    }

    const optionsStyle = {
        padding: '0',
        minWidth: '0'
    }
    const menuStyle = {
        backgroundcolor: 'rgba(0,0,0,0)'
    }
    const itemStyle = {
        backgroundColor: 'rgba(0,0,0,0)',
        padding: '0',
        minHeight: '0'
    }
    const deleteItemStyle = {
        backgroundColor: 'red',
        color: 'white',
        padding: '0',
        minHeight: '0'
    }


    // 

    const deleteWarningStyle = {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(12, 95, 95, 0.45)',
        zIndex: '0234702809832098',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
    const deleteButtonStyle = {
        marginRight: '30px',
        background: 'red',
        color: 'white',
        textTransform: 'none'
    }
    const closeWindowButton = {
        padding: 0,
        minHeight: 0,
        minWidth: 0,
        marginRight: '10px',
    }
    const closeWindowIcon = {
        fontSize: '2.5rem',
        padding: '3px',
        marginLeft: '50px',
        marginBottom: '4px'
    }

    if (disabled && !deleting && !updating && !showingDeleteItemWarning) {
        return (
            <div className='m-bvs-card-options-container'>
                <Button
                    disabled={focused}
                    style={optionsStyle}
                    onClick={(e) => setOptionsAnchor(e.currentTarget, ownIndex) }>
                <MoreVertIcon color='primary'/>
                </Button>
                <Menu
                    style={menuStyle}
                    anchorEl={anchor}
                    keepMounted
                    MenuListProps={{ disablePadding: true }}
                    open={optionsAnchor}
                    onClose={() => clearAnchors() }>
                    <MenuItem 
                        
                        style={itemStyle}
                        onClick={() => {
                            // setTimeout(() => {
                            //     textInput.current.focus()
                            // }, 1000)
                            handleFocus(index)
                        }}>
                            <div className='m-bvs-options-edit m-bvs-options-item'>
                                Edit
                            </div>
                    </MenuItem>
                    <MenuItem 
                        
                        style={deleteItemStyle}
                        onClick={() => {
                            // setTimeout(() => {
                            //     textInput.current.focus()
                            // }, 1000)
                            // handleFocus(index)
                            // console.log('delete')
                            showDeleteItemWarning(index, currentItemIndex)
                        }}>
                            <div className='m-bvs-options-delete m-bvs-options-item'>
                                Delete
                            </div>
                    </MenuItem>
                </Menu>
        </div>
        )
    } else if (disabled && !deleting && updating && !showingDeleteItemWarning) {
        return (
            <div className='m-bvs-card-options-container'>
                <CircularProgress color='primary' size={20} />
            </div>
        )
    } else if (showingDeleteItemWarning && disabled && !updating && !deleting) {
        return (
            <div className='m-bvs-card-options-container'>
                <Backdrop
                    style={deleteWarningStyle}
                    open={showingDeleteItemWarning}
                    transitionDuration={400}>
                        <div className="m-bvs-card-delete-warning-container">
                            <div className="m-bvs-card-delete-warning-header">
                                <div>
                                    
                                </div>
                                <Button
                                    style={closeWindowButton}
                                    onClick={() => exitDeleteItemWarning(index, ownIndex)}>
                                    <CloseRoundedIcon color='primary' style={closeWindowIcon}/>
                                </Button>
                            </div>
                            <div className="m-bvs-card-delete-warning-body">
                                Are you sure you want to delete this List Item?
                            </div>
                            <div className="m-bvs-card-delete-warning-options">
                                <Button
                                    style={deleteButtonStyle}
                                    variant='contained'
                                    onClick={() => handleDeleteItem(index, ownIndex)}>
                                    Delete
                                </Button>
                                <Button
                                    variant='contained'
                                    color='default'
                                    style={{textTransform: 'none'}}
                                    onClick={() => exitDeleteItemWarning(index, ownIndex)}>
                                    Cancel
                                </Button>
                            </div>
                        </div>







                </Backdrop>
            </div>
        )
    } else if (disabled && deleting && !updating && !showingDeleteItemWarning) {
        // deleting mode
        return (
            <div className='m-bvs-card-options-container'>
                <CircularProgress style={{ color: 'red' }} size={20} />
            </div>
        )
    } else {
        // edit mode
        return (
            <div>

            </div>
        )
    }
}
