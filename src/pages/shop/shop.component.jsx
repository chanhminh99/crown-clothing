import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux';

import {fetchCollectionStartAsync} from '../../redux/shop/shop.actions'

import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
    unsubscribeSnapshot= null // Deprecated

    componentDidMount() {
        const {fetchCollections} = this.props
        
        // this.unsubscribeSnapshot  = collectionRef.onSnapshot(async (collectionSnapshot) => {
        //     fetchCollections(convertCollectionsSnapshotToMap(collectionSnapshot))
        //     this.setState({loading: false})
        // })

        fetchCollections()
    }

    render() {
        const {match} = this.props

        return (
            <div className='shop-page'>
                <Route
                    exact path={match.path}
                    component={CollectionOverviewContainer}
                    />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                    />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)
