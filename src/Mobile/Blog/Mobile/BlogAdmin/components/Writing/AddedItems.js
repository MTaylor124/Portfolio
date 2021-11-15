import React, { useContext } from 'react'
import { BlogContext } from './../../../../BlogContext'

import ItemCard from './ItemCard'

export default function AddedItems() {

    let {
        list
    } = useContext(BlogContext)
    
    return (
        <div className='m-full-width'>
            {list.map(item => {
                return (
                    <ItemCard
                        key={Math.random()} 
                        order={item.order}
                    />
                )}
            )}
        </div>
    )
}