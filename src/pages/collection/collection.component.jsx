import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectCollection } from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection-item/collection-item.component'

import {
    CollectionPageContainer,
    CollectionPageTitle,
    CollectionPageItemsWrapper
} from './collection.styles'

const CollectionPage = () => {
    const {collectionId} = useParams()

    const collection = useSelector(selectCollection(collectionId))

    const {title, items} = collection

    return (
        <CollectionPageContainer>
            <CollectionPageTitle>{title}</CollectionPageTitle>
            <CollectionPageItemsWrapper>
                {
                    items.map((item) => <CollectionItem key={item.id} item={item}  />)
                }
            </CollectionPageItemsWrapper>
        </CollectionPageContainer>
    )
}

export default CollectionPage