import React from 'react'

import Button from '@material-ui/core/Button'

export default function GuestView() {
    const buttonStyle = {
        padding: '0',
        marginBottom: '10px',
        height: '60px',
        textTransform: 'none',
        fontSize: '1.3rem',
        borderRadius: '10px',
        width: '80vw'
    }
    return (
        <Button
            disabled={true}
            style={buttonStyle}
            variant='contained'
            color='primary'
            >
            Guest View (coming soon)
        </Button>
    )
}
