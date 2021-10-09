import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {fetchCollectionStartAsync} from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverView from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverView)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

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
        const {match, isCollectionsLoaded} = this.props

        return (
            <div className='shop-page'>
                <Route
                    exact path={match.path}
                    render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
                    />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
                    />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
