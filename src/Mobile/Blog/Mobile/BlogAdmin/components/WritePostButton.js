import React, {useContext} from 'react'

import Button from '@material-ui/core/Button'
import {BlogContext} from '../../../BlogContext'

export default function WritePostButton() {

    let {
        startWriting,
        loadingBlogs
    } = useContext(BlogContext)

    const buttonStyle = {
        padding: '0',
        marginBottom: '10px',
        height: '60px',
        width: '80vw',
        textTransform: 'none',
        fontSize: '2rem',
        borderRadius: '10px'
    }

    return (
        <Button
            disabled={loadingBlogs}
            color='primary'
            variant='contained'
            style={buttonStyle}
            onClick={() => startWriting() }>
                Write Blog Post
        </Button>
    )
}