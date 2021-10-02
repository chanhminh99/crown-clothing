import React from 'react';
import {Route} from 'react-router-dom'
import CollectionOverView from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact path={match.path} component={CollectionOverView} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage
