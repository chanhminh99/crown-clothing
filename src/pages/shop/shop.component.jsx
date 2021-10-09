import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {updateCollections} from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverView from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverView)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeSnapshot = null

    componentDidMount() {
        const {fetchCollections} = this.props
        const collectionRef = firestore.collection('collections')
        
        // this.unsubscribeSnapshot  = collectionRef.onSnapshot(async (collectionSnapshot) => {
        //     fetchCollections(convertCollectionsSnapshotToMap(collectionSnapshot))
        //     this.setState({loading: false})
        // })

        collectionRef.get().then(async (collectionSnapshot) => {
            fetchCollections(convertCollectionsSnapshotToMap(collectionSnapshot))
            this.setState({loading: false})
        }).catch((error) => console.log('Error while fetch some collections data', error))
    }

    componentWillUnmount() {
        if (this.unsubscribeSnapshot) {
            this.unsubscribeSnapshot()
        }
    }

    render() {
        const {match} = this.props
        const {loading} = this.state

        return (
            <div className='shop-page'>
                <Route
                    exact path={match.path}
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
                    />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
                    />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
