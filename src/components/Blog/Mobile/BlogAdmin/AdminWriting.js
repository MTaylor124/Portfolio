import React, {useContext} from 'react'
import {BlogContext} from './../../BlogContext'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import ExitWarning from './components/Writing/ExitWarning'
import AddSection from './components/Writing/AddSection'
import EditPanel from './components/Writing/EditPanel'
import EditContent from './components/Writing/EditContent'
import AddedSections from './components/Writing/AddedSections'
import Save from './components/Writing/Save'

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'


// import { v4 as uuidv4 } from 'uuid'

export default function AdminWriting() {

    let {
        title,
        handleChange,
        // checkContext,
        addedContent,
        exitWriting,
        showExitWarning
    } = useContext(BlogContext)

    function handleExit() {
        if (title || addedContent.length > 0) {
            showExitWarning()
        } else {
            exitWriting()
        }
    }

    let titleCheck
    if (title) {
        titleCheck = title
    } else {
        titleCheck = ''
    }
    const textFieldStyle = {
        marginTop: '20px',
        width: '100%',
        // marginRight: '15%'
    }
    const exitButtonStyle = {
        fontSize: '1.1rem',
        padding: '0',
        minHeight: '0',
        minWidth: '0'
    }
    return (
        <div className='m-blog-writing-container'>
            <div className="m-blog-writing-header">
                <div className="m-blog-writing-header-brand">
                    Write New Post
                </div>
                <Button
                    style={exitButtonStyle}
                    onClick={() => handleExit()}>
                    <ArrowBackIosRoundedIcon color='primary'/>
                    <div className="m-blog-back-button-style2">
                        Back
                    </div> 
                </Button>
            </div>
            <Save />

            {/* <Button
                style={{marginTop: '20px', marginBottom: '20px'}}
                onClick={() => checkContext() }>
                Context
            </Button>

            <Button
                style={{marginTop: '20px', marginBottom: '20px'}}
                onClick={() => console.log(uuidv4()) }>
                uuid?
            </Button> */}

            <TextField 
                autoFocus
                label='Title'
                name='title'
                type='text'
                autoComplete='off'
                value={titleCheck}
                variant='outlined'
                style={textFieldStyle}
                fullWidth
                onChange={e => handleChange(e)} />
            <AddedSections />
            <EditPanel />
            <AddSection />
            <EditContent />
            <ExitWarning />
            <div className="m-scroll-fix"></div>
        </div>
    )
}