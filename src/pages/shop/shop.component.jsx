import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {updateCollections} from '../../redux/shop/shop.actions'

import CollectionOverView from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

class ShopPage extends React.Component {
    unsubscribeSnapshot = null

    componentDidMount() {
        const {fetchCollections} = this.props
        const collectionRef = firestore.collection('collections')
        
        this.unsubscribeSnapshot  = collectionRef.onSnapshot(async (collectionSnapshot) => {
            fetchCollections(convertCollectionsSnapshotToMap(collectionSnapshot))
        })
    }

    componentWillUnmount() {
        if (this.unsubscribeSnapshot) {
            this.unsubscribeSnapshot()
        }
    }

    render() {
        const {match} = this.props
        return (
            <div className='shop-page'>
                <Route exact path={match.path} component={CollectionOverView} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
