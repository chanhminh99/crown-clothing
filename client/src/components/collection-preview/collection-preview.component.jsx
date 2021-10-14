import React from 'react'

import { useLocation, useHistory } from 'react-router-dom'

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items, routeName}) => {
    const { pathname } = useLocation()
    const history = useHistory()

    return (
        <div className='collection-preview'>
            <h1 className='title' onClick={() => history.push(`${pathname}/${routeName}`)}>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((_, idx) => idx < 4).map((item) => {
                    return <CollectionItem key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default CollectionPreview