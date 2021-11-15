import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

export default function ContentCard(props) {

    let {
        order,
        type,
        content,
        number,
        sectionUUID
    } = props
    
    let {
        handleSectionUpdate,
        // deleteSection,
        handleListUpdate,
        deleteSectionListItems,
        clearAnchors,
        anchor,
        showingDeleteConfirmation,
        setDeleteAnchor,

        sectionToBeDeleted,
        itemToBeDeleted,
        testSectionDelete
    } = useContext(BlogContext)


    function handleSectionChange(e, listorder) {
        if (type !== 'list') {
            let index = parseInt(e.target.name.match(/\d+$/)[0], 10)
            let content = e.target.value
            handleSectionUpdate(index, content)
        } else {
            let content = e.target.value
            let index = listorder
            handleListUpdate(index, content, order)
        }

    }
    function handleListItemDelete() {
        clearAnchors()
        deleteSectionListItems(sectionToBeDeleted, itemToBeDeleted)
    }

    const menuStyle = {
        // backgroundColor: 'red'
    }
    const itemStyle = {
        color: 'white',
        backgroundColor: 'red'
    }
    const textFieldStyle = {
        marginTop: '10px',
        width: '90%'
    }
    const deleteButton = {
        padding: '0',
        minWidth: '0',
        marginTop: '8px'
    }
    const deleteTrashCan = {
        // color: 'red',
        fontSize: '2.5rem',
        padding: '3px',
    }
    if (type === 'header') {
        return (
            <div key={`${order}-${type}`} className='m-full-width m-blog-list-section'>
                <TextField
                    autoComplete='header'
                    name={`Order${order}`}
                    variant='outlined'
                    fullWidth
                    label={`Header`}
                    style={textFieldStyle}
                    value={content}
                    onChange={e => handleSectionChange(e)}
                    />
                <Button
                    style={deleteButton}
                    onClick={(e) => {
                        setDeleteAnchor(e.currentTarget, sectionUUID)
                    }}>
                    <DeleteIcon style={deleteTrashCan} color='primary'/>
                </Button>
                <Menu
                    style={menuStyle}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    id="view-admin-menu"
                    anchorEl={anchor}
                    keepMounted
                    MenuListProps={{ disablePadding: true }}
                    open={showingDeleteConfirmation}
                    onClose={() => {
                        clearAnchors()
                    }}>
                    <MenuItem 
                        name='test'
                        style={itemStyle}
                        onClick={(e) => testSectionDelete(sectionToBeDeleted) }>
                            <div className='m-ac-header-item'>
                                Delete
                            </div>
                    </MenuItem>
                </Menu>
            </div>      
        )
    } else if (type === 'body') {
        return (
            <div key={`${order}-${type}`} className='m-full-width m-blog-list-section'>
                <TextField
                    autoComplete='off'
                    variant='outlined'
                    fullWidth
                    name={`Order${order}`}
                    label={`Body`}
                    rowsMax={5}
                    style={textFieldStyle}
                    value={content}
                    multiline
                    onChange={e => handleSectionChange(e)}/>
                <Button
                    style={deleteButton}
                    onClick={(e) => {
                        setDeleteAnchor(e.currentTarget, sectionUUID)
                    }}>
                    <DeleteIcon style={deleteTrashCan} color='primary'/>
                </Button>
                <Menu
                    style={menuStyle}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    id="view-admin-menu"
                    anchorEl={anchor}
                    keepMounted
                    MenuListProps={{ disablePadding: true }}
                    open={showingDeleteConfirmation}
                    onClose={() => {
                        clearAnchors()
                    }}>
                    <MenuItem 
                        name='test'
                        style={itemStyle}
                        onClick={(e) => testSectionDelete(sectionToBeDeleted) }>
                            <div className='m-ac-header-item'>
                                Delete
                            </div>
                    </MenuItem>
                </Menu>
            </div>   
        )
    } else if (type === 'list') {
        let listSection 
        listSection = content.map(item => {
            if (item.included) {
            let listorder = item.listOrder
            return (
                <div key={`${item.listOrder}-${type}-${order}`} className='m-full-width m-blog-list-section'>
                    <TextField
                        autoComplete='off'
                        variant='outlined'
                        fullWidth
                        name={`${item.listOrder}`}
                        label={`List ${number} Item`}
                        style={textFieldStyle}
                        defaultValue={item.content}
                        onChange={e => handleSectionChange(e, listorder)}
                        />
                    <Button
                        style={deleteButton}
                        onClick={(e) => setDeleteAnchor(e.currentTarget, sectionUUID, item.itemUUID)}>
                        <DeleteIcon style={deleteTrashCan} color='primary'/>
                    </Button>
                    <Menu
                        style={menuStyle}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                        id="view-admin-menu"
                        anchorEl={anchor}
                        keepMounted
                        MenuListProps={{ disablePadding: true }}
                        open={showingDeleteConfirmation}
                        onClose={() => {
                            clearAnchors()
                        }}>
                    <MenuItem 
                        style={itemStyle}
                        onClick={() => handleListItemDelete() }>
                            <div className='m-ac-header-item'>
                                Delete
                            </div>
                    </MenuItem>
                </Menu>
                </div>
                )
            } else {
                return (
                    <div key={Math.random()}>

                    </div>
                )
            }
        })
        return (
            <div key={`-${type}-${order}`} className='m-full-width'>
                {listSection}
            </div>
        )
        
    } else if (type === 'emphasis') {
        return (
            <div key={`${order}-${type}`} className='m-full-width m-blog-list-section'>
                <TextField
                    name={`Order${order}`}
                    variant='outlined'
                    fullWidth
                    label={`Emphasis`}
                    style={textFieldStyle}
                    value={content}
                    onChange={e => handleSectionChange(e)}
                    />
                <Button
                    style={deleteButton}
                    onClick={(e) => setDeleteAnchor(e.currentTarget, sectionUUID) }>
                    <DeleteIcon style={deleteTrashCan} color='primary'/>
                </Button>
                <Menu
                    style={menuStyle}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    id="view-admin-menu"
                    anchorEl={anchor}
                    keepMounted
                    MenuListProps={{ disablePadding: true }}
                    open={showingDeleteConfirmation}
                    onClose={() => {
                        clearAnchors()
                    }}>
                    <MenuItem 
                        name='test'
                        style={itemStyle}
                        onClick={(e) => testSectionDelete(sectionToBeDeleted) }>
                            <div className='m-ac-header-item'>
                                Delete
                            </div>
                    </MenuItem>
                </Menu> 
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}