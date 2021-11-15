import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import Button from '@material-ui/core/Button'

export default function ChangeLog() {

    let {
        changeLog
    } = useContext(BlogContext)

    let {
        viewChangeLog
    } = changeLog

    const changeLogButton = {
        marginTop: '5px',
        padding: 0,
        textTransform: 'none',
        fontSize: '1.15rem'
    }
    return (
        <Button 
            style={changeLogButton}
            color='primary'
            onClick={() => viewChangeLog() }>
            Changelog
        </Button>
    )
}
