import React from 'react'

import Item from './Item'


export default function List({items, sectionID, index}) {
    
    return (
        <div className='m-bvs-section-container'>
            {items.map(item => {
                return (
                    <Item 
                        key={item.docRef}
                        itemID={item.docRef}
                        sectionID={sectionID}
                        index={index}
                        newItemIndex={item.testItemIndex}
                        ownIndex={item.ownIndex}
                    />
                )
            })}
        </div>
    )
}
