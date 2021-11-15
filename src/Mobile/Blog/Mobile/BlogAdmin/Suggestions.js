import React, {useContext} from 'react'
import {BlogContext} from '../../BlogContext'

import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function Suggestions() {
    let {
        suggestions
    } = useContext(BlogContext)

    let {
        // focusName,
        name,
        contact,
        suggestion,
        setName,
        setContact,
        setSuggestion,
        error,
        setError,

        sendingSuggestion,
        sentSuggestion,
        sendSuggestion,
        finishSendingSuggestion,

        showingSuggestionBackdop,
        showingSuggestionContent,
        toggleSuggestionBackdrop
    } = suggestions

    function handleSubmitSuggestion() {
        if (suggestion) {
            sendSuggestion()
    
            let today = new Date()
            let day = today.getDate().toString()
            let month = (today.getMonth() + 1).toString()
            let year = today.getFullYear().toString()
            let todaysDate = month.concat('-', day,'-',year)
    
            // if no suggestion, handle it here
            firebase.firestore().collection('Suggestions')
            .add({
                name: name,
                contact: contact,
                suggestion: suggestion,
                date: todaysDate
            })
            .then(() => {
                setTimeout(() => {
                    finishSendingSuggestion()
                }, 700)
            })
            .catch(e => {
                // make actual catch logic for once
                console.error(e.code)
            })
        } else {
            setError()
        }
    }

    const suggestionButtonStyle = {
        marginTop: '40px',
        textTransform: 'none',
        padding: 0,
        fontSize: '1.15rem'
    }
    const backdropStyle = {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(12, 95, 95, 0.45)',
        zIndex: '0234702809832098',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
    const closeButtonStyle = {
        padding: 0,
        minHeight: 0,
        minWidth: 0,
        texTTransform: 'none'
    }
    const closeIconStyle = {
        fontSize: '2rem',
        padding: '5px',
        marginLeft: '50px',
        marginRight: '15px'
    }
    const submitButtonStyle = {
        marginTop: '10px',
        marginBottom: '10px',
        textTransform: 'none'
    }
    const textfieldStyle = {
        marginTop: '10px',
        width: '90vw'
    }
    
    let backdropContent, labelCheck
    if (error) {
        labelCheck = 'Please enter a suggestion or feedback'
    } else {
        labelCheck = 'Suggestions / Feedback'
    }
    if (showingSuggestionContent) {
        backdropContent = (
            <div className='m-blog-suggestion-container'>
                <div className="m-blog-suggestion-header">
                    <div className="m-blog-suggestion-header-item">
                        Suggestions/Feedback
                    </div>
                        <Button
                            style={closeButtonStyle}
                            onClick={() => toggleSuggestionBackdrop() }>
                            <CloseRoundedIcon color='primary' style={closeIconStyle}/>
                        </Button>
                </div>
                <div className="m-blog-suggestion-name">
                    <TextField
                        style={textfieldStyle}
                        color='primary'
                        variant='outlined'
                        label='Name'
                        placeholder='Your Name (optional)'
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="m-blog-suggestion-contact">
                    <TextField
                        style={textfieldStyle}
                        color='primary'
                        variant='outlined'
                        label='Contact'
                        placeholder='Contact Info (optional)'
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}/>
                </div>
                <div className="m-blog-suggestion-main">
                    <TextField
                        style={textfieldStyle}
                        color='primary'
                        variant='outlined'
                        label={labelCheck}
                        error={error}
                        value={suggestion}
                        multiline
                        rowsMax={3}
                        onChange={(e) => setSuggestion(e.target.value)}/>
                </div>
                <div className="m-blog-suggestion-submit">
                    <Button
                        style={submitButtonStyle}
                        color='primary'
                        variant='contained'
                        onClick={() => handleSubmitSuggestion() }>
                        Submit
                    </Button>
                </div>
            </div>
        )
    } else {
        backdropContent = (
            <div>

            </div>
        )
    }
    
    if (sendingSuggestion) {
        return (
            <CircularProgress style={{ marginTop: '50px' }} color='primary' size={35}/>
        )
    } else if (sentSuggestion) {
        return (
            <div className='m-blog-suggestion-thank-you'>
                Thank you! 
            </div>
        )
    } else {
        return (
            <div className='m-blog-primary-color'>
                <Button
                    color='inherit'
                    style={suggestionButtonStyle}
                    onClick={() => toggleSuggestionBackdrop() }>
                        Suggestions / Feedback
                </Button>
                <Backdrop
                    transitionDuration={300}
                    style={backdropStyle}
                    open={showingSuggestionBackdop}>
                        {backdropContent}
                </Backdrop>
            </div>
        )
    }
}
