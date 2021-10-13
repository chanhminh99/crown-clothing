import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/auth/sign-in-and-sign-up.component';

import {checkUserSession} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
// import { selectCollectionForPreview} from './redux/shop/shop.selectors'
const App = ({checkUserSession}) => {

  useEffect(() => {
    checkUserSession()
  
    /* Deprecated */
    // const {setCurrentUser} = this.props
    // const unsubscribeFromAuth= auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth)


    //     // Listening to userRef data changed
    //     const unsubscribeSnapshot = userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })
    //     })

    //   }

    //   setCurrentUser(userAuth)
      // await addCollectionAndDocuments('collections', this.props.collectionPreviewArray.map(({title, items}) => ({title, items})))
    // })
    /* Deprecated */
    // return () => {
    //   if (unsubscribeFromAuth) {
    //     unsubscribeFromAuth()
    //   }
    //   if (unsubscribeSnapshot) {
    //     unsubscribeFromAuth()
    //   }
    // }
  }, [checkUserSession])

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />} />
        </Switch>
      </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionPreviewArray: selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
