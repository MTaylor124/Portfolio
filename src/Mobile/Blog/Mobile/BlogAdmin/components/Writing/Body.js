import React, {useContext} from 'react'
import { BlogContext } from '../../../../BlogContext'
import TextField from '@material-ui/core/TextField'

export default function Header() {

    let {
        body,
        handleChange
    } = useContext(BlogContext)

    const textFieldStyle = {
        marginTop: '10px',
        marginBottom: '10px'
    }
    let valueCheck
    if (body) {
        valueCheck = body
    } else {
        valueCheck = ''
    }
    return (
        <TextField
            // onKeyPress={(e) => {
            //     if (e.key === 'Enter') {
            //         handleFilterBySection()
            //     e.preventDefault();
            //     }
            // }}
            autoFocus
            name='body'
            label='Body'
            variant='outlined'
            fullWidth
            multiline
            rowsMax={5}
            value={valueCheck}
            style={textFieldStyle}
            onChange={e => handleChange(e)}
            />
    )
}