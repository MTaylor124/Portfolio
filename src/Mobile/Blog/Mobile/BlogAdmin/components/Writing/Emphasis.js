import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField'
import { BlogContext } from '../../../../BlogContext'

export default function Header() {

    let {
        emphasis,
        handleChange
    } = useContext(BlogContext)

    const textFieldStyle = {
        marginTop: '10px',
        marginBottom: '10px'
    }
    let valueCheck
    if (emphasis) {
        valueCheck = emphasis
    } else {
        valueCheck = ''
    }
    return (
        <TextField
            autoFocus
            name='emphasis'
            label='Emphasis'
            variant='outlined'
            fullWidth
            value={valueCheck}
            style={textFieldStyle}
            onChange={e => handleChange(e)}
            />
    )
}