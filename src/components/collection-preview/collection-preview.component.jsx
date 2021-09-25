import React from 'react'

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((_, idx) => idx < 4).map(({id, ...restItemProps}) => {
                    return <CollectionItem key={id} {...restItemProps} />
                })}
            </div>
        </div>
    )
}

export default CollectionPreview