import React, {useContext} from 'react'

import Button from '@material-ui/core/Button'
import { BlogContext } from '../../../../BlogContext'

export default function EditPanel() {

    let {
        toggleAddHeader,
        toggleAddBody,
        toggleAddEmphasis,
        toggleAddList,
        currentlyAdding,
        // cancelAddingSection
    } = useContext(BlogContext)

    const panelButtonStyle = {
        textTransform: 'none',
        fontSize: '0.95rem',
        padding: '0',
        minWidth: '22vw',
        minHeight: '0'
    }

    let headerCheck, 
        bodyCheck, 
        emphasisCheck, 
        listCheck, 
        disableHeader, 
        disableBody, 
        disableEmphasis, 
        disableList

    if (currentlyAdding === 'header') {
        disableHeader = false
        disableBody = true
        disableEmphasis = true
        disableList = true
        
        headerCheck = 'Cancel'
        bodyCheck = 'Body'
        listCheck = 'List'
        emphasisCheck = 'Emphasis'
    } else if (currentlyAdding === 'body') {
        disableHeader = true
        disableBody = false
        disableEmphasis = true
        disableList = true

        bodyCheck = 'Cancel'
        headerCheck = 'Header'
        listCheck = 'List'
        emphasisCheck = 'Emphasis'
    } else if (currentlyAdding === 'emphasis') {
        emphasisCheck = 'Cancel'
        bodyCheck = 'Body'
        headerCheck = 'Header'
        listCheck = 'List'

        disableHeader = true
        disableBody = true
        disableEmphasis = false
        disableList = true
    } else if (currentlyAdding === 'list') {
        emphasisCheck = 'Emphasis'
        bodyCheck = 'Body'
        headerCheck = 'Header'
        listCheck = 'Cancel'

        disableHeader = true
        disableBody = true
        disableEmphasis = true
        disableList = false
    } else {
        emphasisCheck = 'Emphasis'
        bodyCheck = 'Body'
        headerCheck = 'Header'
        listCheck = 'List'

        disableHeader = false
        disableBody = false
        disableEmphasis = false
        disableList = false
    }

    if (currentlyAdding) {
        return (
            <div></div>
        )
    } else {
        return (
            <div className="m-blog-writing-edit-panel">
                <Button
                    disabled={disableHeader}
                    variant='contained'
                    color='primary'
                    style={panelButtonStyle}
                    onClick={() => toggleAddHeader() }>
                        <div className="m-blog-writing-panel-button">
                            {headerCheck}
                        </div>
                </Button>
                <Button
                    disabled={disableBody}
                    variant='contained'
                    color='primary'
                    style={panelButtonStyle}
                    onClick={() => toggleAddBody()}>
                        <div className="m-blog-writing-panel-button">
                            {bodyCheck}
                        </div>
                </Button>
                <Button
                    disabled={disableEmphasis}
                    variant='contained'
                    color='primary'
                    style={panelButtonStyle}
                    onClick={() => toggleAddEmphasis()}>
                        <div className="m-blog-writing-panel-button">
                            {emphasisCheck}
                        </div>
                </Button>
                <Button
                    disabled={disableList}
                    variant='contained'
                    color='primary'
                    style={panelButtonStyle}
                    onClick={() => toggleAddList()}>
                        <div className="m-blog-writing-panel-button">
                            {listCheck}
                        </div>
                </Button>
            </div>
        )
    }
}