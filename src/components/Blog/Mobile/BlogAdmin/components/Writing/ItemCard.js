import React, { useContext } from 'react'
import { BlogContext } from './../../../../BlogContext'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import TextField from '@material-ui/core/TextField'

export default function ItemCard(props) {

    let {
        handleItemChange
    } = useContext(BlogContext)

    let {
        order
    } = props

    const iconStyle = {
        marginRight: '5px'
    }
    
    return (
        <div className='m-blog-list-add-additional-item-container'>
            <FiberManualRecordIcon style={iconStyle}/>
            <TextField
                autoComplete='off'
                name={`listItem${order}`}
                fullWidth
                value={order}
                label={`List Item ${order}`}
                variant='outlined'
                onChange={e => handleItemChange(e)}/>
        </div>

    )
}