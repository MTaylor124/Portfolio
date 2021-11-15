import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField'
import { BlogContext } from '../../../../BlogContext'

export default function Header() {

    let {
        header,
        handleChange
    } = useContext(BlogContext)

    const textFieldStyle = {
        marginTop: '10px',
        marginBottom: '10px'
    }
    let valueCheck
    if (header) {
        valueCheck = header
    } else {
        valueCheck = ''
    }
    return (
        <TextField
            autoFocus
            name='header'
            label='Header'
            variant='outlined'
            fullWidth
            value={valueCheck}
            style={textFieldStyle}
            onChange={e => handleChange(e)}
            />
    )
}