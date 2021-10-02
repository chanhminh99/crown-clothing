import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectShopCollections} from '../../redux/shop/shop.selectors'

import CollectionPreview from '../collection-preview/collection-preview.component'

import './collections-overview.styles.scss'

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {collections.map(({id, ...restCollectionProps}) => (
            <CollectionPreview key={id} {...restCollectionProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview)