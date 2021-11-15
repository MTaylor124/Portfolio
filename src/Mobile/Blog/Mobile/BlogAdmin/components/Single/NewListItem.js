import React, {useContext} from 'react'
import { BlogContext } from '../../../../BlogContext'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import { CircularProgress } from '@material-ui/core'

export default function NewListItem({order}) {
    let {
        addingNewSectionToSingleBlog,
    } = useContext(BlogContext)

    let {
        handleUpdateNewListItem,
        deleteNewListItem
    } = addingNewSectionToSingleBlog

    let {
        content,
        saving,
        deleted
    } = addingNewSectionToSingleBlog.listContent[order]

    const textFieldStyle = {
        marginTop: '12px'
    }
    const deleteButtonStyle = {
        padding: '0',
        minHeight: 0,
        minWidth: 0
    }
    const deleteIconStyle = {
        padding: '0',
        minHeight: 0,
        minWidth: 0,
        fontSize: '32px'
    }
    const spinnerStyle = {
        padding: 0,
        minHeight: 0,
        minWidth: 0
    }

    let feedback
    if (saving) {
        feedback = (
            <CircularProgress color='primary' style={spinnerStyle} size={20}/>
        )
    } else {
        feedback = (
            <Button 
                disabled={saving}
                style={deleteButtonStyle}
                onClick={() => deleteNewListItem(order)}>
                <CloseIcon
                    color='primary'
                    style={deleteIconStyle}/>
            </Button>
        )
    }

    if (deleted) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div className='m-bvs-new-list-item-container'>
                <TextField 
                    disabled={saving}
                    value={content}
                    style={textFieldStyle}
                    variant='outlined'
                    color='primary'
                    label='New List Item'
                    fullWidth
                    autoFocus
                    onChange={e => handleUpdateNewListItem(order, e.target.value)}
                />
                <div className="m-bvs-new-list-item-options">
                    {feedback}
                </div>
            </div>
        )
    }
}
