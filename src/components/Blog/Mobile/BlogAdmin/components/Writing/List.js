import React, {useContext} from 'react'
import { BlogContext } from './../../../../BlogContext'

import Button from '@material-ui/core/Button'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import TextField from '@material-ui/core/TextField'
import CloseIcon from '@material-ui/icons/Close'

export default function List() {

    let {
        updateListItem,
        handleDeleteItem,
        list
    } = useContext(BlogContext)

    const iconStyle = {
        marginRight: '5px'
    }
    const closeStyle = {
        color: 'teal',
        fontSize: '2.5rem'
    }

    function handleUpdate (e) {
        let index = parseInt(e.target.name.match(/\d+$/)[0], 10)
        let content = e.target.value
        updateListItem(index, content)

    }
    let itemsContent = list.map(item => {
        let itemName = `listItem${item.listOrder}`
        let valuecheck
        if (item !== undefined) {
            valuecheck = list[item.listOrder].content
        } else {
            valuecheck = ''
        }
        if (item.included === true) {
            return (
                <div className="m-blog-list-add-item-container" key={`name${item.listOrder}`}>
                    <FiberManualRecordIcon style={iconStyle}/>
                    <TextField 
                        type='text'
                        label='List Item'
                        variant='outlined'
                        autoFocus
                        fullWidth
                        name={itemName}
                        value={valuecheck}
                        onChange={e => handleUpdate(e)}/>
                    <Button
                        onClick={() => handleDeleteItem(item.listOrder)}>
                        <CloseIcon style={closeStyle}/>
                    </Button>
                </div>
            )
        } else {
            return (
                <div key={Math.random()}></div>
            )
        }
    })
    return (
        <div className='m-blog-list-add-container'>
            {itemsContent}
        </div>
    )
}